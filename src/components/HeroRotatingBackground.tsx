import { useEffect, useState } from "react";
import { heroSlides } from "../lib/lodging-images";

const INTERVAL_MS = 6000;

type HeroRotatingBackgroundProps = {
  onActiveChange?: (index: number) => void;
};

export function HeroRotatingBackground({
  onActiveChange,
}: HeroRotatingBackgroundProps) {
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    onActiveChange?.(active);
  }, [active, onActiveChange]);

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % heroSlides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  return (
    <div className="absolute inset-0" aria-hidden>
      {heroSlides.map((src, i) => (
        <div
          key={src}
          className={`hero-slide absolute inset-0 ${i === active ? "hero-slide-active" : ""}`}
        >
          <img
            src={src}
            alt=""
            className="hero-slide-img h-full w-full object-cover object-center"
            width={1920}
            height={1200}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
}
