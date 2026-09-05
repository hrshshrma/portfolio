import Link from "next/link";

export default function NotFound() {
  return (
    <div className="reading-container page-shell text-center">
      <p className="eyebrow">404</p>
      <h1 className="page-title mx-auto">This thread ends here.</h1>
      <p className="lede mx-auto mt-6">
        The page may have moved, or it was never part of the fabric.
      </p>
      <Link href="/" className="text-link mt-8 inline-block">
        Return home ↗
      </Link>
    </div>
  );
}
