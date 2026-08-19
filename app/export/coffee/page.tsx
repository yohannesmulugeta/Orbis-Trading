import type { Metadata } from "next";
import Image from "next/image";
import { InquiryCta } from "@/components/InquiryCta";
import { ProductList } from "@/components/ProductList";
import { SectionHeading } from "@/components/SectionHeading";
import { coffeeGroups } from "@/lib/content";
import { webImages } from "@/lib/media";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Ethiopian Green Coffee Export",
  description:
    "Explore ORBIS specialty, washed and natural Ethiopian green coffees from Sidama, Yirgacheffe, Guji, Limu, Lekempti, Djimmah and Kaffa.",
};

const coffeeStory = [
  {
    number: "01",
    eyebrow: "Origin",
    title: "Coffee begins with Ethiopia.",
    text: "ORBIS presents Ethiopian green coffee through origin and processing categories documented in the company's export portfolio.",
    image: webImages.coffeeCeremony,
    alt: "Traditional Ethiopian coffee ceremony",
  },
  {
    number: "02",
    eyebrow: "Guji",
    title: "An origin with global recognition.",
    text: "Guji appears in the ORBIS portfolio across specialty, washed and natural coffee categories. Commercial details are confirmed for each enquiry.",
    image: webImages.coffeeGuji,
    alt: "Coffee production imagery from Ethiopia associated with Guji",
  },
  {
    number: "03",
    eyebrow: "Yirgacheffe",
    title: "A coffee name known far beyond Ethiopia.",
    text: "Yirgacheffe is documented by ORBIS across specialty, washed and natural categories. Grade, harvest, packaging and availability are confirmed before quotation.",
    image: webImages.coffeeYirgacheffe,
    alt: "Traditional coffee roasting in Yirgacheffe, Ethiopia",
  },
];

export default function CoffeePage() {
  const origins = Array.from(new Set(coffeeGroups.flatMap((group) => group.origins)));

  return (
    <>
      <section className="coffee-hero">
        <Image
          className="coffee-hero__image"
          src={assetPath(webImages.ethiopianCoffee)}
          alt="Ethiopian specialty coffee production"
          fill
          priority
          sizes="100vw"
        />
        <div className="coffee-hero__overlay" />
        <div className="container coffee-hero__content">
          <p className="eyebrow eyebrow--light">Agricultural Export · Ethiopian Coffee</p>
          <h1>Ethiopian coffee, told through origin.</h1>
          <p>
            Specialty, washed and natural green coffees from origins documented in the ORBIS
            portfolio—presented with a clearer path from discovery to commercial enquiry.
          </p>
          <div className="coffee-hero__facts" aria-label="ORBIS documented coffee portfolio">
            <div><strong>7</strong><span>Documented origins</span></div>
            <div><strong>3</strong><span>Portfolio categories</span></div>
            <div><strong>1</strong><span>Direct enquiry path</span></div>
          </div>
        </div>
      </section>

      <section className="coffee-story" aria-labelledby="coffee-story-title">
        <div className="container coffee-story__grid">
          <aside className="coffee-story__intro">
            <p className="eyebrow">The Ethiopian coffee story</p>
            <h2 id="coffee-story-title">From birthplace to export enquiry.</h2>
            <p>
              The page uses documentary Ethiopian coffee imagery and keeps commercial claims
              limited to information ORBIS can confirm.
            </p>
          </aside>
          <div className="coffee-story__chapters">
            {coffeeStory.map((item) => (
              <article className="coffee-story-card" key={item.number}>
                <div className="coffee-story-card__media">
                  <Image src={assetPath(item.image)} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 58vw" />
                  <div className="coffee-story-card__overlay" />
                </div>
                <div className="coffee-story-card__copy">
                  <span>{item.number}</span>
                  <p>{item.eyebrow}</p>
                  <h3>{item.title}</h3>
                  <div>{item.text}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section coffee-origin-explorer">
        <div className="container coffee-origin-explorer__grid">
          <SectionHeading
            eyebrow="Explore by origin"
            title="Seven Ethiopian origins in the current ORBIS portfolio."
            text="Use the origin list as a starting point. ORBIS confirms the available processing category, grade, harvest, packaging and commercial terms for each enquiry."
          />
          <div className="coffee-origin-cloud coffee-origin-cloud--premium" aria-label="Documented coffee origins">
            {origins.map((origin, index) => (
              <span key={origin}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                {origin}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section coffee-groups coffee-groups--premium">
        <div className="container">
          <SectionHeading
            eyebrow="Portfolio categories"
            title="Specialty, washed and natural coffee."
            text="The groupings below reflect the origins documented in the current ORBIS portfolio."
          />
          <div className="coffee-groups__grid">
            {coffeeGroups.map((group, index) => (
              <ProductList
                key={group.name}
                title={group.name}
                items={group.origins}
                index={String(index + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="coffee-verification">
        <div className="container coffee-verification__grid">
          <div>
            <p className="eyebrow eyebrow--light">Commercial confidence</p>
            <h2>Confirmed for every enquiry.</h2>
            <p>
              Coffee details can vary by crop and availability. ORBIS confirms the relevant
              product information before commercial engagement rather than publishing assumed specifications.
            </p>
          </div>
          <div className="verification-list verification-list--premium">
            {[
              "Origin",
              "Processing category",
              "Available grade",
              "Harvest",
              "Packaging",
              "Availability",
            ].map((item, index) => (
              <span key={item}><small>{String(index + 1).padStart(2, "0")}</small>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <InquiryCta
        eyebrow="Coffee export enquiry"
        title="Tell us what coffee you are looking for."
        text="Share the origin or category, estimated quantity, destination and packaging requirement."
        button="Request coffee information"
      />
    </>
  );
}
