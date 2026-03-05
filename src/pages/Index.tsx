import Navigation from "@/components/portfolio/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Technologies from "@/components/portfolio/Technologies";
import Projects from "@/components/portfolio/Projects";
import AiChat from "@/components/portfolio/AiChat";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <ThemeToggle />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <AiChat />
        <Contact />
      </main>
      <footer className="border-t-[3px] border-border py-8 text-center px-4">
        <p className="font-pixel text-[8px] text-muted-foreground">
          © 2026 YOUR_NAME • BUILT WITH PIXELS & LOVE
        </p>
      </footer>
    </div>
  );
};

export default Index;
