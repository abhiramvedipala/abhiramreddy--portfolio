import { useState } from "react";
import { Send } from "lucide-react";

const glassStyle = {
  background: 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  borderRadius: '16px',
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center tracking-tight animate-float-slow">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="p-6 space-y-4" style={glassStyle}>
          <div>
            <label className="font-pixel text-[8px] block mb-2" style={{ color: '#f1f5f9' }}>NAME</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full text-white px-3 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-white/40"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
              required
            />
          </div>
          <div>
            <label className="font-pixel text-[8px] block mb-2" style={{ color: '#f1f5f9' }}>EMAIL</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full text-white px-3 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-white/40"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
              required
            />
          </div>
          <div>
            <label className="font-pixel text-[8px] block mb-2" style={{ color: '#f1f5f9' }}>MESSAGE</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="w-full text-white px-3 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder:text-white/40"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-primary text-white font-pixel text-[10px] px-6 py-3 w-full flex items-center justify-center gap-2 rounded-lg hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-200"
          >
            <Send size={14} />
            {status === "sending" ? "SENDING..." : status === "sent" ? "SENT!" : "SEND MESSAGE"}
          </button>
          {status === "sent" && (
            <p className="font-pixel text-[8px] text-primary text-center">
              {">"} MESSAGE DELIVERED SUCCESSFULLY!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
