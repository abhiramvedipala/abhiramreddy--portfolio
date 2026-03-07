import { useEffect, useRef, useState } from "react";

const events = [
  { year: "2024", title: "Senior Engineer @ TechCorp", desc: "Leading frontend architecture and mentoring junior devs." },
  { year: "2022", title: "Software Engineer @ StartupXYZ", desc: "Built real-time collaboration tools used by 50k+ users." },
  { year: "2020", title: "Junior Developer @ AgencyPro", desc: "Developed web apps for Fortune 500 clients." },
  { year: "2019", title: "B.Sc. Computer Science", desc: "Graduated with honors. Focus on distributed systems." },
  { year: "2017", title: "Started Coding", desc: "Wrote my first 'Hello World' and never looked back." },
];

const TimelineItem = ({ event, index, total }: { event: typeof events[0]; index: number; total: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex gap-4 md:gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col items-center">
        <div className="bg-primary text-white font-pixel text-[8px] px-3 py-1.5 rounded-full whitespace-nowrap relative z-10">
          {event.year}
        </div>
        {index < total - 1 && (
          <div className="w-[2px] bg-white/20 flex-1 min-h-[40px]" />
        )}
      </div>
      <div className="pb-8">
        <h3 className="font-pixel text-[10px] md:text-xs text-white mb-2">{event.title}</h3>
        <p className="text-base md:text-lg text-white/60">{event.desc}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <section id="timeline" className="py-20">
      <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-sm rounded-lg p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
          <span className="text-primary">&lt;/&gt;</span> Timeline
        </h2>
        <div className="space-y-0">
          {events.map((event, i) => (
            <TimelineItem key={i} event={event} index={i} total={events.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
