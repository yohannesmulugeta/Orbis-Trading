import Link from "next/link";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  tone?: "gold" | "light" | "dark";
  className?: string;
};

export function ArrowLink({
  href,
  children,
  tone = "gold",
  className = "",
}: ArrowLinkProps) {
  return (
    <Link className={`arrow-link arrow-link--${tone} ${className}`} href={href}>
      <span>{children}</span>
      <span aria-hidden="true" className="arrow-link__icon">
        ↗
      </span>
    </Link>
  );
}
