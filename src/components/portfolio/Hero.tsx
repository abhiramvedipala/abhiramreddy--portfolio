import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />

      <div className="text-center max-w-3xl relative z-10 px-4">
        <h1
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
          style={{ textShadow: "0 4px 12px rgba(0,0,0,0.5)" }}
        >
          Abhiram Vedipala
        </h1>

        <p className="font-display text-xl md:text-2xl font-semibold mb-6 tracking-wide text-[#39FF14]">
          Data Science and AI Engineer
        </p>

        <p
          className="text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed text-white/85"
          style={{ textShadow: "0 2px 6px rgba(0,0,0,0.4)" }}
        >
          Driven by curiosity. Grounded by logic. Fueled by purpose.
        </p>

        <a
          href="#projects"
          className="inline-block px-8 py-3 border-2 border-white/70 text-white font-display font-medium rounded-lg backdrop-blur-md bg-white/10 hover:bg-white/25 transition-all duration-300 mb-12"
        >
          View My Work
        </a>

        <div className="flex gap-5 justify-center">
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
              className="w-12 h-12 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-[#39FF14]/80 hover:text-black hover:shadow-[0_0_18px_rgba(57,255,20,0.5)] transition-all duration-300"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
