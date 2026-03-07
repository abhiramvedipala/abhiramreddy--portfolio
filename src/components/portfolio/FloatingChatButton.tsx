import { useState } from "react";
import { MessageCircle } from "lucide-react";

const FloatingChatButton = () => {
  const [hovered, setHovered] = useState(false);

  const scrollToChat = () => {
    const chatSection = document.getElementById("chat");
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      {hovered && (
        <span className="bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg animate-fade-in whitespace-nowrap">
          Chat with AI
        </span>
      )}
      <button
        onClick={scrollToChat}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-transform duration-200 hover:scale-110 cursor-pointer"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
        }}
        aria-label="Chat with AI"
      >
        <span className="absolute inset-0 rounded-full animate-[glow-pulse_2.5s_ease-in-out_infinite] pointer-events-none" />
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default FloatingChatButton;
