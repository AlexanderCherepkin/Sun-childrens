"use client";

import * as React from "react";

const HERO_VIDEOS = [
  "/videos/student-drawing.mp4",
  "/videos/teacher-paintings.mp4",
  "/videos/kids-artwork.mp4",
];

const VIDEO_INTERVAL_MS = 12000;
const FADE_DURATION_MS = 1200;

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

export function HeroVideo() {
  const isDesktop = useIsDesktop();
  const [activeVideo, setActiveVideo] = React.useState(0);
  const [fading, setFading] = React.useState(false);
  const mountedRef = React.useRef(false);

  React.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  React.useEffect(() => {
    if (!isDesktop) return;

    const fadeTimer = setTimeout(() => {
      if (mountedRef.current) setFading(true);
    }, VIDEO_INTERVAL_MS - FADE_DURATION_MS);

    const switchTimer = setTimeout(() => {
      if (mountedRef.current) {
        setActiveVideo((prev) => (prev + 1) % HERO_VIDEOS.length);
        setFading(false);
      }
    }, VIDEO_INTERVAL_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(switchTimer);
    };
  }, [activeVideo, isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {HERO_VIDEOS.map((src, idx) => {
        const isActive = activeVideo === idx;
        const isNext = ((activeVideo + 1) % HERO_VIDEOS.length) === idx;
        const visible = isActive || (fading && isNext);
        if (!isActive && !isNext) return null;
        return (
          <video
            key={src}
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/hero-poster.jpg"
            autoPlay
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />
        );
      })}
    </>
  );
}
