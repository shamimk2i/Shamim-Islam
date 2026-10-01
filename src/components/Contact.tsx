import { useState, FormEvent } from 'react';
import { ArrowUpRight, Copy, Check, Mail, Linkedin } from 'lucide-react';
import {
  siGithub,
  siX,
  siYoutube,
  siFacebook,
  siInstagram,
  siTwitch,
  siTiktok
} from 'simple-icons';
import { personalInfo } from '../portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { useSound } from '../context/SoundContext';
import { MagneticButton } from './MagneticButton';

function BrandIcon({ path, className = "w-4 h-4" }: { path: string; className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={`${className} fill-current`}>
      <path d={path} />
    </svg>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sentMessage, setSentMessage] = useState(false);
  const { t } = useLanguage();
  const { playClick, playPop, playSuccess } = useSound();

  const copyEmail = () => {
    playPop();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    playSuccess();
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
        <span className="w-1.5 h-1.5 rounded-full bg-[#68715F] dark:bg-[#8FA183]" />
        <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E] dark:text-[#9A9B9E]">
          {t.contact.eyebrow}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Narrative */}
        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#111111] dark:text-[#EDEDEB] leading-[0.95]">
            Have an idea?
            <br />
            <span className="text-[#68715F] dark:text-[#8FA183]">Let&apos;s build something</span>
            <br />
            remarkable.
          </h2>

          <p className="text-lg md:text-xl text-[#6E6E6E] dark:text-[#A0A2A8] font-light max-w-xl leading-relaxed pt-2">
            {t.contact.subheading}
          </p>

          {/* Quick Email Copy & Interactive Conversation Opener */}
          <div className="pt-6 flex flex-wrap items-center gap-4">
            <MagneticButton
              onClick={() => {
                playClick();
                setFormOpen(!formOpen);
              }}
              strength={0.25}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#111111] text-[#F5F4F0] dark:bg-[#EDEDEB] dark:text-[#111111] text-xs uppercase font-mono-meta tracking-widest hover:bg-[#68715F] dark:hover:bg-[#8FA183] dark:hover:text-white transition-all duration-300 rounded-xs cursor-pointer shadow-md"
            >
              <span>{formOpen ? 'Close Note' : 'Start a Conversation'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-5 py-4 border border-[#D8D7D2] dark:border-[#33363F] text-[#111111] dark:text-[#EDEDEB] text-xs uppercase font-mono-meta tracking-wider hover:bg-[#ECEBE7] dark:hover:bg-[#1A1B1E] transition-all rounded-xs cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#68715F] dark:text-[#8FA183]" />
                  <span>Email copied to clipboard</span>
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
              className="mt-8 p-6 md:p-8 bg-[#ECEBE7] dark:bg-[#1A1B1E] border border-[#D8D7D2] dark:border-[#33363F] rounded-xs space-y-4 max-w-xl transition-all shadow-md"
            >
              <div className="text-xs font-mono-meta uppercase tracking-wider text-[#111111] dark:text-[#EDEDEB] font-semibold flex items-center justify-between">
                <span>Direct Dispatch</span>
                <span className="text-[#68715F] dark:text-[#8FA183]">{personalInfo.email}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E] mb-1">
                    {t.contact.namePlaceholder}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F5F4F0] dark:bg-[#121315] border border-[#D8D7D2] dark:border-[#33363F] rounded-xs text-sm text-[#111111] dark:text-[#EDEDEB] outline-none focus:border-[#68715F]"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E] mb-1">
                    {t.contact.emailPlaceholder}
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F5F4F0] dark:bg-[#121315] border border-[#D8D7D2] dark:border-[#33363F] rounded-xs text-sm text-[#111111] dark:text-[#EDEDEB] outline-none focus:border-[#68715F]"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E] mb-1">
                  {t.contact.messagePlaceholder}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-3 py-2 bg-[#F5F4F0] dark:bg-[#121315] border border-[#D8D7D2] dark:border-[#33363F] rounded-xs text-sm text-[#111111] dark:text-[#EDEDEB] outline-none focus:border-[#68715F]"
                  placeholder="Tell me about your idea or project..."
                />
              </div>

              <MagneticButton
                type="submit"
                strength={0.2}
                className="w-full py-3.5 bg-[#111111] text-[#F5F4F0] dark:bg-[#EDEDEB] dark:text-[#111111] text-xs uppercase font-mono-meta tracking-widest hover:bg-[#68715F] dark:hover:bg-[#8FA183] dark:hover:text-white transition-colors rounded-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.contact.sendMessage}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </MagneticButton>

              {sentMessage && (
                <p className="text-xs font-mono-meta text-[#68715F] dark:text-[#8FA183] text-center pt-2">
                  {t.contact.messageSent}
                </p>
              )}
            </form>
          )}
        </div>

        {/* Right Column: Channels & Coordinates */}
        <div className="lg:col-span-4 space-y-8 pt-4">
          <div className="p-6 bg-[#ECEBE7]/60 dark:bg-[#1A1B1E]/60 border border-[#D8D7D2] dark:border-[#33363F] rounded-xs space-y-5">
            <div className="flex items-center justify-between border-b border-[#D8D7D2]/60 dark:border-[#2E3138] pb-3">
              <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E] dark:text-[#9A9B9E] block font-medium">
                Contact Coordinates
              </span>
              <span className="text-[10px] font-mono-meta text-[#68715F] dark:text-[#8FA183] uppercase tracking-wider">
                9 Channels
              </span>
            </div>

            <div className="space-y-0.5 text-sm">
              {[
                {
                  name: 'Email',
                  href: `mailto:${personalInfo.email}`,
                  isExternal: false,
                  display: personalInfo.email,
                  icon: <Mail className="w-4 h-4 text-[#68715F] dark:text-[#8FA183] group-hover:text-[#111111] dark:group-hover:text-white transition-colors shrink-0" />,
                },
                {
                  name: 'GitHub',
                  href: personalInfo.github,
                  isExternal: true,
                  icon: <BrandIcon path={siGithub.path} className="w-4 h-4 text-[#68715F] dark:text-[#8FA183] group-hover:text-[#111111] dark:group-hover:text-white transition-colors shrink-0" />,
                },
                {
                  name: 'LinkedIn',
                  href: personalInfo.linkedin,
                  isExternal: true,
                  icon: <BrandIcon path={siGithub.path} className="w-4 h-4 text-[#68715F] dark:text-[#8FA183] group-hover:text-[#111111] dark:group-hover:text-white transition-colors shrink-0" />,
                },
                {
                  name: 'X / Twitter',
                  href: personalInfo.twitter,
                  isExternal: true,
                  icon: <BrandIcon path={siX.path} className="w-4 h-4 text-[#68715F] dark:text-[#8FA183] group-hover:text-[#111111] dark:group-hover:text-white transition-colors shrink-0" />,
                },
                {
                  name: 'YouTube',
                  href: personalInfo.youtube,
                  isExternal: true,
                  icon: <BrandIcon path={siYoutube.path} className="w-4 h-4 text-[#68715F] dark:text-[#8FA183] group-hover:text-[#111111] dark:group-hover:text-white transition-colors shrink-0" />,
                },
                {
                  name: 'Facebook',
                  href: personalInfo.facebook,
                  isExternal: true,
                  icon: <BrandIcon path={siFacebook.path} className="w-4 h-4 text-[#68715F] dark:text-[#8FA183] group-hover:text-[#111111] dark:group-hover:text-white transition-colors shrink-0" />,
                },
                {
                  name: 'Instagram',
                  href: personalInfo.instagram,
                  isExternal: true,
                  icon: <BrandIcon path={siInstagram.path} className="w-4 h-4 text-[#68715F] dark:text-[#8FA183] group-hover:text-[#111111] dark:group-hover:text-white transition-colors shrink-0" />,
                },
                {
                  name: 'Twitch',
                  href: personalInfo.twitch,
                  isExternal: true,
                  icon: <BrandIcon path={siTwitch.path} className="w-4 h-4 text-[#68715F] dark:text-[#8FA183] group-hover:text-[#111111] dark:group-hover:text-white transition-colors shrink-0" />,
                },
                {
                  name: 'TikTok',
                  href: personalInfo.tiktok,
                  isExternal: true,
                  icon: <BrandIcon path={siTiktok.path} className="w-4 h-4 text-[#68715F] dark:text-[#8FA183] group-hover:text-[#111111] dark:group-hover:text-white transition-colors shrink-0" />,
                },
              ].map((channel) => (
                <a
                  key={channel.name}
                  href={channel.href}
                  target={channel.isExternal ? '_blank' : undefined}
                  rel={channel.isExternal ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between text-[#111111] dark:text-[#EDEDEB] hover:text-[#68715F] dark:hover:text-[#8FA183] transition-colors py-2 px-1.5 -mx-1.5 rounded-xs hover:bg-[#ECEBE7] dark:hover:bg-[#202227] border-b border-[#D8D7D2]/50 dark:border-[#2E3138]/50 last:border-b-0 cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    {channel.icon}
                    <span className="font-light text-sm group-hover:translate-x-0.5 transition-transform duration-200">
                      {channel.name}
                    </span>
                  </span>

                  <div className="flex items-center gap-2">
                    {channel.display && (
                      <span className="font-mono-meta text-xs text-[#6E6E6E] dark:text-[#9A9B9E] group-hover:text-[#111111] dark:group-hover:text-white transition-colors hidden sm:inline truncate max-w-[170px]">
                        {channel.display}
                      </span>
                    )}
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#6E6E6E] dark:text-[#9A9B9E] group-hover:text-[#68715F] dark:group-hover:text-[#8FA183] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 shrink-0" />
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[#D8D7D2] dark:border-[#2E3138] text-[11px] font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E] space-y-1">
              <div>Timezone: {personalInfo.timezone} ({personalInfo.gmtOffset})</div>
              <div>Location: {personalInfo.location}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
