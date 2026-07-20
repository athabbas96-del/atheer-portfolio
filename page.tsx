import { Preloader, Navbar } from "@/components/Chrome";
import { Hero, Welcome, About } from "@/components/Intro";
import { Journey, Services, Partners } from "@/components/Middle";
import { WorkGrid, InstagramSection } from "@/components/Work";
import { Contact, Footer } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <About />
        <Journey />
        <WorkGrid />
        <InstagramSection />
        <Partners />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
