import type { Metadata } from "next";
import Image from "next/image";
import { InquiryCta } from "@/components/InquiryCta";
import { PageHero } from "@/components/PageHero";
import { ProductList } from "@/components/ProductList";
import { SectionHeading } from "@/components/SectionHeading";
import { pulses } from "@/lib/content";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Ethiopian Pulses Export",
  description:
    "Explore Ethiopian beans, soybean, mung beans, lentils, chickpeas and mustard seed documented in the ORBIS export portfolio.",
};

export default function PulsesPage() {
  return (
    <>
      <PageHero
        eyebrow="Pulses"
        title="A diverse Ethiopian pulse portfolio."
        text="Beans, soybean, mung beans, lentils, chickpeas and mustard seed for export enquiry."
        image="/assets/pulses-oilseeds.jpg"
        imageAlt="A diverse selection of pulses"
        parentLabel="Agricultural Export"
        parentHref="/export/"
      />
      <section className="section commodity-page">
        <div className="container commodity-page__grid">
          <SectionHeading
            eyebrow="ORBIS export portfolio"
            title="Documented pulse products from Ethiopia."
            text="The product list follows the supplied ORBIS company profile. Current specifications and commercial details are confirmed per enquiry."
          />
          <ProductList title="Pulse products" items={pulses} index="01" />
        </div>
      </section>
      <section className="commodity-banner">
        <Image src={assetPath("/assets/pulses-oilseeds.jpg")} alt="Ethiopian pulses" fill sizes="100vw" />
        <div className="commodity-banner__overlay" />
        <div className="container commodity-banner__content">
          <p className="eyebrow eyebrow--light">Verified for every order</p>
          <h2>Grade, crop, packaging and availability are confirmed directly.</h2>
        </div>
      </section>
      <InquiryCta
        eyebrow="Pulse export enquiry"
        title="Discuss your pulse requirement."
        text="Provide the product, estimated quantity, destination and packaging requirement."
        button="Request pulse information"
      />
    </>
  );
}
