import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/content";
import { assetPath } from "@/lib/paths";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__accent" />
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <div className="site-footer__logo-wrap">
            <Image
              src={assetPath("/assets/orbis-logo.png")}
              alt="ORBIS Trading and Technical Centre"
              width={1024}
              height={256}
            />
          </div>
          <p>
            An Ethiopian automotive, engineering and international trading company with a
            heritage dating to 1950.
          </p>
          <p className="site-footer__summary">
            Vehicle sales, service, spare parts, bus assembly and export enquiries are
            directed to the appropriate ORBIS team.
          </p>
        </div>

        <div>
          <p className="footer-title">Explore</p>
          <div className="footer-links">
            <Link href="/about/">About ORBIS</Link>
            <Link href="/automotive/">Automotive</Link>
            <Link href="/services-parts/">Services & Parts</Link>
            <Link href="/bus-assembly/">Bus Assembly</Link>
            <Link href="/export/">Agricultural Export</Link>
            <Link href="/news/">News & Stories</Link>
            <Link href="/image-credits/">Image Credits</Link>
          </div>
        </div>

        <div>
          <p className="footer-title">Contact</p>
          <div className="footer-links footer-links--contact">
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <span>{contact.address}</span>
            <span>{contact.poBox}</span>
          </div>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} ORBIS Trading & Technical Centre S.C.</span>
        <span>Since 1950 · Addis Ababa, Ethiopia</span>
      </div>
    </footer>
  );
}
