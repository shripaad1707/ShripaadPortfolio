import { MessageSquare, Instagram, Mail, Linkedin, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      id: "footer-wa",
      href: "https://wa.me/917893155092",
      icon: MessageSquare,
      label: "WhatsApp",
    },
    {
      id: "footer-ig",
      href: "https://instagram.com/shripaad_17",
      icon: Instagram,
      label: "Instagram",
    },
    {
      id: "footer-mail",
      href: "mailto:shripaad17@gmail.com",
      icon: Mail,
      label: "Email",
    },
    {
      id: "footer-li",
      href: "https://www.linkedin.com/in/shripaad-koduri/",
      icon: Linkedin,
      label: "LinkedIn",
    },
  ];

  return (
    <footer 
      id="app-footer" 
      className="bg-[#03020D] border-t border-white/5 py-12 px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and title aligned with the Navbar */}
        <div className="flex items-center gap-2 justify-center md:justify-start text-center md:text-left">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#5F62FF] text-white select-none shadow-[0_0_12px_rgba(95,98,255,0.3)]">
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <div className="text-left">
            <span className="font-sans text-sm font-semibold text-white tracking-widest uppercase block leading-none select-none">
              KODURI SHRIPAAD
            </span>
            <span className="font-mono text-[9px] font-bold text-zinc-500 block tracking-wider mt-1 uppercase leading-none select-none">
              Automation Consulting
            </span>
          </div>
        </div>

        {/* Small Copyright label */}
        <p className="font-mono text-[10px] text-zinc-500 font-semibold tracking-wide order-last md:order-none text-center md:text-left max-w-sm md:max-w-none px-4 md:px-0">
          © {currentYear} • Koduri Shripaad • Built with extreme precision. All Rights Reserved.
        </p>

        {/* Small Icon Bar */}
        <div className="flex items-center gap-2">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.id}
                id={social.id}
                href={social.href}
                target="_blank"
                referrerPolicy="no-referrer"
                className="h-8 w-8 rounded-lg flex items-center justify-center text-zinc-400 hover:bg-white/5 hover:text-white transition-colors border border-transparent hover:border-white/10"
                aria-label={social.label}
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

      </div>
    </footer>
  );
}
