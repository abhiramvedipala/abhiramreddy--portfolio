import { useState } from "react";
import chatBotIcon from "@/assets/chat-bot-icon.png";

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
        className="relative w-[3.85rem] h-[3.85rem] rounded-full flex items-center justify-center shadow-xl transition-transform duration-100 ease-out hover:scale-110 active:scale-95 cursor-pointer touch-manipulation"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
        }}
        aria-label="Chat with AI"
      >
        <img
          src={chatBotIcon}
          alt="Chat bot"
          draggable={false}
          className="block w-[1.65rem] h-[1.65rem] invert select-none pointer-events-none"
        />
      </button>

    </div>
  );
};

export default FloatingChatButton;
