import { LangProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Program from "@/components/Program";
import Highlights from "@/components/Highlights";
import Venue from "@/components/Venue";
import Hotels from "@/components/Hotels";
import Attractions from "@/components/Attractions";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";
import RegistrationCountdown from "@/components/RegistrationCountdown";

export default function Home() {
  return (
    <LangProvider>
      <RegistrationCountdown />
      <Header />
      <main>
        <Hero />
        <About />
        <Program />
        <Highlights />
        <Venue />
        <Hotels />
        <Attractions />
        <Partners />
        <CTA />
      </main>
      <Footer />
      <RegistrationModal />
    </LangProvider>
  );
}
