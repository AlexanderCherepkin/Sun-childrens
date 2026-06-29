"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface VideoPlayerProps {
  url: string;
  poster?: string;
  title?: string;
  className?: string;
}

export function VideoPlayer({ url, poster, title, className }: VideoPlayerProps) {
  const [loaded, setLoaded] = React.useState(false);
  const [fullscreen, setFullscreen] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const isLocalVideo = React.useMemo(
    () => url.endsWith(".mp4") || url.startsWith("/videos/"),
    [url]
  );

  const embedUrl = React.useMemo(() => {
    if (url.includes("rutube.ru")) {
      const match = url.match(/video\/([a-f0-9]+)/i);
      if (match) return `https://rutube.ru/play/embed/${match[1]}/`;
    }
    if (url.includes("vk.com") || url.includes("vkvideo.ru")) {
      const match = url.match(/(video[-_]?\d+_\d+)/i);
      if (match) return `https://vk.com/video_ext.php?oid=${match[1].replace(/\D/g, "")}`;
    }
    return url;
  }, [url]);

  const activate = () => {
    setLoaded(true);
    setFullscreen(true);
  };

  React.useEffect(() => {
    if (fullscreen && videoRef.current) {
      videoRef.current.requestFullscreen?.().catch(() => {});
    }
  }, [fullscreen]);

  React.useEffect(() => {
    const onFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setFullscreen(false);
      }
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  return (
    <div className={cn("relative aspect-video overflow-hidden rounded-xl bg-surface", className)}>
      {!loaded ? (
        <button
          type="button"
          onClick={activate}
          className="group relative flex h-full w-full items-center justify-center"
          aria-label={title ? `Воспроизвести видео ${title}` : "Воспроизвести видео"}
        >
          {poster ? (
            <Image
              src={poster}
              alt={title || "Превью видео"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              decoding="async"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-surface to-border" />
          )}
          <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-white shadow-lg transition-transform group-hover:scale-110">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      ) : isLocalVideo ? (
        <video
          ref={videoRef}
          src={url}
          title={title || "Видео"}
          className="h-full w-full"
          controls
          autoPlay
          playsInline
          preload="metadata"
        />
      ) : (
        <iframe
          src={embedUrl}
          title={title || "Видео"}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
}
