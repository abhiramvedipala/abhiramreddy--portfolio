import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center max-w-3xl">
        <p className="font-pixel text-xs md:text-sm text-primary mb-4 animate-blink">
        </p>
        <h1 className="font-pixel text-2xl md:text-4xl lg:text-5xl text-foreground pixel-text-shadow mb-6 leading-relaxed">Abhiram Vedipala

        </h1>
        <p className="font-pixel text-[10px] md:text-xs mb-8 bg-primary-foreground text-white">
            Data science and AI ENGINEER
        </p>
        <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          Crafting digital experiences with clean code and creative solutions.
          Passionate about open source, pixel art, and building things that matter.
        </p>
        <div className="flex gap-5 justify-center">
          {[
          { icon: Github, href: "https://github.com/abhiramvedipala", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/abhiram-reddy-vedipala-0a4770309", label: "LinkedIn" },
          { icon: Instagram, href: "https://www.instagram.com/i._abhiram/", label: "Instagram" },
          { icon: Mail, href: "#contact", label: "Email" }].
          map(({ icon: Icon, href, label }) =>
          <a
            key={label}
            href={href}
            aria-label={label}
            {...href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}}
            className="text-muted-foreground hover:text-foreground transition-colors">
            
              <Icon size={20} />
            </a>
          )}
        </div>
      </div>
    </section>);

};

export default Hero;