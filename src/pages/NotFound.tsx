import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import heroBg from "@/assets/hero-bg.png";
import pixelGhost from "@/assets/pixel-ghost.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${heroBg})`, filter: 'brightness(0.55) saturate(0.7)' }}
      />
      <div className="relative z-10 text-center px-6 py-16 bg-white/10 backdrop-blur-[12px] border border-white/20 max-w-md w-full mx-4"
        style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
        <img
          src={pixelGhost}
          alt="Pixel ghost"
          className="w-24 h-24 mx-auto mb-4 animate-float-slow drop-shadow-lg"
          style={{ imageRendering: 'pixelated' }}
        />
        <h1 className="text-6xl md:text-8xl font-pixel text-primary mb-6" style={{ textShadow: '0px 2px 12px rgba(0,0,0,0.75)' }}>
          404
        </h1>
        <p className="text-lg md:text-xl text-white/80 font-pixel-body mb-10 leading-relaxed">
          Looks like this page got lost in the dungeon.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-white text-black font-bold border-2 border-black hover:bg-gray-100 transition-colors text-sm tracking-wide"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
