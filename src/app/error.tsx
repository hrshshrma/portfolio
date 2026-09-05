"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="reading-container page-shell text-center">
      <p className="eyebrow">Something slipped</p>
      <h1 className="page-title mx-auto">That didn’t hold together.</h1>
      <p className="lede mx-auto mt-6">
        Try the page once more. If it keeps happening, the problem needs a
        closer look.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-full bg-foreground px-5 py-2.5 text-sm text-background hover:bg-accent"
      >
        Try again
      </button>
    </div>
  );
}
