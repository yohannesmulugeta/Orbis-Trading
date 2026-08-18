import type { Metadata } from "next";
import Image from "next/image";
import { InquiryCta } from "@/components/InquiryCta";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { webImages } from "@/lib/media";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Bus Body Assembly",
  description:
    "Discover ORBIS bus-body assembly using Mercedes-Benz chassis and engines, local engineering, testing and aftersales support.",
};

const process = [
  ["01", "Chassis & engine", "Mercedes-Benz chassis and engine form the platform documented by ORBIS."],
  ["02", "Engineering", "The body concept is adapted for Ethiopian roads, landscape and weather."],
  ["03", "Body construction", "Experienced engineers and craftspeople build the passenger bus body."],
  ["04", "Testing", "Completed buses are tested under Ethiopian operating conditions."],
  ["05", "Aftersales", "Feedback and technical support contribute to continuous product improvement."],
];

export default function BusAssemblyPage() {
  return (
    <>
      <PageHero
        eyebrow="Bus Body Assembly"
        title="Built for Ethiopian roads."
        text="Mercedes-Benz chassis and engines combined with local engineering, body construction, testing and support."
        image={webImages.ethiopianBus}
        imageAlt="Mercedes-Benz passenger coach"
      />

      <section className="section bus-intro">
        <div className="container bus-intro__grid">
          <div>
            <p className="eyebrow">Local industrial capability</p>
            <h2>Engineering international platforms for local conditions.</h2>
          </div>
          <div>
            <p>
              ORBIS’s company profile describes a bus-body assembly operation that brings
              together Mercedes-Benz chassis and engines, capable engineers, experienced
              craftspeople and an established supply chain.
            </p>
            <p>
              The documented 65-seat bus is designed for passenger transport and tested on
              Ethiopian roads, with aftersales teams using customer feedback to improve the
              product over time.
            </p>
          </div>
        </div>
      </section>

      <section className="bus-product">
        <div className="container bus-product__grid">
          <div className="bus-product__image">
            <Image
              src={assetPath(webImages.ethiopianBus)}
              alt="Mercedes-Benz passenger coach"
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
            />
          </div>
          <div className="bus-product__copy">
            <span className="bus-product__number">65</span>
            <p className="eyebrow eyebrow--light">Documented seating configuration</p>
            <h2>A bus designed around mass mobility.</h2>
            <p>
              Configuration details, current production status and project requirements are
              confirmed directly by ORBIS before any commercial engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="section assembly-process">
        <div className="container">
          <SectionHeading
            eyebrow="From platform to passenger bus"
            title="One connected assembly process."
            text="A clear view of the capability documented in the ORBIS company profile."
          />
          <div className="assembly-process__list">
            {process.map(([number, title, text]) => (
              <article key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="workshop-banner">
        <Image
          src={assetPath(webImages.busAssembly)}
          alt="Modern truck and bus assembly line"
          fill
          sizes="100vw"
        />
        <div className="workshop-banner__overlay" />
        <div className="container workshop-banner__content">
          <p className="eyebrow eyebrow--light">Inside the assembly process</p>
          <h2>Engineering. Craftsmanship. Continuous improvement.</h2>
        </div>
      </section>

      <InquiryCta
        eyebrow="Bus project enquiry"
        title="Discuss your passenger transport requirement."
        text="Share the intended application and ORBIS will confirm the appropriate next steps."
        button="Contact the bus assembly team"
      />
    </>
  );
}
