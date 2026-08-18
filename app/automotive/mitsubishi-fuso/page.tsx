import type { Metadata } from "next";
import { BrandPage } from "@/components/BrandPage";
import { webImages } from "@/lib/media";

export const metadata: Metadata = {
  title: "Mitsubishi Fuso",
  description:
    "Explore Mitsubishi Fuso commercial vehicle categories and ORBIS sales, service and parts support in Ethiopia.",
};

export default function MitsubishiFusoPage() {
  return (
    <BrandPage
      brand="Mitsubishi Fuso"
      title="Commercial mobility for demanding applications."
      intro="Commercial vehicle categories designed for logistics, construction, public transport and other business uses."
      heroImage={webImages.mitsubishiFuso}
      heroAlt="Mitsubishi Fuso Canter light-duty truck"
      featureImage={webImages.mitsubishiFusoHeavy}
      featureAlt="Mitsubishi Fuso Super Great heavy-duty truck"
      categories={["Light-Duty Applications", "Medium-Duty Applications", "Heavy-Duty Applications"]}
      capabilityTitle="Built around the needs of working businesses."
      capabilityText="ORBIS presents Mitsubishi Fuso within its commercial automotive portfolio. Vehicle models, configurations and availability are intentionally confirmed through a direct enquiry."
    />
  );
}
