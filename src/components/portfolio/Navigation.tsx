import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Tech", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Chat", href: "#chat" },
  { label: "Contact", href: "#contact" },
];

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a href="#" className="flex-shrink-0">
          <span className="px-2 py-1 border-2 border-white/60 font-bold text-lg text-white hover:border-primary hover:text-primary transition-colors tracking-tight">
            &lt; AV /&gt;
          </span>
        </a>

        <div className="flex items-center gap-6 sm:gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center ml-2 border-l border-white/20 pl-4">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
