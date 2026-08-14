import type { Metadata } from "next";
import { InquiryCta } from "@/components/InquiryCta";
import { PageHero } from "@/components/PageHero";
import { ProductList } from "@/components/ProductList";
import { SectionHeading } from "@/components/SectionHeading";
import { coffeeGroups } from "@/lib/content";
import { webImages } from "@/lib/media";

export const metadata: Metadata = {
  title: "Ethiopian Green Coffee Export",
  description:
    "Explore ORBIS specialty, washed and natural Ethiopian green coffees from Sidama, Yirgacheffe, Guji, Limu, Lekempti, Djimmah and Kaffa.",
};

export default function CoffeePage() {
  const origins = Array.from(new Set(coffeeGroups.flatMap((group) => group.origins)));

  return (
    <>
      <PageHero
        eyebrow="Ethiopian Coffee"
        title="Ethiopian coffee. Exported with experience."
        text="Specialty, washed and natural green coffees from origins documented in the ORBIS portfolio."
        image={webImages.ethiopianCoffee}
        imageAlt="Ethiopian coffee beans being roasted"
        parentLabel="Agricultural Export"
        parentHref="/export/"
      />

      <section className="section coffee-intro">
        <div className="container coffee-intro__grid">
          <SectionHeading
            eyebrow="The birthplace of coffee"
            title="Origins recognized around the world."
            text="ORBIS's current profile documents seven Ethiopian coffee origins across specialty, washed and natural categories. Grades, harvest, packaging and availability are displayed only after confirmation."
          />
          <div className="coffee-origin-cloud" aria-label="Documented coffee origins">
            {origins.map((origin, index) => (
              <span key={origin} className={index % 3 === 0 ? "coffee-origin-cloud__large" : ""}>
                {origin}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section coffee-groups">
        <div className="container coffee-groups__grid">
          {coffeeGroups.map((group, index) => (
            <ProductList
              key={group.name}
              title={group.name}
              items={group.origins}
              index={String(index + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </section>

      <section className="coffee-editorial">
        <div className="coffee-editorial__copy">
          <p className="eyebrow eyebrow--light">Product information</p>
          <h2>Confirmed for every enquiry.</h2>
          <p>
            Coffee details can vary by crop and availability. ORBIS will confirm the relevant
            origin, processing category, grade, harvest, packaging and commercial details for
            each request.
          </p>
          <div className="verification-list">
            {[
              "Origin",
              "Processing category",
              "Available grade",
              "Harvest",
              "Packaging",
              "Availability",
            ].map((item) => (
              <span key={item}>✓ {item}</span>
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
