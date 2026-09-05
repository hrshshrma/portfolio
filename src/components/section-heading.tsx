import Link from "next/link";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkLabel = "View all",
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-xl text-pretty text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {href && (
        <Link href={href} className="text-link self-start sm:self-end">
          {linkLabel}
          <span aria-hidden="true"> ↗</span>
        </Link>
      )}
    </div>
  );
}
