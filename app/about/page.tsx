import type { Metadata } from "next";
import Image from "next/image";
import { InquiryCta } from "@/components/InquiryCta";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { companyHighlights, coreValues, facilityCapabilities, statistics, timeline } from "@/lib/content";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "About ORBIS",
  description:
    "Learn about ORBIS's history since 1950, mission, vision, values and facilities in Addis Ababa.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ORBIS"
        title="Over 75 years. One forward-looking journey."
        text="From Menelik Square in 1950 to a diversified automotive, engineering and export business."
        image="/assets/orbis-building.jpg"
        imageAlt="ORBIS headquarters in Addis Ababa"
      />

      <section className="section" id="who-we-are">
        <div className="container about-intro">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2>An established Ethiopian company built around mobility and trade.</h2>
          </div>
          <div className="about-intro__body">
            <p>
              ORBIS Trading & Technical Centre began when Ethiopia’s automotive and
              industrial markets were still emerging. Its founders anticipated the country’s
              development and built long-term relationships around vehicles, machinery,
              technical service and parts.
            </p>
            <p>
              Today, the company profile presents a multi-division organization spanning
              automotive sales and support, bus-body assembly, Bosch automotive components
              and Ethiopian agricultural exports.
            </p>
          </div>
        </div>
      </section>

      <section className="section company-snapshot">
        <div className="container company-snapshot__grid">
          <SectionHeading
            eyebrow="Company snapshot"
            title="A business structure built for automotive support."
            text="The company profile describes ORBIS through its dealership model, facilities, warehouse operation and customer-facing support areas."
          />
          <div className="company-snapshot__cards">
            {companyHighlights.map((item, index) => (
              <article key={item.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-history" id="history">
        <div className="about-history__image">
          <Image
            src={assetPath("/assets/orbis-legacy.jpg")}
            alt="Legacy ORBIS photograph from the existing company website"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
        <div className="about-history__content">
          <p className="eyebrow eyebrow--light">Our history</p>
          <h2>1950 marked the beginning—not the destination.</h2>
          <div className="about-history__timeline">
            {timeline.map((item) => (
              <article key={item.year}>
                <span>{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section mission-vision" id="mission">
        <div className="container mission-vision__grid">
          <article>
            <span>01</span>
            <p className="eyebrow">Mission</p>
            <h2>Earn customer loyalty through quality, value and integrity.</h2>
            <p>
              ORBIS’s mission is to deliver strong sales and service experiences through
              teamwork, ethical standards and a commitment to customer expectations.
            </p>
          </article>
          <article>
            <span>02</span>
            <p className="eyebrow">Vision</p>
            <h2>Build trust in automotive distribution and grow in export markets.</h2>
            <p>
              The company’s vision combines professional experience in trading and
              manufacturing with a clear ambition for trusted service and international reach.
            </p>
          </article>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <SectionHeading
            eyebrow="Core values"
            title="The principles behind the work."
            text="The ORBIS company profile identifies these values as the foundation of its culture."
          />
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div key={value}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section facilities-section" id="facilities">
        <div className="container facilities-section__grid">
          <div className="facilities-section__copy">
            <p className="eyebrow">Facilities & capability</p>
            <h2>Infrastructure that supports the entire automotive journey.</h2>
            <p>
              The ORBIS facility brings together workshop operations, parts storage, vehicle
              inspection, offices and a customs-bonded warehouse for new vehicles.
            </p>
            <div className="facility-stats">
              {statistics.slice(1).map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
            <ul className="facility-list" aria-label="Documented ORBIS facility capabilities">
              {facilityCapabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          </div>
          <div className="facilities-section__image">
            <Image
              src={assetPath("/assets/orbis-showroom.jpg")}
              alt="ORBIS Trading and Technical Center building in Addis Ababa"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <InquiryCta
        eyebrow="Continue the story"
        title="Explore ORBIS today."
        text="Discover the automotive, engineering and export divisions shaped by this long history."
        button="Contact ORBIS"
      />
    </>
  );
}
