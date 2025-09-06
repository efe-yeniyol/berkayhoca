import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Hakkinda from "@/components/Hakkinda";
import Medya from "@/components/Medya";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <main className="min-h-screen w-full">
        <Hero />
        <About />
        <Services />
        <Hakkinda />
        <Medya />
        <Contact />
      </main>
    </div>
  );
}
