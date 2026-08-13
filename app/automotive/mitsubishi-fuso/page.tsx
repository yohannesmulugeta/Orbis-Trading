import type { Metadata } from "next";
import { BrandPage } from "@/components/BrandPage";

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
      heroImage="/assets/fuso-truck.jpg"
      heroAlt="Mitsubishi Fuso commercial vehicle"
      featureImage="/assets/fuso-truck.jpg"
      featureAlt="Mitsubishi Fuso truck"
      categories={["Light-Duty Applications", "Medium-Duty Applications", "Heavy-Duty Applications"]}
      capabilityTitle="Built around the needs of working businesses."
      capabilityText="ORBIS presents Mitsubishi Fuso within its commercial automotive portfolio. Vehicle models, configurations and availability are intentionally confirmed through a direct enquiry."
    />
  );
}
