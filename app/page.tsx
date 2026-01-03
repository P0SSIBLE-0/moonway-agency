import Navbar from "./components/ui/Navbar";
import Hero from "./components/ui/Hero";
import OurWork from "./components/ui/OurWork";
import Marquee from "./components/ui/Marquee";
import Services from "./components/ui/Services";
import Process from "./components/ui/Process";
import Testimonials from "./components/ui/Testimonials";
import CTA from "./components/ui/CTA";
import Footer from "./components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-pop-mint selection:text-black">
      <Navbar />
      <Hero />
      <Marquee title="Boost your business" />
      <Services />
      <OurWork />
      {/* <Process /> */}
      <Testimonials />
      <Footer />
    </main>
  );
}


