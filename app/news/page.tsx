import type { Metadata } from "next";
import Link from "next/link";
import { InquiryCta } from "@/components/InquiryCta";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "News & Stories",
  description: "Corporate, automotive, bus assembly and export stories from ORBIS Ethiopia.",
};

const stories = [
  {
    category: "Corporate",
    title: "A heritage that began in 1950",
    text: "Explore the milestones that shaped ORBIS over more than 75 years in Ethiopia.",
    href: "/about/",
  },
  {
    category: "Automotive",
    title: "More than vehicle sales",
    text: "See how sales, technical service, spare parts and Bosch components connect.",
    href: "/services-parts/",
  },
  {
    category: "Engineering",
    title: "Built for Ethiopian roads",
    text: "Discover ORBIS's documented local bus-body assembly capability.",
    href: "/bus-assembly/",
  },
  {
    category: "Export",
    title: "From Ethiopia to the world",
    text: "Explore the ORBIS portfolio of green coffee, oilseeds and pulses.",
    href: "/export/",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & Stories"
        title="The ORBIS story continues."
        text="A content-ready space for corporate, automotive, engineering and export updates."
        image="/assets/orbis-building.jpg"
        imageAlt="ORBIS headquarters in Addis Ababa"
      />
      <section className="section news-page">
        <div className="container">
          <SectionHeading
            eyebrow="Featured stories"
            title="Start with the stories we can verify today."
            text="Dated news and announcements will be added after ORBIS supplies approved articles and media."
          />
          <div className="news-page__grid">
            {stories.map((story, index) => (
              <Link href={story.href} key={story.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{story.category}</p>
                <h2>{story.title}</h2>
                <div>{story.text}</div>
                <strong>Explore story ↗</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <InquiryCta
        eyebrow="Media & corporate enquiry"
        title="Contact ORBIS for more information."
        text="Route a corporate or media enquiry through the main contact channel."
        button="Contact ORBIS"
      />
    </>
  );
}
