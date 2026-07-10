import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Send, CheckCircle2, User, Building, MessageSquare, ArrowLeft, AlertCircle } from "lucide-react";
import { API_BASE_URL } from "../config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get in Touch — Soumen Bhatta" },
      {
        name: "description",
        content: "Get in touch with Soumen Bhatta for collaboration, advisory roles, or speaking engagements.",
      },
      { property: "og:title", content: "Get in Touch — Soumen Bhatta" },
      {
        property: "og:description",
        content: "Contact Soumen Bhatta, Founder & Group CEO of Cuatro Labs.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 seconds timeout for submission

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      
      let data: any = {};
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        throw new Error(`Server error (${res.status}): ${text.slice(0, 100) || res.statusText}`);
      }

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err: any) {
      clearTimeout(timeoutId);
      console.error("Form submission error:", err);
      if (err.name === "AbortError") {
        setErrorMsg("Submission timed out. Please check if the server is running and try again.");
      } else {
        setErrorMsg(err.message || "Could not submit your message. Please verify your connection and try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Decorative Glowing Orbs */}
      <div className="absolute top-[20%] right-[-15%] w-[40rem] h-[40rem] rounded-full bg-accent/5 blur-[130px] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-[20%] left-[-15%] w-[35rem] h-[35rem] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-border/30 bg-grid-pattern py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <span className="eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-xs font-semibold text-accent mb-4">
            Get in touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-primary leading-tight tracking-tight">
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70">together.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Whether you're looking to discuss strategic advisory roles, speaking opportunities, or business partnerships with Cuatro Labs and our portfolio, reach out below.
          </p>
        </div>
      </section>

      {/* Main Content Form */}
      <section className="mx-auto max-w-5xl px-6 py-12 md:py-20 animate-fade-in relative z-10">
        <div className="grid grid-cols-1 gap-10 md:gap-12 md:grid-cols-[1.2fr_0.8fr]">
          {/* Contact Form Card */}
          <div className="glass-card p-8 sm:p-10 shadow-lg border border-border/40 bg-card/40 backdrop-blur-md relative overflow-hidden">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <CheckCircle2 className="text-emerald-400 animate-bounce" size={48} />
                <h3 className="text-2xl font-serif font-semibold text-primary">Message Sent!</h3>
                <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
                  Thank you for reaching out. Soumen or someone from the team will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/15 hover:bg-accent/90 transition-all duration-300 transform active:scale-[0.98]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-serif font-semibold text-primary mb-6">Send a Message</h3>
                
                {errorMsg && (
                  <div className="flex items-center gap-3 rounded-xl border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive animate-fade-in">
                    <AlertCircle size={18} className="shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-sans">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 text-muted-foreground/50" size={16} />
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-border/30 bg-secondary/20 py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-all duration-300 hover:border-accent/30 focus:border-accent focus:ring-1 focus:ring-accent/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-sans">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 text-muted-foreground/50" size={16} />
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-border/30 bg-secondary/20 py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-all duration-300 hover:border-accent/30 focus:border-accent focus:ring-1 focus:ring-accent/20"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-sans">
                    Company / Organization
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3.5 top-3.5 text-muted-foreground/50" size={16} />
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full rounded-xl border border-border/30 bg-secondary/20 py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-all duration-300 hover:border-accent/30 focus:border-accent focus:ring-1 focus:ring-accent/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-sans">
                    Your Message <span className="text-accent">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-4 text-muted-foreground/50" size={16} />
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Soumen, I would like to connect regarding..."
                      className="w-full rounded-xl border border-border/30 bg-secondary/20 py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-all duration-300 hover:border-accent/30 focus:border-accent focus:ring-1 focus:ring-accent/20 resize-y min-h-[120px]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/15 hover:shadow-accent/25 hover:bg-accent/90 transition-all duration-300 disabled:opacity-50 transform active:scale-[0.98]"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>

          {/* Quick Contact Details */}
          <div className="flex flex-col gap-10 md:gap-8 justify-between py-2">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-sans">Direct Contact</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Feel free to email directly if you prefer, or connect with me via social channels.
              </p>
              
              <a
                href="mailto:careers@atomaindia.com"
                className="group flex items-center gap-4 rounded-xl border border-border/35 bg-card/45 p-4 hover:border-accent/40 hover:bg-secondary/25 transition-all duration-300 w-full shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300 shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="block text-[10px] text-muted-foreground/80 font-bold uppercase tracking-wider font-sans">Email Address</span>
                  <span className="text-sm font-semibold text-primary tracking-wide">careers@atomaindia.com</span>
                </div>
              </a>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-sans">Operating Principles</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Build in Public:</strong> Every partnership is approached with clarity, transparency, and data-backed strategies.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Worker-First:</strong> Supporting ideas that respect the value of labor and build structural opportunity.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-border/30">
              <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors duration-300 group">
                <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" /> Return to Home
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
