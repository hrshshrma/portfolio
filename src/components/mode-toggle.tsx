"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="rounded-full px-2"
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <SunIcon
        aria-hidden="true"
        className="h-[1.1rem] w-[1.1rem] text-foreground dark:hidden"
      />
      <MoonIcon
        aria-hidden="true"
        className="hidden h-[1.1rem] w-[1.1rem] text-foreground dark:block"
      />
    </Button>
  );
}
