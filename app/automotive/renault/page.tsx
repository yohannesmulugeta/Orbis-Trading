import type { Metadata } from "next";
import { BrandPage } from "@/components/BrandPage";

export const metadata: Metadata = {
  title: "Renault",
  description:
    "Explore Renault passenger and commercial mobility categories supported by ORBIS in Ethiopia.",
};

export default function RenaultPage() {
  return (
    <BrandPage
      brand="Renault"
      title="Practical mobility for everyday and business needs."
      intro="Renault is part of ORBIS's long automotive story, with passenger and commercial vehicle categories supported locally."
      heroImage="/assets/renault-duster.jpg"
      heroAlt="ORBIS Renault showroom frontage"
      featureImage="/assets/renault-kangoo.jpg"
      featureAlt="ORBIS Renault showroom frontage"
      categories={["Passenger Mobility", "Commercial Mobility"]}
      capabilityTitle="Renault mobility, connected to ORBIS support."
      capabilityText="ORBIS supports Renault customers through automotive sales, maintenance and parts operations. Contact the team to confirm the current vehicle range and suitability for your application."
    />
  );
}
