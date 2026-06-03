import type { Listing } from "../content/site";

type ListingCardProps = {
  listing: Listing;
  layout?: "grid" | "scroll";
};

export function ListingCard({ listing, layout = "scroll" }: ListingCardProps) {
  const width =
    layout === "grid"
      ? "w-full"
      : "w-[min(100%,280px)] shrink-0 snap-start sm:w-[300px]";

  return (
    <article className={width}>
      <div className="overflow-hidden rounded-2xl bg-neutral-100">
        <img
          src={listing.image}
          alt={listing.name}
          className="aspect-[376/476] h-auto w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="pt-4">
        <p className="text-sm text-neutral-500">
          {listing.beds} Bedroom{listing.beds > 1 ? "s" : ""} / {listing.guests}{" "}
          Guests
        </p>
        <h3 className="mt-1 text-lg font-medium tracking-tight text-black">
          {listing.name}
        </h3>
        <p className="text-sm text-neutral-500">{listing.location}</p>
        <p className="mt-2 text-base text-black">
          <span className="font-medium">${listing.priceUsd}</span>{" "}
          <span className="text-neutral-500">USD</span>
        </p>
      </div>
    </article>
  );
}
