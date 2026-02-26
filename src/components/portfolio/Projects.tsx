import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "PixelForge",
    desc: "A browser-based pixel art editor with layer support, animation timeline, and export to spritesheet.",
    tags: ["React", "Canvas API", "TypeScript"],
    github: "#",
    live: "#",
  },
  {
    title: "DevDash",
    desc: "Real-time developer dashboard aggregating GitHub, CI/CD, and monitoring metrics in one view.",
    tags: ["Next.js", "GraphQL", "WebSocket"],
    github: "#",
    live: "#",
  },
  {
    title: "CodeQuest",
    desc: "Gamified coding challenge platform with pixel art rewards and leaderboard system.",
    tags: ["Node.js", "PostgreSQL", "Redis"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-pixel text-lg md:text-xl text-primary mb-12 text-center">
          {"// PROJECTS"}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="pixel-box bg-card p-5 flex flex-col">
              <h3 className="font-pixel text-xs text-foreground mb-3">{p.title}</h3>
              <p className="text-base text-muted-foreground mb-4 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="font-pixel text-[7px] text-accent bg-muted px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={p.github} className="pixel-btn bg-muted text-foreground p-2 inline-flex items-center gap-1">
                  <Github size={14} />
                  <span className="font-pixel text-[7px]">CODE</span>
                </a>
                <a href={p.live} className="pixel-btn bg-primary text-primary-foreground p-2 inline-flex items-center gap-1">
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
