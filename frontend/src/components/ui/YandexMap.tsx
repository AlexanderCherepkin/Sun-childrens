"use client";

import * as React from "react";
import { YMaps, Map as YMap, Placemark } from "@pbe/react-yandex-maps";
import { City } from "@/types";

const YANDEX_API_KEY = "2bc9b752-ed90-4ded-9f66-d1abc7a27c24";

const MAP_CENTER: [number, number] = [58.0, 50.0];
const ZOOM = 4;

const MARKER_SVG = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
    <circle cx="18" cy="18" r="16" fill="#a33f00" opacity="0.16"/>
    <circle cx="18" cy="18" r="10" fill="#a33f00" opacity="0.28"/>
    <circle cx="18" cy="18" r="5" fill="#a33f00"/>
    <circle cx="18" cy="18" r="2" fill="#ffffff"/>
  </svg>`
);

const ICON_IMAGE_HREF = `data:image/svg+xml,${MARKER_SVG}`;

interface YandexMapProps {
  cities: City[];
}

export function YandexMap({ cities }: YandexMapProps) {
  return (
    <YMaps
      query={{
        apikey: YANDEX_API_KEY,
        lang: "ru_RU",
        load: "package.standard",
      }}
    >
      <YMap
        defaultState={{
          center: MAP_CENTER,
          zoom: ZOOM,
        }}
        options={{
          suppressMapOpenBlock: true,
          suppressObsoleteBrowserNotifier: true,
          yandexMapDisablePoiInteractivity: true,
          avoidFractionalZoom: true,
        }}
        width="100%"
        height="100%"
      >
        {cities.map((city) => (
          <Placemark
            key={city.name}
            geometry={[city.lat, city.lng]}
            properties={{
              hintContent: city.name,
              balloonContent: `<div style="font-family:var(--font-sans);font-size:14px;font-weight:600;color:#1a1a1a">${city.name}</div>`,
            }}
            options={{
              iconLayout: "default#image",
              iconImageHref: ICON_IMAGE_HREF,
              iconImageSize: [36, 36],
              iconImageOffset: [-18, -18],
              hideIconOnBalloonOpen: false,
            }}
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
          />
        ))}
      </YMap>
    </YMaps>
  );
}
