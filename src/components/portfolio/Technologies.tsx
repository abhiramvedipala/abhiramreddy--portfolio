const techs = [
  "TypeScript", "React", "Node.js", "Python", "Go",
  "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes",
  "AWS", "GraphQL", "Next.js", "Tailwind CSS", "Rust",
  "Git", "Linux", "Figma", "Supabase", "Vite",
];

const Technologies = () => {
  return (
    <section id="tech" className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
          Technologies
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {techs.map((tech, i) => (
            <span
              key={tech}
              className="bg-black/60 backdrop-blur-md text-white/90 font-pixel text-[8px] md:text-[10px] px-4 py-2 cursor-default border border-white/20 rounded-full animate-float-pill hover:scale-110 hover:bg-white/20 transition-all"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
