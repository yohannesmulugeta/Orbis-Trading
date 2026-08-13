import Image from "next/image";
import Link from "next/link";
import { InquiryCta } from "@/components/InquiryCta";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

type BrandPageProps = {
  brand: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  featureImage: string;
  featureAlt: string;
  categories: string[];
  capabilityTitle: string;
  capabilityText: string;
};

export function BrandPage({
  brand,
  title,
  intro,
  heroImage,
  heroAlt,
  featureImage,
  featureAlt,
  categories,
  capabilityTitle,
  capabilityText,
}: BrandPageProps) {
  return (
    <>
      <PageHero
        eyebrow={brand}
        title={title}
        text={intro}
        image={heroImage}
        imageAlt={heroAlt}
        parentLabel="Automotive"
        parentHref="/automotive/"
      />

      <section className="section section--cream">
        <div className="container split-feature split-feature--editorial">
          <div className="split-feature__copy">
            <SectionHeading eyebrow="ORBIS automotive" title={capabilityTitle} text={capabilityText} />
            <div className="inline-tags" aria-label={`${brand} categories`}>
              {categories.map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>
            <Link className="button button--dark" href="/contact/">
              Request information <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="split-feature__media split-feature__media--clean">
            <Image src={featureImage} alt={featureAlt} fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="section automotive-support">
        <div className="container">
          <SectionHeading
            eyebrow="Complete support"
            title="Sales. Service. Spare Parts."
            text="ORBIS supports the ownership journey through an integrated automotive operation in Addis Ababa."
          />
          <div className="automotive-support__grid">
            {[
              ["01", "Sales", "Discuss the category and application that fit your requirement."],
              ["02", "Service", "Maintenance and technical support from ORBIS's workshop operation."],
              ["03", "Parts", "Parts assistance supported by an extensive organized warehouse."],
            ].map(([number, label, text]) => (
              <article key={label}>
                <span>{number}</span>
                <h3>{label}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InquiryCta
        eyebrow={`${brand} enquiry`}
        title={`Talk to ORBIS about ${brand}`}
        text="Model availability and technical details are confirmed directly by the ORBIS sales team."
        button="Contact automotive sales"
      />
    </>
  );
}
