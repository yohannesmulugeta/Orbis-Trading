import type { Metadata } from "next";
import Image from "next/image";
import { InquiryCta } from "@/components/InquiryCta";
import { PageHero } from "@/components/PageHero";
import { ProductList } from "@/components/ProductList";
import { SectionHeading } from "@/components/SectionHeading";
import { oilseeds } from "@/lib/content";
import { webImages } from "@/lib/media";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Ethiopian Oilseeds Export",
  description:
    "Explore Ethiopian sesame seed, Niger seed, linseed and peanuts documented in the ORBIS export portfolio.",
};

export default function OilseedsPage() {
  return (
    <>
      <PageHero
        eyebrow="Oilseeds"
        title="Ethiopian oilseeds for international markets."
        text="A documented portfolio including Ethiopian sesame, Niger seed, linseed and peanuts."
        image={webImages.oilseeds}
        imageAlt="Close-up of white sesame seeds"
        parentLabel="Agricultural Export"
        parentHref="/export/"
      />
      <section className="section commodity-page">
        <div className="container commodity-page__grid">
          <SectionHeading
            eyebrow="ORBIS export portfolio"
            title="Five documented oilseed products."
            text="Availability, grade, harvest and packaging information are confirmed for each export enquiry."
          />
          <ProductList title="Oilseed products" items={oilseeds} index="01" />
        </div>
      </section>
      <section className="commodity-banner">
        <Image src={assetPath(webImages.oilseeds)} alt="White sesame seeds representing the oilseed portfolio" fill sizes="100vw" />
        <div className="commodity-banner__overlay" />
        <div className="container commodity-banner__content">
          <p className="eyebrow eyebrow--light">Commercial details</p>
          <h2>Product specifications are shared after requirement review.</h2>
        </div>
      </section>
      <InquiryCta
        eyebrow="Oilseed export enquiry"
        title="Discuss your oilseed requirement."
        text="Provide the product, estimated quantity, destination and packaging requirement."
        button="Request oilseed information"
      />
    </>
  );
}
