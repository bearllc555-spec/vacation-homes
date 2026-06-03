import { ExternalLink, MapPin } from "lucide-react";
import { poconosLocation } from "../lib/location";

type GoogleMapProps = {
  className?: string;
};

export function GoogleMap({ className = "" }: GoogleMapProps) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl ${className}`}>
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl ring-1 ring-inset ring-black/10 transition duration-500 group-hover:ring-[#065087]/40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -inset-px z-0 rounded-2xl bg-gradient-to-br from-[#065087]/30 via-transparent to-[#EBF213]/20 opacity-0 blur-sm transition duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <iframe
        title={`Map: ${poconosLocation.fullAddress}`}
        src={poconosLocation.mapsEmbedUrl}
        className="relative z-[1] h-[min(420px,55vh)] w-full border-0 grayscale-[15%] transition duration-700 group-hover:grayscale-0 lg:h-[520px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-end justify-between gap-3">
        <div className="rounded-xl bg-[#111111]/90 px-4 py-3 text-white shadow-lg backdrop-blur-md">
          <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-[#EBF213]">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            Visit us
          </p>
          <p className="mt-1 text-sm font-medium">{poconosLocation.name}</p>
          <p className="text-xs text-white/70">{poconosLocation.fullAddress}</p>
        </div>
        <a
          href={poconosLocation.mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-medium text-[#111111] shadow-lg transition hover:bg-neutral-100"
        >
          Directions
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        </a>
      </div>
    </div>
  );
}
