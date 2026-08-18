import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InquiryCta } from "@/components/InquiryCta";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Mercedes-Benz",
  description:
    "Explore the ORBIS and Mercedes-Benz automotive story in Ethiopia across sales, service and spare parts.",
};

export default function MercedesBenzPage() {
  return (
    <>
      <section className="mb-hero">
        <Image
          className="mb-hero__image"
          src={assetPath("/assets/mercedes-sprinter.jpg")}
          alt="Mercedes-Benz Sprinter presented in the ORBIS automotive portfolio"
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
          <h1>An automotive legacy built over generations.</h1>
          <p>
            A flagship ORBIS automotive story supported by vehicle sales, technical service
            and spare-parts capability in Ethiopia.
          </p>
          <div className="mb-hero__actions">
            <Link className="button button--gold" href="/contact/">
              Request vehicle information <span aria-hidden="true">↗</span>
            </Link>
            <Link className="mb-text-link" href="/services-parts/">Explore aftersales support ↗</Link>
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
              src={assetPath("/assets/mercedes-truck.jpg")}
              alt="Mercedes-Benz commercial vehicle"
              fill
              sizes="(max-width: 900px) 100vw, 52vw"
            />
            <span>Passenger · Commercial · Sprinter</span>
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

      <section className="section mb-applications">
        <div className="container mb-applications__grid">
          <div className="mb-applications__media">
            <Image
              src={assetPath("/assets/mercedes-sprinter.jpg")}
              alt="Mercedes-Benz Sprinter"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
          <div className="mb-applications__copy">
            <p className="eyebrow">Passenger & commercial mobility</p>
            <h2>Begin with the application, then confirm the vehicle.</h2>
            <p>
              ORBIS can review the intended use and confirm the relevant current vehicle
              category, model information and commercial details directly.
            </p>
            <div className="mb-applications__tags" aria-label="Mercedes-Benz categories">
              <span>Passenger Vehicles</span>
              <span>Commercial Vehicles</span>
              <span>Sprinter</span>
            </div>
            <Link className="button button--dark" href="/contact/">
              Discuss your requirement <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-local">
        <Image
          src={assetPath("/assets/bus-workshop.jpg")}
          alt="ORBIS workshop capability"
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
