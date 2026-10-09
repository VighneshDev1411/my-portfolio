import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Portfolio() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-20 focus:rounded-md focus:bg-surface focus:px-4 focus:py-3 focus:text-sm"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
