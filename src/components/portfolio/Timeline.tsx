const events = [
  { year: "2024", title: "Senior Engineer @ TechCorp", desc: "Leading frontend architecture and mentoring junior devs." },
  { year: "2022", title: "Software Engineer @ StartupXYZ", desc: "Built real-time collaboration tools used by 50k+ users." },
  { year: "2020", title: "Junior Developer @ AgencyPro", desc: "Developed web apps for Fortune 500 clients." },
  { year: "2019", title: "B.Sc. Computer Science", desc: "Graduated with honors. Focus on distributed systems." },
  { year: "2017", title: "Started Coding", desc: "Wrote my first 'Hello World' and never looked back." },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-pixel text-lg md:text-xl text-primary mb-12 text-center">
          {"// TIMELINE"}
        </h2>
        <div className="space-y-0">
          {events.map((event, i) => (
            <div key={i} className="flex gap-4 md:gap-6">
              <div className="flex flex-col items-center">
                <div className="pixel-box-sm bg-primary text-primary-foreground font-pixel text-[8px] px-2 py-1 whitespace-nowrap">
                  {event.year}
                </div>
                {i < events.length - 1 && (
                  <div className="w-[3px] bg-border flex-1 min-h-[40px]" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="font-pixel text-[10px] md:text-xs text-foreground mb-2">
                  {event.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  {event.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
