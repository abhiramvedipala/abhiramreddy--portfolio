import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const glassStyle = {
  background: 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  borderRadius: '16px',
};

const Contact = () => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const target = e.target as HTMLFormElement;
    const name = (target.elements.namedItem("name") as HTMLInputElement).value;
    const email = (target.elements.namedItem("email") as HTMLInputElement).value;
    const message = (target.elements.namedItem("message") as HTMLTextAreaElement).value;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "60545bb7-0995-43f6-8dae-307a204e96a2",
          name: name,
          email: email,
          message: message,
          subject: "New Contact from abhiramreddy.dev",
          from_name: "Abhiram Portfolio",
          replyto: email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === "success") {
    return (
      <section id="contact" className="py-20">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center tracking-tight animate-float-slow">
            Get in Touch
          </h2>
          <div className="p-8 flex flex-col items-center text-center gap-4" style={glassStyle}>
            <CheckCircle className="text-primary" size={56} />
            <h3 className="text-white font-pixel text-sm md:text-base">Message Sent!</h3>
            <p className="text-white/70 text-[8px] md:text-[10px] font-pixel">
              Your message found its way here. I'll respond soon.
            </p>
            <button
              onClick={() => setStatus("")}
              className="bg-primary text-white font-pixel text-[10px] px-6 py-3 rounded-lg hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-200 mt-2"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

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
              name="name"
              className="w-full text-white font-pixel-body px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', fontSize: '1rem', fontWeight: 500, letterSpacing: '0.03em', color: 'white' }}
              placeholder=""
              required
            />
          </div>
          <div>
            <label className="font-pixel text-[8px] block mb-2" style={{ color: '#f1f5f9' }}>EMAIL</label>
            <input
              type="email"
              name="email"
              className="w-full text-white font-pixel-body px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', fontSize: '1rem', fontWeight: 500, letterSpacing: '0.03em', color: 'white' }}
              placeholder=""
              required
            />
          </div>
          <div>
            <label className="font-pixel text-[8px] block mb-2" style={{ color: '#f1f5f9' }}>MESSAGE</label>
            <textarea
              name="message"
              rows={4}
              className="w-full text-white font-pixel-body px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', fontSize: '1rem', fontWeight: 500, letterSpacing: '0.03em', color: 'white' }}
              placeholder=""
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-white font-pixel text-[10px] px-6 py-3 w-full flex items-center justify-center gap-2 rounded-lg hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-200"
          >
            <Send size={14} />
            {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
          </button>
          {status === "error" && (
            <p className="font-pixel text-[8px] text-destructive text-center">
              {">"} The raven got lost! Please try again or email directly at abhiramreddy.vedipala@gmail.com
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
