"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { City } from "@/types";

export interface MapProps {
  cities: City[];
  className?: string;
}

const YandexMap = dynamic(() => import("./YandexMap").then((m) => m.YandexMap), {
  ssr: false,
  loading: () => (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#f5f7fa]">
      <div className="flex flex-col items-center gap-3 text-muted">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-primary" />
        <span className="text-sm">Загрузка карты…</span>
      </div>
    </div>
  ),
});

const SVG_POINTS: Record<string, { x: number; y: number }> = {
  "Санкт-Петербург": { x: 160, y: 140 },
  "Владимир": { x: 280, y: 220 },
  "Нижний Новгород": { x: 260, y: 250 },
  "Самара": { x: 300, y: 290 },
  "Тольятти": { x: 320, y: 310 },
  "Уфа": { x: 360, y: 300 },
  "Екатеринбург": { x: 440, y: 240 },
  "Новосибирск": { x: 560, y: 260 },
  "Ростов-на-Дону": { x: 140, y: 360 },
  "Краснодар": { x: 180, y: 380 },
};

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

function RussiaMap({ cities }: { cities: City[] }) {
  const points = cities.map((city) => ({ ...city, ...SVG_POINTS[city.name] })).filter((p) => p.x != null);

  return (
    <svg
      viewBox="0 0 640 420"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
      aria-label="Карта присутствия центров Яркие дети"
    >
      <rect width="640" height="420" fill="#f5f7fa" />
      {points.map((city) => (
        <g key={city.name}>
          <circle cx={city.x} cy={city.y} r="12" fill="#a33f00" opacity="0.16" />
          <circle cx={city.x} cy={city.y} r="7" fill="#a33f00" opacity="0.28" />
          <circle cx={city.x} cy={city.y} r="3.5" fill="#a33f00" />
        </g>
      ))}
    </svg>
  );
}

export function Map({ cities, className }: MapProps) {
  const centerCities = cities.filter((c) => c.hasCenter);
  const isDesktop = useIsDesktop();
  const [showInteractive, setShowInteractive] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!isDesktop) return;
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowInteractive(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px", threshold: 0 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isDesktop]);

  // Mobile: only lightweight SVG, never load Yandex
  if (isDesktop === false) {
    return (
      <div
        className={cn(
          "relative h-full min-h-[360px] w-full overflow-hidden rounded-2xl border border-border bg-[#f5f7fa] shadow-sm",
          className
        )}
      >
        <RussiaMap cities={centerCities} />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-full w-full overflow-hidden rounded-2xl border border-border bg-[#f5f7fa] shadow-sm",
        className
      )}
    >
      {showInteractive ? (
        <YandexMap cities={centerCities} />
      ) : (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#f5f7fa]">
          <div className="flex flex-col items-center gap-3 text-muted">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-primary" />
            <span className="text-sm">Карта загрузится при прокрутке…</span>
          </div>
        </div>
      )}
    </div>
  );
}
