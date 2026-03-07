

const links = [
  { label: "About", href: "#about" },
  { label: "Chat", href: "#chat" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a href="#" className="flex-shrink-0">
          <span className="px-3 py-1.5 border-[3px] border-black font-black text-lg text-black tracking-tight">
            AV
          </span>
        </a>

        <div className="flex items-center gap-6 sm:gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-black hover:text-black transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
