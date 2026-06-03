import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { Compass, ExternalLink, Mountain, Navigation, Satellite } from "lucide-react";
import { poconosLocation, propertyCoordinates } from "../lib/location";
import "leaflet/dist/leaflet.css";

const ESRI_SATELLITE =
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
const ESRI_LABELS =
  "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}";

const center: [number, number] = [
  propertyCoordinates.lat,
  propertyCoordinates.lng,
];

const pulseMarker = L.divIcon({
  className: "map-marker-root",
  html: `<div class="map-marker-pulse" aria-hidden="true"><span class="map-marker-core"></span></div>`,
  iconSize: [56, 56],
  iconAnchor: [28, 28],
});

function MapFlyIn({ enabled }: { enabled: boolean }) {
  const map = useMap();

  useEffect(() => {
    if (!enabled) return;
    map.setView(center, 14, { animate: false });
    const timeout = window.setTimeout(() => {
      map.flyTo(center, poconosLocation.mapZoom, {
        duration: 2.4,
        easeLinearity: 0.25,
      });
    }, 350);
    return () => window.clearTimeout(timeout);
  }, [enabled, map]);

  return null;
}

export function PropertyMapShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mapActive, setMapActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setMapActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="property-map-showcase relative left-1/2 w-screen -translate-x-1/2"
      aria-label="Property location satellite map"
    >
      <div className="relative h-[72vh] w-full md:h-[80vh] lg:h-[85vh]">
        <MapContainer
          center={center}
          zoom={poconosLocation.mapFlyZoom}
          className="property-map-canvas absolute inset-0 z-0 h-full w-full"
          scrollWheelZoom={false}
          zoomControl={false}
          attributionControl={false}
        >
          <TileLayer url={ESRI_SATELLITE} maxZoom={19} />
          <TileLayer url={ESRI_LABELS} maxZoom={19} opacity={0.72} />
          <Marker position={center} icon={pulseMarker} />
          {mapActive && <MapFlyIn enabled={mapActive} />}
        </MapContainer>

        {/* Cinematic overlays */}
        <div
          className="pointer-events-none absolute inset-0 z-[400] bg-gradient-to-b from-[#fcfcfc] via-transparent to-[#111111]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[400] bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(6,80,135,0.22)_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[400] opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:48px_48px]"
          aria-hidden
        />

        {/* Live satellite badge */}
        <div className="absolute left-6 top-8 z-[500] md:left-10 lg:left-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#111111]/75 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white shadow-xl backdrop-blur-md">
            <Satellite className="h-3.5 w-3.5 text-[#EBF213]" aria-hidden />
            Live satellite
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
          </span>
        </div>

        {/* Side stats — desktop */}
        <ul className="absolute right-6 top-1/2 z-[500] hidden -translate-y-1/2 flex-col gap-3 md:flex lg:right-16">
          {[
            { icon: Mountain, label: "Pocono ridge", value: "2,100 ft" },
            { icon: Compass, label: "Lake Harmony", value: "2 min" },
            { icon: Navigation, label: "Scranton", value: "45 min" },
          ].map(({ icon: Icon, label, value }) => (
            <li
              key={label}
              className="rounded-xl border border-white/15 bg-[#111111]/70 px-4 py-3 text-white shadow-xl backdrop-blur-md"
            >
              <p className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white/55">
                <Icon className="h-3 w-3" aria-hidden />
                {label}
              </p>
              <p className="mt-0.5 text-sm font-semibold">{value}</p>
            </li>
          ))}
        </ul>

        {/* Address card */}
        <div className="absolute bottom-8 left-6 right-6 z-[500] md:bottom-12 md:left-10 md:right-auto lg:left-16">
          <div className="max-w-xl rounded-2xl border border-white/15 bg-[#111111]/85 p-6 text-white shadow-2xl backdrop-blur-xl md:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#EBF213]">
              Your mountain address
            </p>
            <p className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
              {poconosLocation.street}
            </p>
            <p className="mt-1 text-sm text-white/75">
              {poconosLocation.city}, {poconosLocation.state}{" "}
              {poconosLocation.zip}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Nestled in Lake Harmony Estates — lakes, slopes, and cabin country
              at your doorstep.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={poconosLocation.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#111111] transition hover:bg-neutral-100"
              >
                <Navigation className="h-4 w-4" aria-hidden />
                Get directions
              </a>
              <a
                href={poconosLocation.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Open in Google Maps
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
