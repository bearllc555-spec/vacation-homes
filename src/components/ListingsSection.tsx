import { listings } from "../content/site";
import { ListingCard } from "./ListingCard";
import { SectionEyebrow } from "./ui/SectionEyebrow";
import { Button } from "./ui/Button";
import { Carousel } from "./ui/Carousel";

export function ListingsSection() {
  return (
    <section id="listings" className="bg-[#fcfcfc] py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <div className="mb-2 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionEyebrow>Discover</SectionEyebrow>
            <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-[1.08] tracking-[-0.03em]">
              Explore your
              <br />
              dream destination
            </h2>
          </div>
          <Button href="#listings" variant="outline" className="shrink-0">
            View more
          </Button>
        </div>

        <Carousel
          variant="strip"
          slideWidth={376}
          gap={24}
          ariaLabel="Featured vacation rentals"
          className="mt-10"
        >
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
