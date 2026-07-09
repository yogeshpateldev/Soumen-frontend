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
      const data = await res.json();

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
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="eyebrow">Contact</span>
              <h1 className="mt-4 max-w-3xl text-3xl sm:text-4xl md:text-5xl leading-tight font-serif">
                Let's build something together.
              </h1>
              <p className="mt-4 max-w-xl text-base md:text-lg text-primary-foreground/75 leading-relaxed">
                Whether you're looking to discuss strategic advisory roles, speaking opportunities, or business partnerships with Cuatro Labs and our portfolio, reach out below.
              </p>
            </div>
            <div className="flex self-start md:self-center shrink-0">
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-20 animate-fade-in">
        <div className="grid grid-cols-1 gap-10 md:gap-12 md:grid-cols-[1.2fr_0.8fr]">
          {/* Contact Form Card */}
          <div className="rounded-sm border border-border bg-card p-6 sm:p-8 md:p-10 shadow-sm">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="text-emerald-500 mb-4 animate-bounce" size={48} />
                <h3 className="text-2xl font-semibold text-primary">Message Sent Successfully!</h3>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                  Thank you for reaching out. Soumen or someone from the team will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-serif text-primary mb-6">Send a Message</h3>
                
                {errorMsg && (
                  <div className="flex items-center gap-3 rounded-sm border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive">
                    <AlertCircle size={18} className="shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-muted-foreground/60" size={18} />
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-sm border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground outline-none transition-colors focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-muted-foreground/60" size={18} />
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full rounded-sm border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground outline-none transition-colors focus:border-accent"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Company / Organization
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 text-muted-foreground/60" size={18} />
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full rounded-sm border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground outline-none transition-colors focus:border-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Your Message <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 text-muted-foreground/60" size={18} />
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Soumen, I would like to connect regarding..."
                      className="w-full rounded-sm border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground outline-none transition-colors focus:border-accent resize-y"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>

          {/* Quick Contact Details */}
          <div className="flex flex-col gap-10 md:gap-8 justify-between py-2">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Direct Contact</h4>
              <p className="text-sm text-muted-foreground mb-6">
                Feel free to email directly if you prefer, or connect with me via social channels.
              </p>
              
              <a
                href="mailto:careers@atomaindia.com"
                className="group inline-flex items-center gap-3 rounded-sm border border-border bg-card p-4 hover:border-accent hover:bg-accent/5 transition-all w-full"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-xs text-muted-foreground">Email Address</span>
                  <span className="text-sm font-semibold text-primary">careers@atomaindia.com</span>
                </div>
              </a>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Operating Principles</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>Build in Public:</strong> Every partnership is approached with clarity, transparency, and data-backed strategies.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>Worker-First:</strong> Supporting ideas that respect the value of labor and build structural opportunity.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-border/60">
              <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors">
                <ArrowLeft size={16} /> Return to Home
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
