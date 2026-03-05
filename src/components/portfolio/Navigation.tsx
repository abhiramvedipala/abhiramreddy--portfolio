import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const links = [
{ label: "About", href: "#about" },
{ label: "Tech", href: "#tech" },
{ label: "Projects", href: "#projects" },
{ label: "Chat", href: "#chat" },
{ label: "Contact", href: "#contact" }];


const Navigation = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <span className="px-2 py-1 border-[3px] border-foreground font-bold text-lg text-foreground hover:border-primary hover:text-primary transition-colors tracking-tight">
            &lt; AV /&gt;
          </span>
        </a>

        {/* Nav Links + Social Icons + Theme Toggle */}
        <div className="flex items-center gap-6 sm:gap-8">
          {links.map((l) =>
          <a
            key={l.label}
            href={l.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full border-[#050000] border">
            
              {l.label}
            </a>
          )}
          <div className="flex items-center ml-2 border-l border-border/50 pl-4">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              aria-label="Toggle theme">
              
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </nav>);

};

export default Navigation;