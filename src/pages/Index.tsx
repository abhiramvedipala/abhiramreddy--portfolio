import { Github, Linkedin, Instagram } from "lucide-react";
import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Technologies from "@/components/portfolio/Technologies";
import Projects from "@/components/portfolio/Projects";
import AiChat from "@/components/portfolio/AiChat";
import Contact from "@/components/portfolio/Contact";


const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <AiChat />
        <Contact />
      </main>
      <footer className="border-t-[3px] border-border/30 py-8 text-center px-4">
        <div className="flex justify-center gap-4 mb-4">
          {[
            { icon: Github, href: "https://github.com/abhiramvedipala", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/abhiram-reddy-vedipala-0a4770309", label: "LinkedIn" },
            { icon: Instagram, href: "https://www.instagram.com/i._abhiram/", label: "Instagram" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        <p className="font-pixel text-[8px] text-muted-foreground">
          © 2026 ABHIRAM VEDIPALA • BUILT WITH PIXELS & LOVE
        </p>
      </footer>
    </div>
  );
};

export default Index;
