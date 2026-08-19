import { webImages } from "@/lib/media";

export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yohannesmulugeta.github.io/Orbis-Trading";

// Legacy asset aliases are kept only where the local file is intentionally
// replaced by a higher-quality vehicle/category visual. Genuine ORBIS building,
// showroom, bus, workshop and brand assets are served directly from /public.
const demoImageOverrides: Record<string, string> = {
  "/assets/mercedes-sprinter.jpg": webImages.mercedesSprinter,
  "/assets/mercedes-truck.jpg": webImages.mercedesTruck,
  "/assets/renault-duster.jpg": webImages.renaultDuster,
  "/assets/renault-kangoo.jpg": webImages.renaultKangoo,
  "/assets/fuso-truck.jpg": webImages.mitsubishiFuso,
  "/assets/pulses-oilseeds.jpg": webImages.oilseeds,
};

export function assetPath(path: string) {
  if (/^(https?:|data:|blob:)/.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const override = demoImageOverrides[normalizedPath];

  if (override) {
    return override;
  }

  return `${basePath}${normalizedPath}`;
}
