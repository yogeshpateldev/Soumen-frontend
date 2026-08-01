import { useState } from "react";
import { User, Mail, Phone, MapPin, MessageSquare, Building, Send, CheckCircle2, AlertCircle, Quote } from "lucide-react";
import { API_BASE_URL } from "../config";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

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
        setErrorMsg(err.message || "Could not submit your message. Please verify your connection.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* SECTION 6: CONTACT FORM */}
      <section id="contact" className="relative py-16 md:py-20 bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-blue opacity-5 blur-3xl rounded-full pointer-events-none" />

        <div className="section-container relative">
          <div className="max-w-3xl mb-6 sm:mb-12 text-left">
            <span className="eyebrow">Get in Touch</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              Let's build something <span className="gradient-text">together.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a service professional, a potential B2B partner, or an investor who believes in sustainable scale — I'd love to connect.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-[1.2fr_0.8fr]">
            {/* Interactive Form */}
            <div className="glass-card p-5 sm:p-8 shadow-lg border border-border/40 bg-card/45 backdrop-blur-md relative overflow-hidden">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <CheckCircle2 className="text-emerald-500 animate-bounce" size={48} />
                  <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                  <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
                    Thank you for reaching out. Soumen or someone from the Cuatro Labs team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-blue text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5 text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Send a Message</h3>

                  {errorMsg && (
                    <div className="flex items-center gap-3 rounded-xl border border-destructive/20 bg-destructive/10 p-3.5 text-xs sm:text-sm text-destructive animate-fade-in">
                      <AlertCircle size={18} className="shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-sans">
                        Full Name <span className="text-primary">*</span>
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
                          className="w-full rounded-xl border border-border/30 bg-secondary/20 py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-all duration-300 hover:border-primary/30 focus:border-primary focus:ring-1 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-sans">
                        Email Address <span className="text-primary">*</span>
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
                          className="w-full rounded-xl border border-border/30 bg-secondary/20 py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-all duration-300 hover:border-primary/30 focus:border-primary focus:ring-1 focus:ring-primary/20"
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
                        className="w-full rounded-xl border border-border/30 bg-secondary/20 py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-all duration-300 hover:border-primary/30 focus:border-primary focus:ring-1 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-sans">
                      Your Message <span className="text-primary">*</span>
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
                        className="w-full rounded-xl border border-border/30 bg-secondary/20 py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-all duration-300 hover:border-primary/30 focus:border-primary focus:ring-1 focus:ring-primary/20 resize-y min-h-[120px]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-blue py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/15 hover:shadow-primary/25 disabled:opacity-50 transform active:scale-[0.98] cursor-pointer transition-all duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>

            {/* Quick Contact Details */}
            <div className="flex flex-col gap-8 justify-between py-2 text-left">
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-sans">
                  Cuatro Labs Contact
                </h4>

                <div className="space-y-3">
                  <a
                    href="mailto:tech@cuatrolabs.com"
                    className="group flex items-center gap-4 rounded-xl border border-border/35 bg-card/45 p-4 hover:border-primary/40 hover:bg-secondary/25 transition-all duration-300 w-full shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                      <Mail size={16} />
                    </div>
                    <div>
                      <span className="block text-[10px] text-muted-foreground/80 font-bold uppercase tracking-wider font-sans">
                        Email Address
                      </span>
                      <span className="text-sm font-semibold text-foreground tracking-wide">
                        tech@cuatrolabs.com
                      </span>
                    </div>
                  </a>

                  <a
                    href="tel:+918349963744"
                    className="group flex items-center gap-4 rounded-xl border border-border/35 bg-card/45 p-4 hover:border-primary/40 hover:bg-secondary/25 transition-all duration-300 w-full shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                      <Phone size={16} />
                    </div>
                    <div>
                      <span className="block text-[10px] text-muted-foreground/80 font-bold uppercase tracking-wider font-sans">
                        Phone Number
                      </span>
                      <span className="text-sm font-semibold text-foreground tracking-wide">
                        +91 ***** *****
                      </span>
                    </div>
                  </a>

                  <div className="group flex items-center gap-4 rounded-xl border border-border/35 bg-card/45 p-4 transition-all duration-300 w-full shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <span className="block text-[10px] text-muted-foreground/80 font-bold uppercase tracking-wider font-sans">
                        Head Office
                      </span>
                      <span className="text-sm font-semibold text-foreground tracking-wide">
                        Chennai, Tamil Nadu – 600002, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Principles */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-sans">
                  Operating Principles
                </h4>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong>Build in Public:</strong> Every partnership is approached with clarity, transparency, and data-backed strategies.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong>Worker-First:</strong> Supporting ideas that respect the value of labor and build structural opportunity.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull-quote banner */}
      <section className="border-t border-border/30 mx-auto max-w-4xl px-6 py-12 md:py-16 text-center relative z-10">
        <Quote className="mx-auto text-primary/15 mb-6" size={48} />
        <blockquote className="font-display text-2xl leading-relaxed text-foreground md:text-3xl italic">
          "The market doesn't care about your vision, it cares about your solution "
        </blockquote>
        <cite className="mt-6 block text-sm not-italic text-muted-foreground font-semibold uppercase tracking-wider">
          — Soumen Bhatta
        </cite>
      </section>
    </>
  );
}

export default ContactSection;
