import { Github, Linkedin, Instagram } from "lucide-react";
import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Technologies from "@/components/portfolio/Technologies";
import Projects from "@/components/portfolio/Projects";
import AiChat from "@/components/portfolio/AiChat";
import Contact from "@/components/portfolio/Contact";
import ScrollReveal from "@/components/portfolio/ScrollReveal";
import heroBg from "@/assets/hero-bg.png";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Fixed pixel art background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${heroBg})`, filter: 'brightness(0.75) saturate(0.9)' }}
      />

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <div className="relative">
          {/* Dark overlay only for content sections below hero */}
          <div className="absolute inset-0 bg-black/70 z-0" />
          <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal><About /></ScrollReveal>
            <ScrollReveal delay={80}><Technologies /></ScrollReveal>
            <ScrollReveal delay={80}><Projects /></ScrollReveal>
            <ScrollReveal delay={80}><AiChat /></ScrollReveal>
            <ScrollReveal delay={80}><Contact /></ScrollReveal>
          </main>
        </div>
        <footer className="bg-white py-10 text-center px-4">
          <div className="flex justify-center gap-6 mb-4">
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
                className="text-black/70 hover:text-black transition-colors"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
          <p className="text-black/60 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            © 2026 AV. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
