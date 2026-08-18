import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { contact } from "@/lib/content";
import { webImages } from "@/lib/media";

export const metadata: Metadata = {
  title: "Contact ORBIS",
  description:
    "Contact ORBIS in Addis Ababa for vehicle sales, service, spare parts, bus assembly and agricultural export enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="One company. The right team for every enquiry."
        text="Choose your area of interest and connect with ORBIS in Addis Ababa."
        image={webImages.companyShowroom}
        imageAlt="Contemporary automotive dealership showroom used as a demo visual"
      />
      <section className="section contact-page">
        <div className="container contact-page__grid">
          <aside className="contact-details">
            <p className="eyebrow">Get in touch</p>
            <h2>ORBIS Trading & Technical Centre S.C.</h2>
            <div>
              <span>Address</span>
              <p>{contact.address}</p>
            </div>
            <div>
              <span>Telephone</span>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
            </div>
            <div>
              <span>Email</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div>
              <span>Postal</span>
              <p>{contact.poBox}</p>
            </div>
            <div>
              <span>Fax</span>
              <p>{contact.fax}</p>
            </div>
          </aside>
          <div className="contact-page__form">
            <p className="eyebrow">Start an enquiry</p>
            <h2>Tell us how ORBIS can help.</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
