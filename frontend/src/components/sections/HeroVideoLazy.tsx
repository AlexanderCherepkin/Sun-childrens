"use client";

import dynamic from "next/dynamic";

const HeroVideo = dynamic(
  () => import("./HeroVideo").then((m) => m.HeroVideo),
  { ssr: false }
);

export function HeroVideoLazy() {
  return <HeroVideo />;
}
