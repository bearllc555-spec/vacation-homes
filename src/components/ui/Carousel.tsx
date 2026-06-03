import {
  Fragment,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselVariant = "strip" | "slides";

type CarouselProps = {
  children: ReactNode;
  variant?: CarouselVariant;
  /** Slide width for strip mode (Stayli listing cards: 376px) */
  slideWidth?: number;
  gap?: number;
  showArrows?: boolean;
  className?: string;
  trackClassName?: string;
  ariaLabel?: string;
};

export function Carousel({
  children,
  variant = "strip",
  slideWidth = 376,
  gap = 24,
  showArrows = true,
  className = "",
  trackClassName = "",
  ariaLabel = "Carousel",
}: CarouselProps) {
  const id = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = Array.isArray(children) ? children : [children];
  const slideCount = slides.length;

  const scrollStrip = useCallback(
    (direction: -1 | 1) => {
      const track = trackRef.current;
      if (!track) return;
      track.scrollBy({
        left: direction * (slideWidth + gap),
        behavior: "smooth",
      });
    },
    [gap, slideWidth],
  );

  const scrollToSlide = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(index, slideCount - 1));
      if (variant === "slides") {
        track.scrollTo({
          left: clamped * track.clientWidth,
          behavior: "smooth",
        });
      } else {
        track.scrollTo({
          left: clamped * (slideWidth + gap),
          behavior: "smooth",
        });
      }
      setActiveIndex(clamped);
    },
    [gap, slideCount, slideWidth, variant],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      if (variant === "slides") {
        const idx = Math.round(track.scrollLeft / track.clientWidth);
        if (idx >= 0 && idx < slideCount) setActiveIndex(idx);
      }
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [slideCount, variant]);

  const prev = () =>
    variant === "slides" ? scrollToSlide(activeIndex - 1) : scrollStrip(-1);
  const next = () =>
    variant === "slides" ? scrollToSlide(activeIndex + 1) : scrollStrip(1);

  const prevDisabled = variant === "slides" && activeIndex <= 0;
  const nextDisabled = variant === "slides" && activeIndex >= slideCount - 1;

  return (
    <div className={className}>
      <div
        id={`${id}-track`}
        ref={trackRef}
        role="region"
        aria-label={ariaLabel}
        aria-live={variant === "slides" ? "polite" : undefined}
        className={`scrollbar-none flex overflow-x-auto scroll-smooth snap-x snap-mandatory ${trackClassName}`}
        style={{ gap: variant === "strip" ? gap : 0 }}
      >
        {slides.map((slide, i) =>
          variant === "slides" ? (
            <div
              key={i}
              className="w-full shrink-0 snap-center snap-always"
            >
              {slide}
            </div>
          ) : (
            <Fragment key={i}>{slide}</Fragment>
          ),
        )}
      </div>

      {showArrows && (
        <div className="mt-8 flex justify-center gap-2">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black transition hover:bg-neutral-50 disabled:opacity-40"
            aria-label="Previous"
            aria-controls={`${id}-track`}
            disabled={prevDisabled}
            onClick={prev}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black transition hover:bg-neutral-50 disabled:opacity-40"
            aria-label="Next"
            aria-controls={`${id}-track`}
            disabled={nextDisabled}
            onClick={next}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
