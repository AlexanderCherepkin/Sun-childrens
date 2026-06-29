"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HERO_VIDEOS = [
  "/videos/hero-background.mp4",
  "/videos/hero-classroom-teacher.mp4",
  "/videos/hero-kids-drawing.mp4",
  "/videos/kids-artwork.mp4",
  "/videos/student-drawing.mp4",
  "/videos/teacher-paintings.mp4",
];

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const isMobileLike = () =>
  typeof window !== "undefined" &&
  (window.matchMedia("(max-width: 768px) and (pointer: coarse)").matches ||
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent));

export function HeroBackdrop() {
  const [useVideo, setUseVideo] = useState(false);
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || isMobileLike()) return;
    setUseVideo(true);
  }, []);

  const handleEnded = () => {
    setIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.load();
    const play = () => v.play().catch(() => undefined);
    play();
    v.onloadedmetadata = play;
    return () => {
      v.onloadedmetadata = null;
    };
  }, [index]);

  return (
    <div className="absolute inset-0 z-0">
      {useVideo ? (
        <video
          ref={videoRef}
          key={HERO_VIDEOS[index]}
          autoPlay
          muted
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-hidden="true"
          onEnded={handleEnded}
        >
          <source src={HERO_VIDEOS[index]} type="video/mp4" />
        </video>
      ) : (
        <Image
          src="/images/hero-poster.jpg"
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          className="object-cover object-center"
          decoding="async"
          priority
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(24,30,56,0.28) 0%, rgba(24,30,56,0.36) 40%, rgba(24,30,56,0.42) 100%)",
          mixBlendMode: "multiply",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(16,20,40,0.55) 100%)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
