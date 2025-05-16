
import CtaSection from "./components/Cta";
import FaqSection from "./components/Faq";
import Features from "./components/Features";
import Hero from "./components/Herosection";
import HowItWorks from "./components/HowItWorks";
import Integrations from "./components/Integrations";
import Pricing from "./components/Pricing";
import ServicesList from "./components/Service";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="bg-white">
      
      <Hero />
      <Features />
      <HowItWorks />
      <Integrations />
      <ServicesList/>
      <Testimonials />
      <Pricing />
      <FaqSection/>
      <CtaSection />
      
    </div>
  );
}
