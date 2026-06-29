"use client";

import * as React from "react";

interface Props {
  targetId: string;
}

export function HeaderScrollTracker({ targetId }: Props) {
  React.useEffect(() => {
    const header = document.getElementById(targetId);
    if (!header) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        header.classList.toggle("scrolled", window.scrollY > 20);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [targetId]);

  return null;
}
