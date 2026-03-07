import { useState } from "react";
import chatBotImg from "@/assets/chat-bot.png";

const FloatingChatButton = () => {
  const [hovered, setHovered] = useState(false);

  const scrollToChat = () => {
    const chatSection = document.getElementById("chat");
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1">
      {hovered && (
        <span className="bg-black/80 backdrop-blur-sm text-white text-[10px] font-pixel px-3 py-1.5 rounded-lg shadow-lg animate-fade-in whitespace-nowrap mb-1">
          Chat with AI
        </span>
      )}
      <button
        onClick={scrollToChat}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-transform duration-200 hover:scale-110 cursor-pointer overflow-hidden border-2 border-white/20"
        style={{
          background: "linear-gradient(135deg, rgba(124,58,237,0.6), rgba(37,99,235,0.6))",
          backdropFilter: "blur(8px)",
        }}
        aria-label="Chat with AI"
      >
        {/* Glow ring */}
        <span className="absolute inset-0 rounded-full animate-[glow-pulse_2.5s_ease-in-out_infinite] pointer-events-none" />
        <img
          src={chatBotImg}
          alt="AI Chat Bot"
          className="w-12 h-12 object-contain rounded-full"
        />
      </button>
      {/* Chat bar label */}
      <div
        className="px-3 py-1 rounded-full border border-white/20 mt-0.5"
        style={{
          background: "linear-gradient(135deg, rgba(124,58,237,0.5), rgba(37,99,235,0.5))",
          backdropFilter: "blur(8px)",
        }}
      >
        <span className="text-white font-pixel text-[7px] tracking-wider">CHAT</span>
      </div>
    </div>
  );
};

export default FloatingChatButton;
