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
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "60545bb7-0995-43f6-8dae-307a204e96a2");
    formData.append("subject", "New Contact from Portfolio - abhiramreddy.dev");
    formData.append("from_name", "Abhiram Portfolio");
    formData.append("replyto", formData.get("email") as string);
    formData.append("botcheck", "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center tracking-tight animate-float-slow">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="p-6 space-y-4" style={glassStyle}>
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
          <div>
            <label className="font-pixel text-[8px] block mb-2" style={{ color: '#f1f5f9' }}>NAME</label>
            <input
              type="text"
              name="name"
              className="w-full text-white px-3 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-white/40"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
              required
            />
          </div>
          <div>
            <label className="font-pixel text-[8px] block mb-2" style={{ color: '#f1f5f9' }}>EMAIL</label>
            <input
              type="email"
              name="email"
              className="w-full text-white px-3 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-white/40"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
              required
            />
          </div>
          <div>
            <label className="font-pixel text-[8px] block mb-2" style={{ color: '#f1f5f9' }}>MESSAGE</label>
            <textarea
              name="message"
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
            {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
          </button>
          {status === "success" && (
            <p className="font-pixel text-[8px] text-primary text-center">
              {">"} Thank you for reaching out! I'll get back to you shortly.
            </p>
          )}
          {status === "error" && (
            <p className="font-pixel text-[8px] text-destructive text-center">
              {">"} Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
