import { Github, Linkedin, Instagram, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen py-20 flex flex-col items-center justify-center relative">
      <div className="text-center max-w-3xl shadow-none">
        <h1 className="font-pixel md:text-4xl lg:text-5xl text-foreground pixel-text-shadow mb-6 leading-relaxed text-4xl animate-float-slow">
          Abhiram Vedipala
        </h1>
        <p className="font-pixel md:text-xs mb-8 bg-primary-foreground text-[#e00b40] text-lg font-bold animate-float-delayed">
          Data science and AI ENGINEER
        </p>
        <p className="md:text-2xl mb-10 max-w-xl mx-auto leading-relaxed text-[#ab1214] text-base font-bold text-center">
          ​Driven by curiosity. Grounded by logic. Fueled by purpose.
        </p>
        <div className="flex gap-5 justify-center animate-float-delayed-2">
          {[
            { icon: Github, href: "https://github.com/abhiramvedipala", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/abhiram-reddy-vedipala-0a4770309", label: "LinkedIn" },
            { icon: Instagram, href: "https://www.instagram.com/i._abhiram/", label: "Instagram" },
            { icon: Mail, href: "#contact", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll down arrow */}
      <button
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
        className="absolute bottom-10 text-muted-foreground hover:text-primary transition-colors animate-bounce-gentle"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
