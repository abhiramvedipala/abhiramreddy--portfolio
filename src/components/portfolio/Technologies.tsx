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
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
          <span className="text-primary">&lt;/&gt;</span> Technologies
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {techs.map((tech) => (
            <span
              key={tech}
              className="pixel-btn bg-card text-foreground font-pixel text-[8px] md:text-[10px] px-4 py-2 cursor-default"
              style={{ borderRadius: "9999px" }}
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
