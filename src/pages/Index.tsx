import Navigation from "@/components/portfolio/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Technologies from "@/components/portfolio/Technologies";
import Timeline from "@/components/portfolio/Timeline";
import Projects from "@/components/portfolio/Projects";
import YouTube from "@/components/portfolio/YouTube";
import Testimonials from "@/components/portfolio/Testimonials";
import AiChat from "@/components/portfolio/AiChat";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeToggle />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Timeline />
        <Projects />
        <YouTube />
        <Testimonials />
        <AiChat />
        <Contact />
      </main>
      <footer className="border-t-[3px] border-border py-8 text-center">
        <p className="font-pixel text-[8px] text-muted-foreground">
          © 2026 YOUR_NAME • BUILT WITH PIXELS & LOVE
        </p>
      </footer>
    </div>
  );
};

export default Index;
