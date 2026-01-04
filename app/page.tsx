import Hero from "./components/ui/Hero";
import OurWork from "./components/ui/OurWork";
import Marquee from "./components/ui/Marquee";
import Services from "./components/ui/Services";
import Testimonials from "./components/ui/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-pop-mint selection:text-black">
      <Hero />
      <Marquee title="Boost your business" />
      <Services />
      <OurWork />
      {/* <Process /> */}
      <Testimonials />
    </main>
  );
}


