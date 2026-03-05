import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "ABOUT", href: "#about" },
  { label: "TECH", href: "#tech" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CHAT", href: "#chat" },
  { label: "CONTACT", href: "#contact" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm border-b-[3px] border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="font-pixel text-[10px] text-primary">
          {"<YN />"}
        </a>
        <div className="hidden md:flex gap-4 items-center mr-14">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-pixel text-[7px] text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden pixel-btn bg-card text-foreground p-2 mr-14"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-card border-t-[3px] border-border px-4 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-pixel text-[8px] text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
