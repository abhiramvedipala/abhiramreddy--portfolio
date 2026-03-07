import pixelAvatar from "@/assets/pixel-avatar.png";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div
        className="max-w-4xl mx-auto rounded-2xl p-8"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="rounded-2xl p-1 shrink-0" style={{ border: '2px solid rgba(255, 255, 255, 0.3)', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
            <img
              src={pixelAvatar}
              alt="Pixel art avatar"
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-xl"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#f1f5f9' }}>
              Hey there! I'm an Undergraduate pursuing Data science experience building web applications, APIs, and developer tools. I love turning complex problems into elegant, simple solutions.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-white/70">
              When I'm not coding, you can find me contributing to open source,
              experimenting with pixel art, or exploring retro game development.
              I believe great software is both functional and beautiful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
