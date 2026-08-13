import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/paths";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  parentLabel?: string;
  parentHref?: string;
};

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  parentLabel = "Home",
  parentHref = "/",
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <Image className="page-hero__image" src={assetPath(image)} alt={imageAlt} fill priority sizes="100vw" />
      <div className="page-hero__overlay" />
      <div className="container page-hero__content">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href={parentHref}>{parentLabel}</Link>
          <span aria-hidden="true">/</span>
          <span>{eyebrow}</span>
        </nav>
        <p className="eyebrow eyebrow--light">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
