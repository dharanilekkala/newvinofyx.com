import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import BrandMeaning from "@/components/sections/BrandMeaning";
import About from "@/components/sections/About";
import Ecosystem from "@/components/sections/Ecosystem";
import Solutions from "@/components/sections/Solutions";
import Industries from "@/components/sections/Industries";
import AILab from "@/components/sections/AILab";
import GlobalPresence from "@/components/sections/GlobalPresence";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandMeaning />
        <About />
        <Ecosystem />
        <Solutions />
        <Industries />
        <AILab />
        <GlobalPresence />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
