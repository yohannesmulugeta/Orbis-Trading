import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { webImages } from "@/lib/media";

export const metadata: Metadata = {
  title: "Image Credits",
  description: "Image source and licensing credits for selected third-party photography used on the ORBIS website prototype.",
};

const credits = [
  {
    title: "Mercedes-Benz Sprinter (2018)",
    author: "Jason Lawrence",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Mercedes-Benz_Sprinter_(2018).jpg",
  },
  {
    title: "Renault Duster",
    author: "Abdulla Al Muhairi",
    license: "CC0 1.0",
    href: "https://commons.wikimedia.org/wiki/File:Renault_Duster_(51658579574).jpg",
  },
  {
    title: "Mitsubishi Fuso Super Great",
    author: "Sulthan Naufal",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Mitsubishi_Fuso_Super_Great_(B_9925_UEV).jpg",
  },
  {
    title: "Mercedes-Benz Tourismo",
    author: "SzSzili01",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Mercedes-Benz_Tourismo_(MAE-520).jpg",
  },
  {
    title: "Automotive mechanic performing maintenance",
    author: "Nenad Stojković / Shixart1985",
    license: "CC BY 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Mechanic_works_on_car_engine_performing_routine_maintenance_and_inspections_on_vehicle_parts.jpg",
  },
  {
    title: "Truck assembly line",
    author: "Intercooler422",
    license: "CC0 1.0",
    href: "https://commons.wikimedia.org/wiki/File:Linia_monta%C5%BCowa_pojazd%C3%B3w_ci%C4%99%C5%BCarowych.jpg",
  },
  {
    title: "Specialty coffee originated from Ethiopia",
    author: "Ethiopian coffee house",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Specialty_coffee_originated_from_ethiopia.jpg",
  },
  {
    title: "Traditional Ethiopian Coffee Roasting",
    author: "Charles Haynes",
    license: "CC BY-SA 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Traditional_Ethiopian_Coffee_Roasting.jpg",
  },
  {
    title: "Traditional Ethiopian coffee ceremony",
    author: "U.S. Department of State",
    license: "Public domain — U.S. Government work",
    href: "https://commons.wikimedia.org/wiki/File:Secretary_Tillerson_Attends_a_Traditional_Ethiopian_Coffee_Ceremony_(26834928728).jpg",
  },
  {
    title: "Additional vehicle and commodity demonstration imagery",
    author: "Various Wikimedia Commons contributors",
    license: "See each Wikimedia Commons source page for author and licence details",
    href: "https://commons.wikimedia.org/",
  },
];

export default function ImageCreditsPage() {
  return (
    <>
      <PageHero
        eyebrow="Image Credits"
        title="Photography sources & attribution."
        text="ORBIS-owned project assets are used wherever available. Selected third-party demonstration images are credited here while approved ORBIS photography is being expanded."
        image={webImages.companyBuilding}
        imageAlt="ORBIS headquarters in Addis Ababa"
      />
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Third-party imagery</p>
            <h2>Source transparency matters.</h2>
            <p className="section-heading__text">
              These credits apply to selected web-sourced images used in the current corporate prototype.
              Final launch photography should continue moving toward approved ORBIS-owned visual assets.
            </p>
          </div>
          <div className="services-overview__list">
            {credits.map((credit, index) => (
              <a href={credit.href} target="_blank" rel="noreferrer" key={credit.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{credit.title}</h3>
                <p>{credit.author} · {credit.license}</p>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
