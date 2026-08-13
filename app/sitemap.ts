import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/paths";

export const dynamic = "force-static";

const routes = [
  "",
  "/about",
  "/automotive",
  "/automotive/mercedes-benz",
  "/automotive/renault",
  "/automotive/mitsubishi-fuso",
  "/services-parts",
  "/bus-assembly",
  "/export",
  "/export/coffee",
  "/export/oilseeds",
  "/export/pulses",
  "/news",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "" || route === "/news" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
