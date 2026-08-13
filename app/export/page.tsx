import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InquiryCta } from "@/components/InquiryCta";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Agricultural Export",
  description:
    "Explore ORBIS Ethiopian green coffee, oilseeds and pulses for international export markets across Asia, Europe and the Americas.",
};

export default function ExportPage() {
  return (
    <>
      <PageHero
        eyebrow="Agricultural Export"
        title="Ethiopian origin. Global reach."
        text="Selected Ethiopian coffee, oilseeds and pulses for international markets."
        image="/assets/coffee-cherries.jpg"
        imageAlt="Coffee cherries growing in Ethiopia"
      />

      <section className="section export-intro">
        <div className="container export-intro__grid">
          <SectionHeading
            eyebrow="From Ethiopia to the world"
            title="Three product groups. Three continental markets."
            text="The ORBIS company profile documents agricultural export activity across Asia, Europe and the Americas. Specific destinations, grades, packaging and availability are confirmed per enquiry."
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
            <Image src="/assets/coffee-cherries.jpg" alt="Ethiopian coffee cherries" fill sizes="(max-width: 900px) 100vw, 60vw" />
            <div className="export-category__overlay" />
            <div className="export-category__copy">
              <span>01 / Primary category</span>
              <h2>Ethiopian Coffee</h2>
              <p>Specialty, washed and natural green coffees from documented origins.</p>
              <strong>Explore coffee ↗</strong>
            </div>
          </Link>
          <Link className="export-category" href="/export/oilseeds/">
            <Image src="/assets/pulses-oilseeds.jpg" alt="Oilseeds and pulses" fill sizes="(max-width: 900px) 100vw, 40vw" />
            <div className="export-category__overlay" />
            <div className="export-category__copy">
              <span>02</span>
              <h2>Oilseeds</h2>
              <strong>Explore oilseeds ↗</strong>
            </div>
          </Link>
          <Link className="export-category" href="/export/pulses/">
            <Image src="/assets/pulses-oilseeds.jpg" alt="Ethiopian pulses" fill sizes="(max-width: 900px) 100vw, 40vw" />
            <div className="export-category__overlay" />
            <div className="export-category__copy">
              <span>03</span>
              <h2>Pulses</h2>
              <strong>Explore pulses ↗</strong>
            </div>
          </Link>
        </div>
      </section>

      <section className="export-process">
        <div className="container">
          <SectionHeading
            eyebrow="Export enquiry process"
            title="From product interest to confirmed requirement."
            text="A simple, transparent route for beginning a commercial conversation."
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
