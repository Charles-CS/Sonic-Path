import Hero from "@/components/Hero";
import AboutGame from "@/components/AboutGame";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import GameDetails from "@/components/GameDetails";
import ScienceSection from "@/components/ScienceSection";
import PromiseSection from "@/components/PromiseSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen xl:overflow-hidden font-sans relative bg-transparent flex flex-col">
      <Navbar />
      <Hero />
      <GameDetails />
      <Gallery />
      <PromiseSection />
      <AboutGame />
      <ScienceSection />
      <CTASection />
      <Footer />
    </main>
  );
}
