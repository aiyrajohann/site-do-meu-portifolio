import raw from "./achadinhos.json";
import type { Achadinho } from "./achadinhos.types";

function isAchadinho(obj: any): obj is Achadinho {
  return (
    typeof obj.id === "string" &&
    typeof obj.titulo === "string" &&
    typeof obj.descricao === "string" &&
    typeof obj.link === "string"
  );
}

export const achadinhos: Achadinho[] = (raw as any[]).filter(isAchadinho);

export function getAchadinhoById(id: string) {
  return achadinhos.find((a) => a.id === id);
}
