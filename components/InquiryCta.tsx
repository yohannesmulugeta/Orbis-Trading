import Link from "next/link";

type InquiryCtaProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
  button?: string;
};

export function InquiryCta({
  eyebrow = "Start a conversation",
  title = "Connect with ORBIS",
  text = "Tell us what you need and our team will route your enquiry to the right business division.",
  button = "Contact ORBIS",
}: InquiryCtaProps) {
  return (
    <section className="inquiry-cta">
      <div className="inquiry-cta__line" />
      <div className="container inquiry-cta__inner">
        <div>
          <p className="eyebrow eyebrow--light">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <div>
          <p>{text}</p>
          <Link className="button button--gold" href="/contact/">
            {button} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
