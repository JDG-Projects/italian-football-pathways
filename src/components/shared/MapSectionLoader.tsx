"use client";

import dynamic from "next/dynamic";

interface Marker {
  lat: number;
  lng: number;
  label: string;
}

const MapSection = dynamic(() => import("./MapSection"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[400px] w-full items-center justify-center rounded-xl border border-gray-100 bg-gray-light text-sm text-gray">
      Завантаження карти...
    </div>
  ),
});

export default function MapSectionLoader({ markers }: { markers: Marker[] }) {
  return <MapSection markers={markers} />;
}
