import { useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    // Placeholder — will be connected to Resend via Lovable Cloud
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-xl mx-auto">
        <h2 className="font-pixel text-lg md:text-xl text-primary mb-12 text-center">
          {"// CONTACT"}
        </h2>
        <form onSubmit={handleSubmit} className="pixel-box bg-card p-6 space-y-4">
          <div>
            <label className="font-pixel text-[8px] text-foreground block mb-2">NAME</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-background text-foreground px-3 py-2 text-sm pixel-box-sm focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="font-pixel text-[8px] text-foreground block mb-2">EMAIL</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-background text-foreground px-3 py-2 text-sm pixel-box-sm focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="font-pixel text-[8px] text-foreground block mb-2">MESSAGE</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="w-full bg-background text-foreground px-3 py-2 text-sm pixel-box-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="pixel-btn bg-primary text-primary-foreground font-pixel text-[10px] px-6 py-3 w-full flex items-center justify-center gap-2"
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
