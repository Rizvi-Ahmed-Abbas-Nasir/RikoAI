import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import PricingSection from "./PricingSection";
import ChatPopup from "../../components/ChatPopup";
import CtaCard from "../../components/CtaCard";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
    <>
      <ChatPopup />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <CtaCard />
      <Footer />
    </>
  );
}
