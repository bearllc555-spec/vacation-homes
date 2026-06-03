import { HeroSection } from "./components/HeroSection";
import { IntroSection } from "./components/IntroSection";
import { ListingsSection } from "./components/ListingsSection";
import { WhySection } from "./components/WhySection";
import { AboutSection } from "./components/AboutSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { JournalSection } from "./components/JournalSection";
import { CtaSection } from "./components/CtaSection";
import { ContactSection } from "./components/ContactSection";
import { SiteFooter } from "./components/SiteFooter";

export default function App() {
  return (
    <>
      <main>
        <HeroSection />
        <IntroSection />
        <ListingsSection />
        <WhySection />
        <AboutSection />
        <TestimonialsSection />
        <JournalSection />
        <CtaSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
