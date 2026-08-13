import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://orbistrading-ethiopia.com"),
  title: {
    default: "ORBIS Trading & Technical Centre | Ethiopia",
    template: "%s | ORBIS Ethiopia",
  },
  description:
    "ORBIS Trading & Technical Centre - automotive sales, service, spare parts, bus assembly and Ethiopian agricultural export since 1950.",
  keywords: [
    "ORBIS Ethiopia",
    "Mercedes-Benz Ethiopia",
    "automotive service Addis Ababa",
    "bus assembly Ethiopia",
    "Ethiopian coffee exporter",
  ],
  openGraph: {
    title: "ORBIS Trading & Technical Centre",
    description: "Over 75 years of automotive, engineering and international trading experience in Ethiopia.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/orbis-building.jpg",
        width: 1282,
        height: 986,
        alt: "ORBIS Trading and Technical Centre in Addis Ababa",
      },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ORBIS Trading and Technical Centre Share Company",
  foundingDate: "1950",
  url: "https://orbistrading-ethiopia.com",
  email: "orbis.trading@ethionet.et",
  telephone: "+251115516211",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
    postOfficeBoxNumber: "321",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
