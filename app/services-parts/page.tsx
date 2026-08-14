import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InquiryCta } from "@/components/InquiryCta";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { aftersalesFocus } from "@/lib/content";
import { webImages } from "@/lib/media";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Automotive Service & Spare Parts",
  description:
    "Explore ORBIS vehicle service, maintenance, body and paint, genuine spare parts and Bosch automotive components in Addis Ababa.",
};

export default function ServicesPartsPage() {
  return (
    <>
      <PageHero
        eyebrow="Services & Parts"
        title="Support that continues beyond the sale."
        text="Workshop capability, experienced technicians, organized spare-parts support and Bosch automotive components."
        image={webImages.automotiveWorkshop}
        imageAlt="Real automotive workshop interior"
      />

      <section className="section service-intro" id="service">
        <div className="container service-intro__grid">
          <SectionHeading
            eyebrow="Aftersales service"
            title="Technical support built around the vehicle lifecycle."
            text="ORBIS's legacy service information and company profile document a connected workshop operation for represented automotive brands."
          />
          <div className="service-capabilities">
            {[
              ["01", "Pre-delivery inspection", "Mechanical, body and finish checks before delivery of new vehicles."],
              ["02", "Express maintenance", "Standard maintenance support for eligible vehicle categories."],
              ["03", "Diagnostics & technical support", "Workshop assistance from trained engineers and technicians."],
              ["04", "Body & paint", "Major and minor body and paint repair capability."],
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

      <section className="parts-feature" id="parts">
        <div className="parts-feature__image">
          <Image
            src={assetPath("/assets/bosch-parts.jpg")}
            alt="Automotive spare parts presented in the ORBIS company profile"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
        <div className="parts-feature__copy">
          <p className="eyebrow eyebrow--light">Spare parts</p>
          <h2>The right part. The right support.</h2>
          <p>
            ORBIS maintains an extensive organized parts operation supporting represented
            vehicle brands and customer maintenance needs.
          </p>
          <div className="parts-feature__stat">
            <strong>~16,000</strong>
            <span>spare-parts line items documented in the company profile</span>
          </div>
          <Link className="button button--gold" href="/contact/">
            Request spare-parts support <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="section parts-planning">
        <div className="container">
          <SectionHeading
            eyebrow="How parts support is planned"
            title="A more complete view of aftersales capability."
            text="The company profile explains that ORBIS plans parts support around maintenance needs, brand standards and partner recommendations."
          />
          <div className="parts-planning__grid">
            {aftersalesFocus.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bosch-section" id="bosch">
        <div className="container bosch-section__grid">
          <div>
            <p className="eyebrow">Bosch automotive components</p>
            <h2>Global component expertise, available through ORBIS.</h2>
            <p>
              ORBIS provides Bosch automotive components for the Ethiopian market. Product
              selection and availability are confirmed through the ORBIS parts team.
            </p>
            <Link className="button button--dark" href="/contact/">
              Enquire about Bosch components <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="bosch-section__image">
            <Image
              src={assetPath("/assets/bosch-parts.jpg")}
              alt="Bosch automotive components"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <InquiryCta
        eyebrow="Aftersales enquiry"
        title="Book service or request parts support."
        text="Share your vehicle and request details so ORBIS can direct you to the right team."
        button="Start an aftersales enquiry"
      />
    </>
  );
}
