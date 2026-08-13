export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yohannesmulugeta.github.io/Orbis-Trading";

export function assetPath(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
