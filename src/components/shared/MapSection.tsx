"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

interface Marker {
  lat: number;
  lng: number;
  label: string;
}

interface MapSectionProps {
  markers: Marker[];
}

export default function MapSection({ markers }: MapSectionProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    async function initMap() {
      const L = await import("leaflet");
      if (!mapRef.current) return;

      const map = L.map(mapRef.current).setView([43.0, 11.0], 6);
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      const icon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      });

      markers.forEach((m) => {
        L.marker([m.lat, m.lng], { icon }).addTo(map).bindPopup(m.label);
      });
    }

    initMap();
  }, [markers]);

  return (
    <div
      ref={mapRef}
      className="h-[400px] w-full rounded-xl border border-gray-100 shadow-sm"
    />
  );
}
