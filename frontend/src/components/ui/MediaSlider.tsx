"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { VideoPlayer } from "./VideoPlayer";

export type MediaItem =
  | { type: "video"; url: string; poster?: string; title?: string; label?: string }
  | { type: "image"; url: string; alt?: string; label?: string };

export interface MediaSliderProps {
  items: MediaItem[];
  className?: string;
  autoPlay?: boolean;
  interval?: number;
}

export function MediaSlider({
  items,
  className,
  autoPlay = true,
  interval = 6000,
}: MediaSliderProps) {
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const total = items.length;
  const current = items[active];

  const goTo = React.useCallback((index: number) => {
    setActive((index + total) % total);
  }, [total]);

  const next = React.useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = React.useCallback(() => goTo(active - 1), [active, goTo]);

  React.useEffect(() => {
    if (!autoPlay || paused || total <= 1 || current?.type === "video") {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = setInterval(next, interval);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [autoPlay, paused, total, current, interval, next]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  if (!total) return null;

  return (
    <div
      className={cn("group overflow-hidden rounded-2xl bg-surface shadow-2xl ring-1 ring-border/40", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Галерея центра"
    >
      <div className="relative aspect-[16/9] bg-surface">
        {items.map((item, idx) => {
          const isActive = idx === active;
          return (
            <div
              key={idx}
              className={cn(
                "absolute inset-0 transition-all duration-700 ease-out",
                isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-[1.02] z-0 pointer-events-none"
              )}
              aria-hidden={!isActive}
              role="group"
              aria-roledescription="slide"
              aria-label={`${idx + 1} из ${total}`}
            >
              {item.type === "video" ? (
                <VideoPlayer
                  url={item.url}
                  poster={item.poster}
                  title={item.title}
                  className="h-full w-full rounded-none"
                />
              ) : (
                <Image
                  src={item.url}
                  alt={item.alt || item.label || `Слайд ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, 1200px"
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding={idx === 0 ? "auto" : "async"}
                />
              )}
            </div>
          );
        })}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

        <div className="absolute right-4 top-4 z-30 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {active + 1} / {total}
        </div>

        <button
          type="button"
          onClick={prev}
          className="absolute left-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-foreground shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary opacity-0 group-hover:opacity-100"
          aria-label="Предыдущий слайд"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={next}
          className="absolute right-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-foreground shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary opacity-0 group-hover:opacity-100"
          aria-label="Следующий слайд"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div className="absolute bottom-0 left-0 right-0 z-30 flex flex-col items-center gap-3 p-5 md:p-6">
          <div className="overflow-hidden rounded-xl border border-white/20 bg-white/10 px-5 py-3 shadow-xl backdrop-blur-md md:px-6 md:py-4">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-white/90">
              {current.label || (current.type === "video" ? "Видео" : "Фото")}
            </p>
            <p className="mt-1 text-center text-base font-medium leading-snug text-white md:text-lg">
              {current.type === "video" ? current.title || "Видео-тур" : current.alt || current.label || ""}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goTo(idx)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
                  idx === active ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                )}
                aria-label={`Перейти к слайду ${idx + 1}`}
                aria-current={idx === active ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border/50 bg-surface p-3 md:p-4">
        <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2">
          {items.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goTo(idx)}
              className={cn(
                "relative h-12 w-[4.2rem] flex-shrink-0 overflow-hidden rounded-md ring-2 transition-all duration-200 sm:h-14 sm:w-20 md:h-16 md:w-24",
                idx === active ? "ring-primary scale-105 shadow-md opacity-100" : "ring-transparent opacity-70 hover:opacity-100 hover:ring-border"
              )}
              aria-label={`Миниатюра ${idx + 1}`}
              aria-current={idx === active ? "true" : undefined}
            >
              {item.type === "video" ? (
                <>
                  {item.poster ? (
                    <Image src={item.poster} alt={item.label || "Видео"} fill className="object-cover" sizes="112px" decoding="async" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-muted">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-muted-foreground">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/90 text-white">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </>
              ) : (
                <Image src={item.url} alt={item.alt || item.label || `Миниатюра ${idx + 1}`} fill className="object-cover" sizes="112px" decoding="async" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
