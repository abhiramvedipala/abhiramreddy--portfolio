import { GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center animate-float-slow">
        About Me
      </h2>
      <div
        className="max-w-4xl mx-auto rounded-2xl p-8"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
        }}
      >
        {/* Stat Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div
            className="rounded-xl p-5 flex flex-col items-center text-center gap-2"
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          >
            <GraduationCap className="text-white" size={28} />
            <span className="text-white font-bold text-lg">Education</span>
            <span className="text-white/70 text-sm">B.S. Data Science & AI — FIU</span>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-4">
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#f1f5f9' }}>
            I'm an Undergraduate pursuing Data Science and Artificial Intelligence at Florida International University in Miami. I'm passionate about turning raw data into meaningful insights and building intelligent systems that solve real problems.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-white/70">
            Currently deepening my foundation in machine learning, Deep Learning, statistical modeling, and software engineering and creating autonomous workflows using AI agents and Gen AI concepts — with a focus on landing a data science or AI engineering role. I enjoy working on projects that sit at the intersection of data, code, and impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
