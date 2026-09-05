interface PageAtmosphereProps {
  variant?: "contour" | "grid";
}

export function PageAtmosphere({
  variant = "contour",
}: PageAtmosphereProps) {
  if (variant === "grid") {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] overflow-hidden opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      >
        <div className="absolute -right-16 top-10 size-[28rem] rotate-6 rounded-full [background-image:radial-gradient(circle,hsl(var(--accent)/0.28)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[38rem] w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,black_60%,transparent)]"
    >
      <div className="absolute -right-40 -top-48 size-[36rem] rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.16),transparent_68%)] dark:bg-[radial-gradient(circle,hsl(var(--accent)/0.12),transparent_68%)]" />
      <div className="absolute -left-56 top-20 size-[32rem] rounded-full bg-[radial-gradient(circle,hsl(218_42%_78%/0.18),transparent_70%)] dark:bg-[radial-gradient(circle,hsl(220_30%_34%/0.16),transparent_70%)]" />
    </div>
  );
}
