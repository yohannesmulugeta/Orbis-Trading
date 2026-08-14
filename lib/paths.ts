export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yohannesmulugeta.github.io/Orbis-Trading";

export function assetPath(path: string) {
  if (/^(https?:|data:|blob:)/.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
