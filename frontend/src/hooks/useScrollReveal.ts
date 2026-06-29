"use client";

import * as React from "react";

const OBSERVER_OPTIONS = { threshold: 0.12, rootMargin: "0px 0px -50px 0px" };

let sharedObserver: IntersectionObserver | null = null;
const subscribers = new Map<Element, (visible: boolean) => void>();

function getSharedObserver() {
  if (typeof window === "undefined") return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const callback = subscribers.get(entry.target);
        if (callback && entry.isIntersecting) {
          callback(true);
        }
      }
    }, OBSERVER_OPTIONS);
  }
  return sharedObserver;
}

export function useScrollReveal<T extends HTMLElement>() {
  const ref = React.useRef<T>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getSharedObserver();
    if (!observer) return;

    subscribers.set(el, (isVisible) => {
      if (isVisible) {
        setVisible(true);
        subscribers.delete(el);
        observer.unobserve(el);
      }
    });
    observer.observe(el);

    return () => {
      subscribers.delete(el);
      observer.unobserve(el);
    };
  }, []);

  return { ref, visible };
}
