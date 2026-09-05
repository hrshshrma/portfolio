import { SITE } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="site-container grid gap-10 py-10 sm:grid-cols-[1fr_auto] sm:items-end">
        <div className="max-w-md">
          <p className="font-serif text-2xl">Work, photographs, and notes.</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            A personal record of systems I build, photographs I keep, and ideas
            I am still testing.
          </p>
        </div>
        <div className="space-y-4 sm:text-right">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 sm:justify-end">
            {SITE.social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground"
                  rel="me noreferrer"
                  target="_blank"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Email
              </a>
            </li>
          </ul>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Harsh Sharma
          </p>
        </div>
      </div>
    </footer>
  );
}
