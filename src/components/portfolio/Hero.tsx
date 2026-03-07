import { Github, Linkedin, Instagram, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen py-20 flex flex-col items-center justify-center relative">
      <div className="text-center w-full px-4">
        <h1 className="text-[3.2vw] sm:text-2xl md:text-3xl lg:text-[2.75rem] text-white mb-6 leading-tight animate-float-slow font-pixel tracking-tight text-center whitespace-nowrap" style={{ textShadow: '0px 2px 12px rgba(0,0,0,0.75)' }}>
          Abhiram Reddy Vedipala 
  
        </h1>
        <p className="md:text-lg mb-4 text-white/90 font-pixel tracking-wide uppercase text-lg" style={{ textShadow: '0px 2px 12px rgba(0,0,0,0.75)' }}>
          Data Science and AI Engineer
        </p>
        <p className="md:text-xl mb-10 max-w-xl mx-auto leading-relaxed text-white/80 font-pixel-body text-center text-lg" style={{ textShadow: '0px 2px 12px rgba(0,0,0,0.75)' }}>
          Driven by curiosity. Grounded by logic. Fueled by purpose.
        </p>
        <button onClick={scrollToProjects}
        className="mb-10 px-8 py-3 bg-white text-black font-bold border-2 border-black rounded-none hover:bg-gray-100 transition-colors text-sm tracking-wide"
        style={{ fontFamily: "'Inter', sans-serif" }}>
          
          View My Work
        </button>
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
            className="text-white/70 hover:text-white transition-colors">
            
              <Icon size={20} />
            </a>
          )}
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
        className="absolute bottom-10 text-white/70 hover:text-white transition-colors animate-bounce-gentle">
        
        <ChevronDown size={32} />
      </button>
    </section>);

};

export default Hero;