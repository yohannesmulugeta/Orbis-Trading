import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLink } from "@/components/ArrowLink";
import { InquiryCta } from "@/components/InquiryCta";
import { SectionHeading } from "@/components/SectionHeading";
import { coffeeGroups, services, statistics, timeline } from "@/lib/content";
import { webImages } from "@/lib/media";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Over 75 Years of Driving Ethiopia Forward",
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
        <div className="home-hero__year" aria-hidden="true">
          75
        </div>
        <div className="container home-hero__content">
          <div className="home-hero__kicker">
            <span>Since 1950</span>
            <span>Addis Ababa, Ethiopia</span>
          </div>
          <h1>
            <span>Over 75 Years of</span>
            Driving Ethiopia Forward
          </h1>
          <p>
            Automotive heritage, engineering capability and international trade built over
            generations.
          </p>
          <div className="home-hero__actions">
            <Link className="button button--gold" href="/about/">
              Discover our story <span aria-hidden="true">↗</span>
            </Link>
            <ArrowLink href="/automotive/mercedes-benz/" tone="light">
              Explore Mercedes-Benz
            </ArrowLink>
          </div>
        </div>
        <div className="home-hero__rail">
          <span>Automotive</span>
          <span>Engineering</span>
          <span>International Trade</span>
        </div>
        <a className="scroll-cue" href="#heritage">
          <span>Scroll to explore</span>
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="section heritage-intro" id="heritage">
        <div className="container heritage-intro__grid">
          <div className="heritage-intro__number" aria-hidden="true">
            75<span>+</span>
          </div>
          <div className="heritage-intro__copy">
            <p className="eyebrow">A legacy built over generations</p>
            <h2>From a modest office in 1950 to a diversified Ethiopian institution.</h2>
            <p>
              ORBIS began at Menelik Square when Ethiopia’s automotive market was still in
              its early years. Its forward-looking founders built a business that grew across
              vehicle sales, technical service, spare parts, engineering and export.
            </p>
            <ArrowLink href="/about/" tone="dark">
              Read the ORBIS story
            </ArrowLink>
          </div>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="container">
          <div className="timeline-section__heading">
            <span>1950</span>
            <div className="timeline-section__line" />
            <span>Today</span>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <article className="timeline__item" key={item.year}>
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
            <h2>An automotive legacy built with Mercedes-Benz.</h2>
            <p>
              ORBIS presents an integrated automotive operation around sales, service and
              spare parts, backed by decades of technical experience in Ethiopia.
            </p>
            <div className="mercedes-feature__pillars">
              {[
                ["01", "Sales"],
                ["02", "Service"],
                ["03", "Spare Parts"],
              ].map(([number, label]) => (
                <div key={label}>
                  <span>{number}</span>
                  <strong>{label}</strong>
                </div>
              ))}
            </div>
            <ArrowLink href="/automotive/mercedes-benz/" tone="gold">
              Explore Mercedes-Benz
            </ArrowLink>
          </div>
          <div className="mercedes-feature__visual">
            <span className="mercedes-feature__star" aria-hidden="true">
              ✦
            </span>
            <Image
              src={assetPath(webImages.mercedesSprinter)}
              alt="Mercedes-Benz Sprinter vehicle"
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
            title="World-class mobility. Local expertise."
            text="Explore the brands represented within ORBIS's automotive portfolio. Current model availability is confirmed directly by the sales team."
          />
          <div className="brand-showcase__grid">
            <Link className="brand-card brand-card--wide" href="/automotive/mercedes-benz/">
              <div className="brand-card__image">
                <Image
                  src={assetPath(webImages.mercedesSprinter)}
                  alt="Mercedes-Benz Sprinter passenger van"
                  fill
                  sizes="(max-width: 900px) 100vw, 60vw"
                />
              </div>
              <div className="brand-card__copy">
                <span>01 / Flagship</span>
                <h3>Mercedes-Benz</h3>
                <p>Passenger and commercial mobility supported by ORBIS.</p>
                <span className="brand-card__arrow">↗</span>
              </div>
            </Link>

            <Link className="brand-card" href="/automotive/renault/">
              <div className="brand-card__image">
                <Image
                  src={assetPath(webImages.renaultDuster)}
                  alt="Renault Duster SUV"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>
              <div className="brand-card__copy">
                <span>02</span>
                <h3>Renault</h3>
                <p>Passenger and commercial mobility.</p>
                <span className="brand-card__arrow">↗</span>
              </div>
            </Link>

            <Link className="brand-card brand-card--dark" href="/automotive/mitsubishi-fuso/">
              <div className="brand-card__image">
                <Image
                  src={assetPath(webImages.mitsubishiFuso)}
                  alt="Mitsubishi Fuso Canter truck"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>
              <div className="brand-card__copy">
                <span>03 / Commercial</span>
                <h3>Mitsubishi Fuso</h3>
                <p>Transport solutions for business applications.</p>
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
            title="More than vehicle sales."
            text="A connected support ecosystem designed around the vehicle ownership journey."
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

      <section className="statistics">
        <div className="container statistics__grid">
          <div className="statistics__intro">
            <p className="eyebrow eyebrow--light">Built on real capability</p>
            <h2>Experience measured in generations.</h2>
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

      <section className="bus-feature">
        <div className="bus-feature__media">
          <Image
            src={assetPath(webImages.automotiveWorkshop)}
            alt="Real automotive workshop interior"
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
            experienced craftsmanship, testing and aftersales support.
          </p>
          <div className="process-line">
            {[
              "Chassis",
              "Engineering",
              "Body assembly",
              "Testing",
              "Support",
            ].map((step, index) => (
              <div key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
          <ArrowLink href="/bus-assembly/" tone="dark">
            Discover bus assembly
          </ArrowLink>
        </div>
      </section>

      <section className="export-feature">
        <Image
          className="export-feature__background"
          src={assetPath(webImages.ethiopianCoffee)}
          alt="Ethiopian coffee roasting scene"
          fill
          sizes="100vw"
        />
        <div className="export-feature__overlay" />
        <div className="container export-feature__content">
          <p className="eyebrow eyebrow--light">Agricultural export</p>
          <h2>From Ethiopia to the world.</h2>
          <p>
            ORBIS exports selected Ethiopian agricultural products to markets across Asia,
            Europe and the Americas.
          </p>
          <div className="export-feature__categories">
            <Link href="/export/coffee/">
              <span>01</span>
              <strong>Ethiopian Coffee</strong>
              <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/export/oilseeds/">
              <span>02</span>
              <strong>Oilseeds</strong>
              <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/export/pulses/">
              <span>03</span>
              <strong>Pulses</strong>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section coffee-origins">
        <div className="container coffee-origins__grid">
          <div className="coffee-origins__visual">
            <Image
              src={assetPath(webImages.ethiopianCoffee)}
              alt="Ethiopian coffee beans being roasted"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className="coffee-origins__shade" />
            <div className="coffee-origins__badge">
              <span>Ethiopian</span>
              <strong>Green Coffee</strong>
            </div>
            <div className="coffee-origins__cards" aria-label="Documented Ethiopian coffee origins">
              {coffeeGroups[2].origins.map((origin) => (
                <span key={origin}>{origin}</span>
              ))}
            </div>
          </div>
          <div className="coffee-origins__copy">
            <p className="eyebrow">The origins of Ethiopian coffee</p>
            <h2>Distinct origins. One extraordinary birthplace.</h2>
            <p>
              Explore the specialty, washed and natural green coffees documented in the
              ORBIS export portfolio.
            </p>
            <div className="coffee-origins__groups">
              {coffeeGroups.map((group) => (
                <div key={group.name}>
                  <strong>{group.name}</strong>
                  <span>{group.origins.join(" · ")}</span>
                </div>
              ))}
            </div>
            <ArrowLink href="/export/coffee/" tone="dark">
              Explore Ethiopian coffee
            </ArrowLink>
          </div>
        </div>
      </section>

      <section className="section corporate-stories">
        <div className="container">
          <SectionHeading
            eyebrow="ORBIS stories"
            title="A company in motion."
            text="Three connected stories define the ORBIS of today."
          />
          <div className="corporate-stories__grid">
            {[
              {
                index: "01",
                title: "Over 75 years in Ethiopia",
                text: "A heritage that began at Menelik Square in 1950.",
                href: "/about/",
              },
              {
                index: "02",
                title: "Engineering local mobility",
                text: "Bus body assembly shaped for Ethiopian operating conditions.",
                href: "/bus-assembly/",
              },
              {
                index: "03",
                title: "Ethiopian origin, global reach",
                text: "Coffee, oilseeds and pulses for international markets.",
                href: "/export/",
              },
            ].map((story) => (
              <Link href={story.href} key={story.title}>
                <span>{story.index}</span>
                <h3>{story.title}</h3>
                <p>{story.text}</p>
                <span aria-hidden="true">Read story ↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InquiryCta
        eyebrow="What's next"
        title="Let's build what's next."
        text="Vehicle, service, spare-parts, bus-assembly and export enquiries are routed to the relevant ORBIS team."
        button="Start an enquiry"
      />
    </>
  );
}
