import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Ecosystem from "@/components/sections/Ecosystem";
import Solutions from "@/components/sections/Solutions";
import Industries from "@/components/sections/Industries";
import AILab from "@/components/sections/AILab";
import CaseStudies from "@/components/sections/CaseStudies";
import GlobalPresence from "@/components/sections/GlobalPresence";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ecosystem />
        <Solutions />
        <Industries />
        <AILab />
        <CaseStudies />
        <GlobalPresence />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
