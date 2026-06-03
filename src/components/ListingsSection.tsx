import { listings } from "../content/site";
import { ListingCard } from "./ListingCard";
import { SectionEyebrow } from "./ui/SectionEyebrow";
import { Button } from "./ui/Button";

export function ListingsSection() {
  const featured = listings.slice(0, 3);
  const more = listings.slice(3);

  return (
    <>
      <section id="listings" className="bg-[#fcfcfc] py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionEyebrow>Discover</SectionEyebrow>
              <h2 className="mt-3 max-w-md text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-tight tracking-[-0.03em]">
                Explore your dream destination
              </h2>
            </div>
            <Button href="#listings" variant="outline" className="shrink-0">
              View more
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((listing) => (
              <ListingCard key={listing.id} listing={listing} layout="grid" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fcfcfc] pb-20 md:pb-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
          <div className="-mx-6 flex gap-5 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-thin md:-mx-10 md:px-10 lg:-mx-16 lg:px-16">
            {more.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
