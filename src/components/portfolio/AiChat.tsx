import { useState } from "react";
import { Send } from "lucide-react";

const AiChat = () => {
  const [messages, setMessages] = useState<{role: "user" | "assistant";content: string;}[]>([
  { role: "assistant", content: "Hey! I'm the AI version of Abhiram. Ask me anything about my work, skills, or experience!" }]
  );
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
      { role: "assistant", content: "Thanks for your message! The AI backend isn't connected yet — enable Lovable Cloud to power this chat." }]
      );
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="chat" className="py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
          Chat With AI Assistant
        </h2>
        <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-4">
          <div className="h-64 overflow-y-auto space-y-3 mb-4 p-2">
            {messages.map((m, i) =>
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                className={`max-w-[80%] p-3 text-sm rounded-lg ${
                m.role === "user" ?
                "bg-primary text-white" :
                "bg-white/10 text-white/90"}`
                }>
                
                  {m.content}
                </div>
              </div>
            )}
            {loading &&
            <div className="flex justify-start">
                <div className="bg-white/10 text-white/90 p-3 text-sm rounded-lg">
                  <span className="animate-blink">{">"}_</span>
                </div>
              </div>
            }
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 bg-white/10 text-white px-3 py-2 text-sm rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-white/40" />
            
            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-primary text-white p-2 rounded-lg hover:bg-primary/80 transition-colors">
              
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default AiChat;