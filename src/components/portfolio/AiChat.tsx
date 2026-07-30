import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";


// The deployed portfolio-rag backend. Not a secret -- it ships in the bundle
// and is visible in any browser's network tab -- so it is the default rather
// than required config, and the build works anywhere without env setup.
// VITE_CHAT_API_URL overrides it when pointing at a local backend.
const CHAT_API_URL =
  (import.meta.env.VITE_CHAT_API_URL as string | undefined) ??
  "https://portfolio-rag-chatbot-feature-abhiram.onrender.com";

const AiChat = () => {
  const [messages, setMessages] = useState<{role: "user" | "assistant"; content: string;}[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [slow, setSlow] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [messages, loading]);

  useEffect(() => {
    if (!loading) inputRef.current?.focus();
  }, [loading]);


  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const question = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setInput("");
    setLoading(true);

    // The backend sleeps when idle and takes ~50s to wake. Without this the
    // first visitor of the day just watches "Typing..." and assumes it broke.
    const slowTimer = setTimeout(() => setSlow(true), 4000);

    try {
      const res = await fetch(`${CHAT_API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.answer }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't reach the AI backend right now. Please try again shortly." },
      ]);
    } finally {
      clearTimeout(slowTimer);
      setSlow(false);
      setLoading(false);
    }
  };

  return (
    <section id="chat" className="py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-12 text-center animate-float-slow whitespace-nowrap">
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
              <div className="flex-1" />
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
                      <span className="animate-pulse">
                        {slow ? "Waking up the server, this can take up to a minute..." : "Typing..."}
                      </span>
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>
            )}
          </div>
          <div className="p-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="flex gap-3">
              <input
                ref={inputRef}
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
