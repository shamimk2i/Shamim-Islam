import { useState, FormEvent } from 'react';
import { ArrowUpRight, Copy, Check, Mail, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';
import { personalInfo } from '../portfolioData';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sentMessage, setSentMessage] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Pre-fill mailto link as reliable real communication
    const subject = encodeURIComponent(`Inquiry from ${formState.name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Hello Shamim,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSentMessage(true);
  };

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-[#68715F]" />
        <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E]">
          10 / CONNECT
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Narrative */}
        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#111111] leading-[0.95]">
            Have an idea?
            <br />
            <span className="text-[#68715F]">Let&apos;s build something</span>
            <br />
            interesting.
          </h2>

          <p className="text-lg md:text-xl text-[#6E6E6E] font-light max-w-xl leading-relaxed pt-2">
            Whether you want to collaborate on experimental software, discuss new products, or just exchange ideas on technology and design.
          </p>

          {/* Quick Email Copy & Interactive Conversation Opener */}
          <div className="pt-6 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setFormOpen(!formOpen)}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#111111] text-[#F5F4F0] text-xs uppercase font-mono-meta tracking-widest hover:bg-[#68715F] transition-all duration-300 rounded-xs cursor-pointer shadow-md"
            >
              <span>{formOpen ? 'Close note' : 'Start a conversation'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-5 py-4 border border-[#D8D7D2] text-[#111111] text-xs uppercase font-mono-meta tracking-wider hover:bg-[#ECEBE7] transition-all rounded-xs cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#68715F]" />
                  <span>Email copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#6E6E6E]" />
                  <span>Copy: {personalInfo.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Interactive Direct Message Box */}
          {formOpen && (
            <form
              onSubmit={handleSubmit}
              className="mt-8 p-6 md:p-8 bg-[#ECEBE7] border border-[#D8D7D2] rounded-xs space-y-4 max-w-xl transition-all"
            >
              <div className="text-xs font-mono-meta uppercase tracking-wider text-[#111111] font-semibold flex items-center justify-between">
                <span>Direct Dispatch</span>
                <span className="text-[#68715F]">{personalInfo.email}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono-meta text-[#6E6E6E] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F5F4F0] border border-[#D8D7D2] rounded-xs text-sm text-[#111111] outline-none focus:border-[#111111]"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono-meta text-[#6E6E6E] mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F5F4F0] border border-[#D8D7D2] rounded-xs text-sm text-[#111111] outline-none focus:border-[#111111]"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono-meta text-[#6E6E6E] mb-1">Message / Thoughts</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-3 py-2 bg-[#F5F4F0] border border-[#D8D7D2] rounded-xs text-sm text-[#111111] outline-none focus:border-[#111111]"
                  placeholder="Tell me about your idea or project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#111111] text-[#F5F4F0] text-xs uppercase font-mono-meta tracking-widest hover:bg-[#68715F] transition-colors rounded-xs flex items-center justify-center gap-2"
              >
                <span>Send Dispatch via Mail Client</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {sentMessage && (
                <p className="text-xs font-mono-meta text-[#68715F] text-center pt-2">
                  Mail client launched. Thank you for reaching out!
                </p>
              )}
            </form>
          )}
        </div>

        {/* Right Column: Channels & Coordinates */}
        <div className="lg:col-span-4 space-y-8 pt-4">
          <div className="p-6 bg-[#ECEBE7]/60 border border-[#D8D7D2] rounded-xs space-y-5">
            <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E] block">
              Contact Coordinates
            </span>

            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-between text-[#111111] hover:text-[#68715F] transition-colors py-1 border-b border-[#D8D7D2]/60"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#68715F]" />
                  <span>Email</span>
                </span>
                <span className="font-mono-meta text-xs">{personalInfo.email}</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-[#111111] hover:text-[#68715F] transition-colors py-1 border-b border-[#D8D7D2]/60"
              >
                <span className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-[#68715F]" />
                  <span>GitHub</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-[#111111] hover:text-[#68715F] transition-colors py-1 border-b border-[#D8D7D2]/60"
              >
                <span className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-[#68715F]" />
                  <span>LinkedIn</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-[#111111] hover:text-[#68715F] transition-colors py-1"
              >
                <span className="flex items-center gap-2">
                  <Twitter className="w-4 h-4 text-[#68715F]" />
                  <span>X / Twitter</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-4 border-t border-[#D8D7D2] text-[11px] font-mono-meta text-[#6E6E6E] space-y-1">
              <div>Timezone: {personalInfo.timezone} ({personalInfo.gmtOffset})</div>
              <div>Location: {personalInfo.location}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
