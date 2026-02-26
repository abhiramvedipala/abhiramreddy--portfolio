import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center max-w-3xl">
        <p className="font-pixel text-xs md:text-sm text-primary mb-4 animate-blink">
          {">"} HELLO WORLD_
        </p>
        <h1 className="font-pixel text-2xl md:text-4xl lg:text-5xl text-foreground pixel-text-shadow mb-6 leading-relaxed">Abhiram Vedipala

        </h1>
        <p className="font-pixel text-[10px] md:text-xs text-secondary mb-8">
          FULL-STACK SOFTWARE ENGINEER
        </p>
        <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          Crafting digital experiences with clean code and creative solutions.
          Passionate about open source, pixel art, and building things that matter.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          {[
          { icon: Github, href: "#", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/abhiram-reddy-vedipala-0a4770309", label: "LinkedIn" },
          { icon: Twitter, href: "#", label: "Twitter" },
          { icon: Mail, href: "#contact", label: "Email" }].
          map(({ icon: Icon, href, label }) =>
          <a
            key={label}
            href={href}
            aria-label={label}
            className="pixel-btn bg-card text-foreground p-3 inline-flex items-center gap-2">

              <Icon size={18} />
              <span className="font-pixel text-[8px] hidden sm:inline">{label.toUpperCase()}</span>
            </a>
          )}
        </div>
      </div>
    </section>);

};

export default Hero;