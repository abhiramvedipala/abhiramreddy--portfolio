import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Code Assistant",
    desc: "A machine learning-based code completion tool that helps developers write better code faster.",
    tags: ["Python", "TensorFlow", "React"],
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce Platform",
    desc: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Smart Home Dashboard",
    desc: "IoT dashboard for monitoring and controlling connected home devices in real time.",
    tags: ["React", "Firebase", "Arduino"],
    github: "#",
    live: "#",
  },
];

const glassStyle = {
  background: 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  borderRadius: '16px',
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
          Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="p-5 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)] group"
              style={{
                ...glassStyle,
                borderColor: undefined,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
            >
              <h3 className="font-pixel text-xs mb-3 group-hover:text-primary transition-colors" style={{ color: '#f1f5f9' }}>
                {p.title}
              </h3>
              <p className="text-base text-white/70 mb-4 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-pixel text-[7px] px-2 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#f1f5f9' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={p.github}
                  className="rounded-lg px-3 py-2 inline-flex items-center gap-1 transition-colors hover:bg-white/20"
                  style={{ background: 'rgba(255,255,255,0.1)', color: '#f1f5f9' }}
                >
                  <Github size={14} />
                  <span className="font-pixel text-[7px]">CODE</span>
                </a>
                <a href={p.live} className="bg-primary/80 text-white hover:bg-primary rounded-lg px-3 py-2 inline-flex items-center gap-1 transition-colors">
                  <ExternalLink size={14} />
                  <span className="font-pixel text-[7px]">LIVE</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
