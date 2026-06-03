import { SiteHeader } from "./components/SiteHeader";
import { HeroSection } from "./components/HeroSection";
import { ListingsSection } from "./components/ListingsSection";
import { WhySection } from "./components/WhySection";
import { AboutSection } from "./components/AboutSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { JournalSection } from "./components/JournalSection";
import { ContactSection } from "./components/ContactSection";
import { SiteFooter } from "./components/SiteFooter";

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ListingsSection />
        <WhySection />
        <AboutSection />
        <TestimonialsSection />
        <JournalSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
