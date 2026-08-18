import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EditorialAccordion } from "@/components/EditorialAccordion";
import { InquiryCta } from "@/components/InquiryCta";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { coffeeGroups, oilseeds, pulses } from "@/lib/content";
import { webImages } from "@/lib/media";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Agricultural Export",
  description:
    "Explore ORBIS Ethiopian green coffee, oilseeds and pulses for international export markets across Asia, Europe and the Americas.",
};

export default function ExportPage() {
  const portfolioItems = [
    {
      title: "Coffee categories",
      text: coffeeGroups.map((group) => group.name).join(", "),
      label: "01",
    },
    {
      title: "Oilseeds",
      text: oilseeds.join(", "),
      label: "02",
    },
    {
      title: "Pulses",
      text: pulses.join(", "),
      label: "03",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Agricultural Export"
        title="Agricultural export from Ethiopia."
        text="Coffee, oilseeds and pulses are presented for international product enquiries."
        image={webImages.ethiopianCoffee}
        imageAlt="Coffee quality inspection in Ethiopia"
      />

      <section className="section export-intro">
        <div className="container export-intro__grid">
          <SectionHeading
            eyebrow="From Ethiopia to the world"
            title="Coffee, oilseeds and pulses for export enquiries."
            text="ORBIS presents agricultural export activity across Asia, Europe and the Americas. Product grade, packaging, volume and availability are confirmed directly for each enquiry."
          />
          <div className="global-reach">
            <div className="global-reach__origin">
              <span>Origin</span>
              <strong>Ethiopia</strong>
            </div>
            <div className="global-reach__routes" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="global-reach__markets">
              <span>Asia</span>
              <span>Europe</span>
              <span>Americas</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section export-categories">
        <div className="container export-categories__grid">
          <Link className="export-category export-category--coffee" href="/export/coffee/">
            <Image
              src={assetPath(webImages.greenCoffee)}
              alt="Unroasted green coffee beans"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
            <div className="export-category__overlay" />
            <div className="export-category__copy">
              <span>01 / Primary category</span>
              <h2>Ethiopian Coffee</h2>
              <p>Green coffee categories and origins are confirmed against current availability.</p>
              <strong>Explore coffee ↗</strong>
            </div>
          </Link>
          <Link className="export-category" href="/export/oilseeds/">
            <Image src={assetPath(webImages.oilseeds)} alt="White sesame seeds" fill sizes="(max-width: 900px) 100vw, 40vw" />
            <div className="export-category__overlay" />
            <div className="export-category__copy">
              <span>02</span>
              <h2>Oilseeds</h2>
              <p>Product detail, packaging and availability are confirmed per enquiry.</p>
              <strong>Explore oilseeds ↗</strong>
            </div>
          </Link>
          <Link className="export-category" href="/export/pulses/">
            <Image src={assetPath(webImages.pulses)} alt="Chickpeas representing the pulse portfolio" fill sizes="(max-width: 900px) 100vw, 40vw" />
            <div className="export-category__overlay" />
            <div className="export-category__copy">
              <span>03</span>
              <h2>Pulses</h2>
              <p>Export requirements are reviewed by product, quantity and destination.</p>
              <strong>Explore pulses ↗</strong>
            </div>
          </Link>
        </div>
      </section>

      <section className="section export-portfolio">
        <div className="container export-portfolio__grid">
          <div>
            <p className="eyebrow">Documented export portfolio</p>
            <h2>Clear product groups before the commercial discussion starts.</h2>
            <p>
              The supplied ORBIS profile lists Ethiopian green coffee categories, oilseeds
              and pulses. The website presents those groups clearly while leaving grade, crop,
              packaging and availability for direct confirmation.
            </p>
          </div>
          <EditorialAccordion
            items={portfolioItems}
            ariaLabel="ORBIS documented agricultural export portfolio"
          />
        </div>
      </section>

      <section className="export-process">
        <div className="container">
          <SectionHeading
            eyebrow="Export enquiry process"
            title="A clear route for product enquiries."
            text="The page keeps the first step simple while detailed commercial terms are handled directly by the export team."
            theme="dark"
          />
          <div className="export-process__grid">
            {[
              ["01", "Select product", "Choose coffee, oilseeds or pulses."],
              ["02", "Share requirement", "Provide quantity, destination and packaging needs."],
              ["03", "Confirm availability", "ORBIS confirms current product and commercial details."],
              ["04", "Continue directly", "The export team manages the next commercial steps."],
            ].map(([number, title, text]) => (
              <article key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InquiryCta
        eyebrow="Export enquiry"
        title="Source from Ethiopia with ORBIS."
        text="Tell us the product, estimated quantity, destination and packaging requirement."
        button="Start an export enquiry"
      />
    </>
  );
}
