type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  theme = "light",
}: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align} section-heading--${theme}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p className="section-heading__text">{text}</p> : null}
    </header>
  );
}
