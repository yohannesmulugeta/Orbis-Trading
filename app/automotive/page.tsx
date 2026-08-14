import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InquiryCta } from "@/components/InquiryCta";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/content";
import { webImages } from "@/lib/media";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Automotive Excellence Since 1950",
  description:
    "Explore Mercedes-Benz, Renault and Mitsubishi Fuso together with ORBIS automotive sales, service and spare-parts support.",
};

const brands = [
  {
    number: "01",
    name: "Mercedes-Benz",
    text: "The flagship ORBIS automotive story across passenger and commercial mobility.",
    image: webImages.mercedesSprinter,
    href: "/automotive/mercedes-benz/",
  },
  {
    number: "02",
    name: "Renault",
    text: "Passenger and commercial vehicle categories supported by ORBIS.",
    image: webImages.renaultDuster,
    href: "/automotive/renault/",
  },
  {
    number: "03",
    name: "Mitsubishi Fuso",
    text: "Commercial vehicles for a range of business and transport applications.",
    image: webImages.mitsubishiFuso,
    href: "/automotive/mitsubishi-fuso/",
  },
];

export default function AutomotivePage() {
  return (
    <>
      <PageHero
        eyebrow="Automotive"
        title="Automotive excellence since 1950."
        text="International automotive brands supported by local sales, service and technical experience."
        image={webImages.mercedesSprinter}
        imageAlt="Mercedes-Benz Sprinter passenger van"
      />

      <section className="section automotive-brands-page">
        <div className="container">
          <SectionHeading
            eyebrow="Our automotive portfolio"
            title="Mobility built around real customer needs."
            text="Explore each brand and contact ORBIS to confirm current vehicle categories, models and availability."
          />
          <div className="automotive-brands-page__list">
            {brands.map((brand) => (
              <Link href={brand.href} key={brand.name}>
                <span>{brand.number}</span>
                <div>
                  <h3>{brand.name}</h3>
                  <p>{brand.text}</p>
                </div>
                <div className="automotive-brands-page__image">
                  <Image src={assetPath(brand.image)} alt="" fill sizes="220px" />
                </div>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="automotive-ecosystem">
        <div className="container">
          <SectionHeading
            eyebrow="ORBIS 3S automotive operation"
            title="One connected support ecosystem."
            text="Sales, service and spare-parts operations work together to support customers beyond the initial vehicle enquiry."
            theme="dark"
          />
          <div className="automotive-ecosystem__grid">
            {services.map((service) => (
              <article key={service.title}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link href={service.href}>Explore ↗</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dealership-model">
        <div className="container dealership-model__grid">
          <div>
            <p className="eyebrow">3S dealership model</p>
            <h2>Sales, service and spare parts presented as one customer journey.</h2>
            <p>
              The ORBIS company profile identifies the represented automotive brands through
              a 3S dealership model: Sales, Service and Spare Parts. This helps visitors
              understand that the relationship continues after the first vehicle discussion.
            </p>
          </div>
          <div className="dealership-model__steps">
            {[
              ["01", "Sales", "Vehicle categories and availability are confirmed directly by the automotive team."],
              ["02", "Service", "Workshop and technical support continue through the ownership lifecycle."],
              ["03", "Spare parts", "An organized parts operation supports represented brands and maintenance needs."],
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

      <section className="section automotive-application">
        <div className="container automotive-application__grid">
          <div>
            <p className="eyebrow">Find the right category</p>
            <h2>Start with the work your vehicle needs to do.</h2>
            <p>
              Tell ORBIS whether you need passenger mobility, goods movement, fleet use or
              another business application. The team can then discuss the relevant available
              category without relying on assumptions.
            </p>
            <Link className="button button--dark" href="/contact/">
              Request vehicle information <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="automotive-application__image">
            <Image
              src={assetPath(webImages.mercedesSprinter)}
              alt="Mercedes-Benz Sprinter commercial vehicle"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <InquiryCta
        eyebrow="Automotive enquiry"
        title="Talk to the ORBIS automotive team."
        text="Ask about vehicle categories, sales support, service or spare parts."
        button="Start an automotive enquiry"
      />
    </>
  );
}
