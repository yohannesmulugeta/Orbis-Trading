import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>This road does not lead to an ORBIS page.</h1>
        <p>The page may have moved, or the address may be incomplete.</p>
        <Link className="button button--gold" href="/">
          Return home <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
