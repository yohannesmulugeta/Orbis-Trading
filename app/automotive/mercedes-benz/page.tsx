import type { Metadata } from "next";
import { BrandPage } from "@/components/BrandPage";
import { webImages } from "@/lib/media";

export const metadata: Metadata = {
  title: "Mercedes-Benz",
  description:
    "Explore the ORBIS and Mercedes-Benz automotive story in Ethiopia across sales, service and spare parts.",
};

export default function MercedesBenzPage() {
  return (
    <BrandPage
      brand="Mercedes-Benz"
      title="An automotive legacy built over generations."
      intro="The flagship ORBIS automotive story, supported by an integrated sales, service and spare-parts operation in Ethiopia."
      heroImage={webImages.mercedesSprinter}
      heroAlt="Mercedes-Benz Sprinter passenger van"
      featureImage={webImages.mercedesSprinter}
      featureAlt="Mercedes-Benz Sprinter passenger van"
      categories={["Passenger Vehicles", "Commercial Vehicles", "Sprinter"]}
      capabilityTitle="Premium mobility backed by local experience."
      capabilityText="ORBIS's company profile presents Mercedes-Benz as a central part of its automotive heritage. Current categories, models, technical specifications and availability are confirmed directly by the ORBIS team."
    />
  );
}
