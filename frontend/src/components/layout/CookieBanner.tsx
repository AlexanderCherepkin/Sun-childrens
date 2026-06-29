"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "cookie-consent";

function getServerSnapshot() {
  return "true";
}

function getSnapshot() {
  if (typeof window === "undefined") return "true";
  return localStorage.getItem(STORAGE_KEY) || "false";
}

function subscribe(callback: () => void) {
  const handler = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) callback();
  };
  window.addEventListener("storage", handler);
  return () => window.removeEventListener("storage", handler);
}

export function CookieBanner() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    try {
      setVisible(localStorage.getItem(STORAGE_KEY) !== "true");
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white p-4 shadow-lg md:bottom-4 md:left-4 md:right-4 md:rounded-xl">
      <div className="container-app flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted">
          Мы используем cookie для аналитики и персонализации. Продолжая использование сайта, вы соглашаетесь с{" "}
          <Link href="/privacy" className="text-[#5e2300] hover:underline font-semibold">Политикой конфиденциальности</Link>.
        </p>
        <Button onClick={accept} size="sm">Понятно</Button>
      </div>
    </div>
  );
}
