import { webImages } from "@/lib/media";

export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yohannesmulugeta.github.io/Orbis-Trading";

const demoImageOverrides: Record<string, string> = {
  "/assets/orbis-building.jpg": webImages.companyBuilding,
  "/assets/orbis-showroom.jpg": webImages.companyShowroom,
  "/assets/orbis-legacy.jpg": webImages.heritageMercedes,
  "/assets/mercedes-sprinter.jpg": webImages.mercedesSprinter,
  "/assets/mercedes-truck.jpg": webImages.mercedesTruck,
  "/assets/renault-duster.jpg": webImages.renaultDuster,
  "/assets/renault-kangoo.jpg": webImages.renaultKangoo,
  "/assets/fuso-truck.jpg": webImages.mitsubishiFuso,
  "/assets/orbis-bus.jpg": webImages.ethiopianBus,
  "/assets/bus-workshop.jpg": webImages.automotiveWorkshop,
  "/assets/bosch-parts.jpg": webImages.partsWorkshop,
  "/assets/pulses-oilseeds.jpg": webImages.oilseeds,
  "/assets/ethiopian-road.jpg": webImages.ethiopianRoad,
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
