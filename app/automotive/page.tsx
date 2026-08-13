import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InquiryCta } from "@/components/InquiryCta";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/content";

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
    image: "/assets/mercedes-passenger.jpg",
    href: "/automotive/mercedes-benz/",
  },
  {
    number: "02",
    name: "Renault",
    text: "Passenger and commercial vehicle categories supported by ORBIS.",
    image: "/assets/renault-kangoo.jpg",
    href: "/automotive/renault/",
  },
  {
    number: "03",
    name: "Mitsubishi Fuso",
    text: "Commercial vehicles for a range of business and transport applications.",
    image: "/assets/fuso-truck.jpg",
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
        image="/assets/mercedes-truck.jpg"
        imageAlt="Mercedes-Benz commercial vehicle"
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
                  <Image src={brand.image} alt="" fill sizes="220px" />
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
              src="/assets/mercedes-sprinter.jpg"
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
