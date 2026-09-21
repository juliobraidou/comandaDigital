export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_NAME = "Comanda Digital";

export const SITE_TITLE = "Comanda Digital — Sistema de salão para pizzarias";

export const SITE_DESCRIPTION =
  "O garçom anota na mesa, a cozinha recebe na hora e a conta fecha sozinha. Sistema de salão para pizzarias, sem taxa por pedido e instalação no mesmo dia.";

export const WHATSAPP = "(11) 99999 0000";

// Opt-in explícito: sem a variável, previews e staging nunca são indexados.
export const ALLOW_INDEXING = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
