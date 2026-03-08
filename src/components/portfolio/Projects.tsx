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
    title: "Spotify Music Recommender",
    desc: "Full-stack ML pipeline that analyzes 81,343 songs to deliver personalized music recommendations using cosine similarity and KMeans clustering. Built a live Streamlit dashboard with 3 pages, descriptive stats with 4 charts, and AWS S3 data lake simulation via LocalStack.",
    tags: ["Python", "pandas", "scikit-learn", "Streamlit", "AWS S3", "KMeans", "Docker"],
    github: "https://github.com/abhiramvedipala/spotify-music-recommender",
    live: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center animate-float-slow">
          Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-black/70 rounded-2xl p-5 flex flex-col transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:bg-black/90 group border border-white/10 hover:border-primary/50"
            >
              <h3 className="font-pixel text-xs text-white mb-3 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-base text-white/70 mb-4 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-pixel text-[7px] px-2 py-1 rounded-full bg-white/10 text-white/90 border border-white/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 text-white rounded-lg px-3 py-2 inline-flex items-center gap-1 transition-colors hover:bg-white/20"
                >
                  <Github size={14} />
                  <span className="font-pixel text-[7px]">CODE</span>
                </a>
                {p.live && (
                  <a href={p.live} className="bg-primary/80 text-white hover:bg-primary rounded-lg px-3 py-2 inline-flex items-center gap-1 transition-colors">
                    <ExternalLink size={14} />
                    <span className="font-pixel text-[7px]">LIVE</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
