"use client";

import dynamic from "next/dynamic";

const CookieBanner = dynamic(
  () => import("./CookieBanner").then((m) => m.CookieBanner),
  { ssr: false }
);
const MobileStickyButton = dynamic(
  () => import("./MobileStickyButton").then((m) => m.MobileStickyButton),
  { ssr: false }
);
const Analytics = dynamic(
  () => import("./Analytics").then((m) => m.Analytics),
  { ssr: false }
);

interface Props {
  yandexMetrikaId?: string | null;
  gtmId?: string | null;
}

export function DeferredClientComponents({ yandexMetrikaId, gtmId }: Props) {
  return (
    <>
      <Analytics
        yandexMetrikaId={yandexMetrikaId || undefined}
        gtmId={gtmId || undefined}
      />
      <CookieBanner />
      <MobileStickyButton />
    </>
  );
}
