import Link from "next/link";
import type { ReactNode } from "react";

interface EditorialProofHeroProps {
  bio: readonly string[];
  email: string;
  listening: {
    track: string;
    artist: string;
    href: string;
  };
}

export function EditorialProofHero({
  bio,
  email,
  listening,
}: EditorialProofHeroProps) {
  return (
    <div className="relative grid gap-x-10 gap-y-8 py-5 lg:grid-cols-[1.5fr_0.8fr] lg:items-start">
      <ProofCorner position="left" />
      <ProofCorner position="right" />

      <p className="eyebrow mb-0 lg:col-start-1 lg:row-start-1">
        Bengaluru, India
      </p>

      <div className="lg:col-start-1 lg:row-start-2">
        <h1 className="max-w-4xl font-serif text-6xl leading-[0.96] tracking-[-0.04em] sm:text-7xl lg:text-[6.6rem]">
          <span className="grid grid-cols-[1.5rem_1fr] items-center gap-2">
            <ProofIndex>01</ProofIndex>
            <span>Software engineer.</span>
          </span>
          <span className="grid grid-cols-[1.5rem_1fr] items-center gap-2">
            <ProofIndex>02</ProofIndex>
            <span>Photographer.</span>
          </span>
          <span className="grid grid-cols-[1.5rem_1fr] items-center gap-2 text-accent">
            <ProofIndex>03</ProofIndex>
            <span>Experimenter.</span>
          </span>
        </h1>
        <a
          href={listening.href}
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex max-w-fit flex-wrap items-center gap-3 pl-8 text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
        >
          <span aria-hidden="true">🎵</span>
          <span className="text-accent">On repeat</span>
          <span className="h-px w-8 bg-border" aria-hidden="true" />
          <span>
            {listening.track} — {listening.artist} ↗
          </span>
        </a>
      </div>

      <div className="grid grid-cols-2 border-y border-border py-3 text-[0.58rem] uppercase tracking-[0.18em] text-muted-foreground lg:col-start-2 lg:row-start-1">
        <p>
          Field
          <span className="mt-1 block text-foreground">
            Distributed systems
          </span>
        </p>
        <p className="border-l border-border pl-4">
          Practice
          <span className="mt-1 block text-accent">
            AI-native engineering
          </span>
        </p>
      </div>

      <div className="thread-rule space-y-5 lg:col-start-2 lg:row-start-2">
        {bio.map((paragraph) => (
          <p
            key={paragraph}
            className="text-pretty text-base leading-7 text-muted-foreground"
          >
            {paragraph}
          </p>
        ))}
        <div className="flex flex-wrap gap-4 pt-2">
          <Link className="text-link" href="/about">
            More about me ↗
          </Link>
          <a className="text-link" href={`mailto:${email}`}>
            Say hello ↗
          </a>
        </div>
      </div>
    </div>
  );
}

function ProofIndex({ children }: { children: ReactNode }) {
  return (
    <span className="font-sans text-[0.55rem] leading-none tracking-[0.14em] text-muted-foreground">
      {children}
    </span>
  );
}

function ProofCorner({ position }: { position: "left" | "right" }) {
  return (
    <span
      aria-hidden="true"
      className={
        position === "left"
          ? "absolute -left-3 -top-3 size-5 border-l border-t border-accent/50"
          : "absolute -right-3 -top-3 size-5 border-r border-t border-accent/50"
      }
    />
  );
}
