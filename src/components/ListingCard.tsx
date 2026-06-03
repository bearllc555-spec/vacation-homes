import type { Listing } from "../content/site";

type ListingCardProps = {
  listing: Listing;
};

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <article className="card-magic w-[376px] max-w-[calc(100vw-3rem)] shrink-0 snap-start">
      <div className="card-magic-media relative aspect-[376/476] overflow-hidden rounded-2xl bg-neutral-100">
        <img
          src={listing.image}
          alt={listing.name}
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="card-magic-sub absolute bottom-4 left-4 right-4 flex h-[88px] flex-col justify-center rounded-lg bg-[#fcfcfc] px-4">
          <p className="text-xs text-neutral-500">
            {listing.beds} Bedroom{listing.beds > 1 ? "s" : ""} / {listing.guests}{" "}
            Guests
          </p>
          <h3 className="card-magic-title mt-0.5 truncate text-sm font-medium tracking-tight text-black">
            {listing.name}
          </h3>
          <p className="truncate text-xs text-neutral-500">{listing.location}</p>
          <p className="mt-1 text-sm text-black">
            <span className="font-medium">${listing.priceUsd}</span>{" "}
            <span className="text-neutral-500">USD</span>
          </p>
        </div>
      </div>
    </article>
  );
}
