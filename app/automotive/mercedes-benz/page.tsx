import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InquiryCta } from "@/components/InquiryCta";
import { webImages } from "@/lib/media";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Mercedes-Benz",
  description:
    "Explore the ORBIS and Mercedes-Benz automotive story in Ethiopia across sales, service and spare parts.",
};

const ownershipJourney = [
  ["01", "Requirement", "Start with how the vehicle will be used—passenger, commercial, fleet or another business application."],
  ["02", "Vehicle discussion", "ORBIS confirms the relevant current category, model information and availability directly."],
  ["03", "Delivery support", "The vehicle enquiry connects to ORBIS sales and technical teams before handover."],
  ["04", "Aftersales", "Workshop support and spare-parts capability continue through the ownership lifecycle."],
];

export default function MercedesBenzPage() {
  return (
    <>
      <section className="mb-hero mb-hero--premium">
        <Image
          className="mb-hero__image"
          src={assetPath(webImages.mercedesSprinter)}
          alt="Modern Mercedes-Benz Sprinter"
          fill
          priority
          sizes="100vw"
        />
        <div className="mb-hero__overlay" />
        <div className="container mb-hero__content">
          <nav className="breadcrumb breadcrumb--light" aria-label="Breadcrumb">
            <Link href="/automotive/">Automotive</Link>
            <span aria-hidden="true">/</span>
            <span>Mercedes-Benz</span>
          </nav>
          <p className="mb-hero__eyebrow">Mercedes-Benz · ORBIS Automotive</p>
          <h1>A flagship automotive story built over generations.</h1>
          <p>
            Mercedes-Benz sits at the centre of the ORBIS automotive story—supported by sales,
            technical service and spare-parts capability in Ethiopia.
          </p>
          <div className="mb-hero__actions">
            <Link className="button button--gold" href="/contact/">
              Request vehicle information <span aria-hidden="true">↗</span>
            </Link>
            <Link className="mb-text-link" href="/services-parts/">Explore aftersales support ↗</Link>
          </div>
        </div>
        <div className="mb-assurance-bar">
          <div className="container mb-assurance-bar__grid">
            <div><span>01</span><strong>Sales</strong><small>Vehicle enquiries & category guidance</small></div>
            <div><span>02</span><strong>Service</strong><small>Workshop & technical support</small></div>
            <div><span>03</span><strong>Spare Parts</strong><small>Parts support within ORBIS</small></div>
          </div>
        </div>
      </section>

      <section className="section mb-story">
        <div className="container mb-story__grid">
          <div className="mb-story__copy">
            <p className="eyebrow">The ORBIS automotive story</p>
            <h2>Premium mobility connected to local experience.</h2>
            <p>
              The ORBIS company profile presents Mercedes-Benz as a central part of the
              company's automotive heritage. The website therefore connects the vehicle story
              directly to the local sales, workshop and parts operations behind it.
            </p>
            <p className="mb-story__note">
              Current models, technical specifications and availability are confirmed directly
              by the ORBIS automotive team.
            </p>
          </div>
          <div className="mb-story__media">
            <Image
              src={assetPath(webImages.mercedesTruck)}
              alt="Mercedes-Benz Actros commercial truck"
              fill
              sizes="(max-width: 900px) 100vw, 52vw"
            />
            <span>Passenger · Commercial · Sprinter</span>
          </div>
        </div>
      </section>

      <section className="mb-range">
        <div className="container">
          <div className="mb-range__heading">
            <p className="eyebrow eyebrow--light">Explore by application</p>
            <h2>Start with what the vehicle needs to do.</h2>
            <p>ORBIS confirms current models and availability after understanding the intended use.</p>
          </div>
          <div className="mb-range__grid">
            <article className="mb-range-card mb-range-card--passenger">
              <Image src={assetPath(webImages.mercedesPassenger)} alt="Mercedes-Benz passenger vehicle" fill sizes="(max-width: 900px) 100vw, 50vw" />
              <div className="mb-range-card__overlay" />
              <div className="mb-range-card__copy">
                <span>01 · Passenger</span>
                <h3>Passenger mobility.</h3>
                <p>Discuss current passenger-vehicle categories with the ORBIS automotive team.</p>
                <Link href="/contact/">Enquire about passenger vehicles ↗</Link>
              </div>
            </article>
            <article className="mb-range-card">
              <Image src={assetPath(webImages.mercedesTruck)} alt="Mercedes-Benz commercial truck" fill sizes="(max-width: 900px) 100vw, 50vw" />
              <div className="mb-range-card__overlay" />
              <div className="mb-range-card__copy">
                <span>02 · Commercial</span>
                <h3>Business & transport applications.</h3>
                <p>Start with payload, route and intended application before the current vehicle is confirmed.</p>
                <Link href="/contact/">Discuss a commercial requirement ↗</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section mb-ownership">
        <div className="container mb-ownership__grid">
          <div className="mb-ownership__intro">
            <p className="eyebrow">One connected journey</p>
            <h2>From requirement to long-term support.</h2>
            <p>
              The premium experience should make clear that ORBIS is not only presenting a vehicle.
              It is presenting the support operation around that vehicle.
            </p>
          </div>
          <div className="mb-ownership__steps">
            {ownershipJourney.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-support">
        <div className="container">
          <div className="mb-support__heading">
            <p className="eyebrow eyebrow--light">One connected ownership journey</p>
            <h2>Sales. Service. Spare Parts.</h2>
          </div>
          <div className="mb-support__grid">
            <article>
              <span>Sales</span>
              <h3>Start with the right vehicle category.</h3>
              <p>
                Discuss passenger, commercial or business mobility requirements with the ORBIS
                automotive team before model and availability confirmation.
              </p>
              <Link href="/contact/">Talk to automotive sales ↗</Link>
            </article>
            <article>
              <span>Service</span>
              <h3>Technical support beyond delivery.</h3>
              <p>
                ORBIS connects the vehicle enquiry to workshop, maintenance and technical
                support capability in Addis Ababa.
              </p>
              <Link href="/services-parts/#service">Explore service capability ↗</Link>
            </article>
            <article>
              <span>Parts</span>
              <h3>Parts support within the same operation.</h3>
              <p>
                An organized parts operation supports represented brands and ongoing
                maintenance requirements.
              </p>
              <Link href="/services-parts/#parts">Explore spare parts ↗</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="mb-fleet">
        <div className="mb-fleet__media">
          <Image src={assetPath(webImages.mercedesSprinter)} alt="Mercedes-Benz Sprinter for business mobility" fill sizes="(max-width: 900px) 100vw, 55vw" />
        </div>
        <div className="mb-fleet__copy">
          <p className="eyebrow">Fleet & corporate enquiries</p>
          <h2>Make the conversation about the operation, not only the model.</h2>
          <p>
            Companies and institutions can describe the intended vehicle application, quantity
            and operating requirement so ORBIS can route the enquiry to the appropriate automotive team.
          </p>
          <div className="mb-fleet__tags">
            <span>Passenger mobility</span>
            <span>Goods movement</span>
            <span>Fleet requirements</span>
          </div>
          <Link className="button button--dark" href="/contact/">
            Start a fleet enquiry <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="mb-local">
        <Image
          src={assetPath(webImages.serviceWorkshop)}
          alt="ORBIS automotive service workshop"
          fill
          sizes="100vw"
        />
        <div className="mb-local__overlay" />
        <div className="container mb-local__content">
          <p className="eyebrow eyebrow--light">Local support in Ethiopia</p>
          <h2>The vehicle is only one part of the ORBIS relationship.</h2>
          <p>
            Sales, workshop support and spare parts are presented together so customers can
            understand the ownership support behind the automotive portfolio.
          </p>
          <Link className="mb-text-link" href="/services-parts/">See service & parts capability ↗</Link>
        </div>
      </section>

      <InquiryCta
        eyebrow="Mercedes-Benz enquiry"
        title="Talk to ORBIS about Mercedes-Benz."
        text="Share the intended vehicle application and ORBIS will confirm the relevant current information."
        button="Contact automotive sales"
      />
    </>
  );
}
