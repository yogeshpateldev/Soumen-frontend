import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import VenturesSection from "../sections/VenturesSection";
import JourneySection from "../sections/JourneySection";
import InsightsSection from "../sections/InsightsSection";
import ContactSection from "../sections/ContactSection";

export function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <HeroSection />
      <AboutSection />
      <VenturesSection />
      <JourneySection />
      <InsightsSection />
      <ContactSection />
    </div>
  );
}

export default Index;
