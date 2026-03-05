import pixelAvatar from "@/assets/pixel-avatar.png";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
          <span className="text-primary">&lt;/&gt;</span> About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="pixel-box bg-card p-2 shrink-0">
            <img
              src={pixelAvatar}
              alt="Pixel art avatar of YOUR_NAME"
              className="w-48 h-48 md:w-56 md:h-56 object-cover"
              style={{ imageRendering: "pixelated" }} />
            
          </div>
          <div className="space-y-4">
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              Hey there! I'm an Undergraduate  pursuing Data science  experience building web applications, APIs, and developer tools. I love turning complex problems into elegant, simple solutions.
            
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              When I'm not coding, you can find me contributing to open source,
              experimenting with pixel art, or exploring retro game development.
              I believe great software is both functional and beautiful.
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default About;