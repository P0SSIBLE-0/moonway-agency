import Hero from "./components/sections/Hero";
import OurWork from "./components/sections/OurWork";
import Marquee from "./components/ui/Marquee";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";

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


