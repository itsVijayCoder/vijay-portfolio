import { SideUpArrow } from "@/components/SideUpArrow";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div className="no-scrollbar relative">
      <header>
        <Header />
        <HeroSection />
      </header>

      <main>
        <ProjectsSection />
        <TapeSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <footer>
        <Footer />
      </footer>

      <aside>
        <SideUpArrow />
      </aside>
    </div>
  );
}
