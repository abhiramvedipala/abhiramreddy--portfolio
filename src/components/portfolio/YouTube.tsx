const videos = [
  { id: "dQw4w9WgXcQ", title: "Building a Pixel Art Editor from Scratch" },
  { id: "dQw4w9WgXcQ", title: "My Developer Setup Tour 2024" },
];

const YouTube = () => {
  return (
    <section id="videos" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-pixel text-lg md:text-xl text-primary mb-12 text-center">
          {"// VIDEOS"}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((v, i) => (
            <div key={i} className="pixel-box bg-card p-3">
              <div className="aspect-video w-full mb-3">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <p className="font-pixel text-[8px] text-foreground">{v.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTube;
