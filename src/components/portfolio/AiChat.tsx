import { useState } from "react";
import { Send } from "lucide-react";

const AiChat = () => {
  const [messages, setMessages] = useState<{role: "user" | "assistant"; content: string;}[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: "user" as const, content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Thanks for your message! The AI backend isn't connected yet." }
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="chat" className="py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
          Chat with AI me
        </h2>
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}
        >
          <div className="h-80 flex flex-col items-center justify-end p-6 space-y-2">
            {messages.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-end pb-4 space-y-2">
                <p className="text-white/50 text-lg font-medium">Start a conversation...</p>
              </div>
            ) : (
              <div className="flex-1 w-full overflow-y-auto space-y-3">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] p-4 text-sm rounded-xl ${
                        m.role === "user"
                          ? "bg-sky-500 text-white"
                          : "text-white/90"
                      }`}
                      style={m.role === "assistant" ? { background: 'rgba(255,255,255,0.1)' } : undefined}
                    >
                      {m.content}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="text-white/90 p-4 text-sm rounded-xl" style={{ background: 'rgba(255,255,255,0.1)' }}>
                      <span className="animate-pulse">Typing...</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="p-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Message..."
                className="flex-1 text-white px-5 py-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-white/40"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="bg-sky-500 text-white p-3 rounded-xl hover:bg-sky-400 transition-colors shrink-0"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiChat;
