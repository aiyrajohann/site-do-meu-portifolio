export default async function handler(req, res) {
  try {
    const IG_USER_ID = process.env.IG_USER_ID;          // Instagram Business Account ID
    const IG_ACCESS_TOKEN = process.env.IG_ACCESS_TOKEN; // Long-lived token

    if (!IG_USER_ID || !IG_ACCESS_TOKEN) {
      return res.status(500).json({
        error: "Faltam variáveis IG_USER_ID e/ou IG_ACCESS_TOKEN",
      });
    }

    const url =
      `https://graph.facebook.com/v19.0/${IG_USER_ID}` +
      `?fields=username,followers_count,media_count` +
      `&access_token=${encodeURIComponent(IG_ACCESS_TOKEN)}`;

    const r = await fetch(url);
    const data = await r.json();

    if (!r.ok) {
      return res.status(r.status).json({ error: "Erro na Graph API", details: data });
    }

    // Cache no edge da Vercel pra não torrar rate-limit
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600"); // 5 min cache
    return res.status(200).json({
      username: data.username,
      followers: data.followers_count,
      mediaCount: data.media_count,
      updatedAt: new Date().toISOString(),
    });
  } catch (e) {
    return res.status(500).json({ error: "Erro inesperado", details: String(e?.message ?? e) });
  }
}
