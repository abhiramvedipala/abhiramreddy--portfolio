const testimonials = [
  {
    name: "Jane Smith",
    role: "CTO @ TechCorp",
    text: "One of the most talented engineers I've worked with. Delivers clean, well-tested code consistently.",
  },
  {
    name: "Alex Johnson",
    role: "Product Manager @ StartupXYZ",
    text: "Incredible ability to translate complex requirements into elegant solutions. A true team player.",
  },
  {
    name: "Maria Garcia",
    role: "Lead Designer @ AgencyPro",
    text: "Rare engineer who truly understands design. Always a pleasure collaborating together.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
          <span className="text-primary">&lt;/&gt;</span> Testimonials
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="pixel-box bg-card p-5">
              <p className="text-base text-muted-foreground mb-4 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-pixel text-[8px] text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
