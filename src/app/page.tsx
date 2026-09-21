import Hero from "@/components/site/Hero";
import TrustBar from "@/components/site/TrustBar";
import Showcase from "@/components/site/Showcase";
import HowItWorks from "@/components/site/HowItWorks";
import Features from "@/components/site/Features";
import Pricing from "@/components/site/Pricing";
import Faq from "@/components/site/Faq";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import StructuredData from "@/components/site/StructuredData";
import { WHATSAPP } from "@/lib/site";

const CTA_LABEL = "Agendar demonstração";

export default function Home() {
  return (
    <main style={{ overflowX: "hidden" }}>
      <StructuredData />
      <Hero ctaLabel={CTA_LABEL} />
      <TrustBar />
      <Showcase />
      <HowItWorks />
      <Features />
      <Pricing />
      <Faq />
      <Contact whatsapp={WHATSAPP} />
      <Footer />
    </main>
  );
}
