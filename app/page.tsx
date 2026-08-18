import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLink } from "@/components/ArrowLink";
import { InquiryCta } from "@/components/InquiryCta";
import { SectionHeading } from "@/components/SectionHeading";
import { services, statistics, timeline } from "@/lib/content";
import { webImages } from "@/lib/media";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Serving Ethiopia Since 1950",
  description:
    "Discover ORBIS's automotive heritage, Mercedes-Benz story, aftersales capability, bus assembly and Ethiopian agricultural export business.",
};

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <Image
          className="home-hero__background"
          src={assetPath("/assets/orbis-building.jpg")}
          alt="ORBIS headquarters in Addis Ababa"
          fill
          priority
          sizes="100vw"
        />
        <div className="home-hero__overlay" />
        <div className="home-hero__year" aria-hidden="true">75</div>
        <div className="container home-hero__content">
          <div className="home-hero__primary">
            <div className="home-hero__kicker">
              <span>Since 1950</span>
              <span>Addis Ababa, Ethiopia</span>
            </div>
            <h1>
              <span>Serving Ethiopia Since 1950</span>
              Automotive, Service & Trade
            </h1>
            <p>
              ORBIS brings together vehicle sales, technical service, spare parts, local bus-body
              assembly and agricultural export activity from Addis Ababa.
            </p>
            <div className="home-hero__actions">
              <Link className="button button--gold" href="/automotive/">
                Explore automotive <span aria-hidden="true">↗</span>
              </Link>
              <ArrowLink href="/about/" tone="light">Discover our story</ArrowLink>
            </div>
          </div>

          <aside className="home-hero__spotlight" aria-label="Flagship automotive capability">
            <span>Flagship automotive</span>
            <strong>Mercedes-Benz</strong>
            <p>Sales · Service · Spare Parts</p>
            <Link href="/automotive/mercedes-benz/">
              Explore the Mercedes-Benz story <span aria-hidden="true">↗</span>
            </Link>
          </aside>
        </div>
        <div className="home-hero__rail">
          <span>75+ years</span>
          <span>Automotive</span>
          <span>International Trade</span>
        </div>
      </section>

      <section className="section heritage-intro" id="heritage">
        <div className="container heritage-intro__grid">
          <div className="heritage-intro__number" aria-hidden="true">75<span>+</span></div>
          <div className="heritage-intro__copy">
            <p className="eyebrow">A legacy built over generations</p>
            <h2>From Menelik Square to a diversified Ethiopian company.</h2>
            <p>
              ORBIS began at Menelik Square when Ethiopia's automotive market was still in its
              early years. The business grew across vehicle sales, technical service, spare
              parts, local engineering and international trade.
            </p>
            <ArrowLink href="/about/" tone="dark">Read the ORBIS story</ArrowLink>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <div className="timeline-section__heading">
            <span>1950</span>
            <div className="timeline-section__line" />
            <span>Today</span>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <article className="timeline__item" key={`${item.year}-${item.title}`}>
                <span className="timeline__dot" aria-hidden="true" />
                <span className="timeline__index">{String(index + 1).padStart(2, "0")}</span>
                <p className="timeline__year">{item.year}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mercedes-feature">
        <div className="container mercedes-feature__grid">
          <div className="mercedes-feature__copy">
            <p className="eyebrow eyebrow--light">Flagship automotive story</p>
            <h2>Mercedes-Benz at the heart of the ORBIS automotive story.</h2>
            <p>
              ORBIS presents Mercedes-Benz through a connected automotive operation covering
              sales, service and spare-parts support in Ethiopia.
            </p>
            <div className="mercedes-feature__pillars">
              {[["01", "Sales"], ["02", "Service"], ["03", "Spare Parts"]].map(([number, label]) => (
                <div key={label}>
                  <span>{number}</span>
                  <strong>{label}</strong>
                </div>
              ))}
            </div>
            <ArrowLink href="/automotive/mercedes-benz/" tone="gold">Explore Mercedes-Benz</ArrowLink>
          </div>
          <div className="mercedes-feature__visual">
            <Image
              src={assetPath(webImages.mercedesSprinter)}
              alt="Mercedes-Benz Sprinter presented in the ORBIS automotive portfolio"
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
            />
            <div className="mercedes-feature__caption">
              <span>Passenger</span>
              <span>Commercial</span>
              <span>Sprinter</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section brand-showcase">
        <div className="container">
          <SectionHeading
            eyebrow="Automotive division"
            title="International brands. Local ORBIS support."
            text="Explore the automotive portfolio and the sales, technical service and parts support behind it."
          />
          <div className="brand-showcase__grid">
            <Link className="brand-card brand-card--wide" href="/automotive/mercedes-benz/">
              <div className="brand-card__image">
                <Image
                  src={assetPath(webImages.mercedesTruck)}
                  alt="Mercedes-Benz commercial vehicle"
                  fill
                  sizes="(max-width: 900px) 100vw, 60vw"
                />
              </div>
              <div className="brand-card__copy">
                <span>Flagship</span>
                <h3>Mercedes-Benz</h3>
                <p>Passenger and commercial mobility supported by ORBIS.</p>
                <span className="brand-card__arrow">↗</span>
              </div>
            </Link>
            <Link className="brand-card" href="/automotive/renault/">
              <div className="brand-card__image">
                <Image src={assetPath(webImages.renaultDuster)} alt="Renault vehicle" fill sizes="(max-width: 900px) 100vw, 40vw" />
              </div>
              <div className="brand-card__copy">
                <span>Passenger & commercial</span>
                <h3>Renault</h3>
                <p>Practical mobility connected to ORBIS support.</p>
                <span className="brand-card__arrow">↗</span>
              </div>
            </Link>
            <Link className="brand-card brand-card--dark" href="/automotive/mitsubishi-fuso/">
              <div className="brand-card__image">
                <Image src={assetPath(webImages.mitsubishiFuso)} alt="Mitsubishi Fuso commercial vehicle" fill sizes="(max-width: 900px) 100vw, 40vw" />
              </div>
              <div className="brand-card__copy">
                <span>Commercial mobility</span>
                <h3>Mitsubishi Fuso</h3>
                <p>Transport solutions for demanding business applications.</p>
                <span className="brand-card__arrow">↗</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section services-overview">
        <div className="container">
          <SectionHeading
            eyebrow="Complete automotive support"
            title="Support that continues after the sale."
            text="ORBIS connects vehicle sales with technical service, spare parts and automotive component support."
          />
          <div className="services-overview__list">
            {services.map((service) => (
              <Link href={service.href} key={service.title}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bus-feature">
        <div className="bus-feature__media">
          <Image
            src={assetPath(webImages.ethiopianBus)}
            alt="ORBIS passenger bus"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div className="bus-feature__label">Local capability</div>
        </div>
        <div className="bus-feature__copy">
          <p className="eyebrow">Bus body assembly</p>
          <h2>Built for Ethiopian roads.</h2>
          <p>
            ORBIS combines Mercedes-Benz chassis and engines with local engineering,
            craftsmanship, testing and aftersales support.
          </p>
          <div className="process-line">
            {["Chassis", "Engineering", "Body assembly", "Testing", "Support"].map((step, index) => (
              <div key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
          <ArrowLink href="/bus-assembly/" tone="dark">Discover bus assembly</ArrowLink>
        </div>
      </section>

      <section className="export-feature">
        <Image
          className="export-feature__background"
          src={assetPath(webImages.ethiopianCoffee)}
          alt="Ethiopian coffee"
          fill
          sizes="100vw"
        />
        <div className="export-feature__overlay" />
        <div className="container export-feature__content">
          <p className="eyebrow eyebrow--light">Agricultural export</p>
          <h2>From Ethiopia to international markets.</h2>
          <p>ORBIS presents Ethiopian coffee, oilseeds and pulses for international product enquiries.</p>
          <div className="export-feature__categories">
            <Link href="/export/coffee/"><span>01</span><strong>Ethiopian Coffee</strong><span aria-hidden="true">↗</span></Link>
            <Link href="/export/oilseeds/"><span>02</span><strong>Oilseeds</strong><span aria-hidden="true">↗</span></Link>
            <Link href="/export/pulses/"><span>03</span><strong>Pulses</strong><span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="statistics statistics--final">
        <div className="container statistics__grid">
          <div className="statistics__intro">
            <p className="eyebrow eyebrow--light">ORBIS at a glance</p>
            <h2>Experience backed by operating capability.</h2>
          </div>
          <div className="statistics__items">
            {statistics.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InquiryCta
        eyebrow="Enquiries"
        title="Talk to the ORBIS team."
        text="Vehicle, service, spare-parts, bus-assembly and export enquiries are directed to the relevant ORBIS team."
        button="Start an enquiry"
      />
    </>
  );
}
