import { HeroSection } from "./components/HeroSection";
import { StatsRibbon } from "./components/StatsRibbon";
import { IntroSection } from "./components/IntroSection";
import { ListingsSection } from "./components/ListingsSection";
import { WhySection } from "./components/WhySection";
import { AboutSection } from "./components/AboutSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { JournalSection } from "./components/JournalSection";
import { CtaSection } from "./components/CtaSection";
import { ContactSection } from "./components/ContactSection";
import { SiteFooter } from "./components/SiteFooter";
import { Reveal } from "./components/ui/Reveal";

export default function App() {
  return (
    <>
      <main>
        <HeroSection />
        <StatsRibbon />
        <Reveal>
          <IntroSection />
        </Reveal>
        <Reveal delayMs={80}>
          <ListingsSection />
        </Reveal>
        <Reveal>
          <WhySection />
        </Reveal>
        <Reveal>
          <AboutSection />
        </Reveal>
        <Reveal>
          <TestimonialsSection />
        </Reveal>
        <Reveal delayMs={60}>
          <JournalSection />
        </Reveal>
        <CtaSection />
        <Reveal>
          <ContactSection />
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
