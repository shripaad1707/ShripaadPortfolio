import { motion } from "motion/react";
import { 
  MessageSquare, 
  Instagram, 
  Mail, 
  Linkedin, 
  ArrowUpRight
} from "lucide-react";
import SplitText from "./SplitText";

interface ContactTile {
  id: number;
  platform: string;
  value: string;
  href: string;
  icon: any;
  colorClass: string;
  bgClass: string;
  borderClass: string;
}

export default function Contact() {
  const contactTiles: ContactTile[] = [
    {
      id: 1,
      platform: "WhatsApp",
      value: "+91 78931 55092",
      href: "https://wa.me/917893155092",
      icon: MessageSquare,
      colorClass: "text-[#10B981]",
      bgClass: "bg-[#10B981]/10",
      borderClass: "border-[#10B981]/20",
    },
    {
      id: 2,
      platform: "LinkedIn",
      value: "in/shripaad-koduri",
      href: "https://www.linkedin.com/in/shripaad-koduri/",
      icon: Linkedin,
      colorClass: "text-[#3B82F6]",
      bgClass: "bg-[#3B82F6]/10",
      borderClass: "border-[#3B82F6]/20",
    },
    {
      id: 3,
      platform: "Email",
      value: "shripaad17@gmail.com",
      href: "mailto:shripaad17@gmail.com",
      icon: Mail,
      colorClass: "text-[#FFD6C2]",
      bgClass: "bg-[#FFD6C2]/15",
      borderClass: "border-[#FFD6C2]/20",
    },
    {
      id: 4,
      platform: "Instagram",
      value: "@shripaad_17",
      href: "https://instagram.com/shripaad_17",
      icon: Instagram,
      colorClass: "text-[#8B5CF6]",
      bgClass: "bg-[#8B5CF6]/15",
      borderClass: "border-[#8B5CF6]/20",
    },
  ];

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden"
    >
      {/* Exquisite backdrop decorations - Premium dark theme gradients of cyber colors */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[#03020D]">
        <div className="h-[1px] w-full bg-white/5 absolute top-0" />
        
        {/* Glow center - Optimized blurs for mobile graphics performance */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-[#5F62FF] opacity-[0.14] blur-[60px] lg:blur-[150px] pointer-events-none" />
        <div className="absolute right-[5%] bottom-[-10%] w-[40%] h-[40%] rounded-full bg-[#8B5CF6] opacity-[0.10] blur-[50px] lg:blur-[130px] pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        {/* Main Section Header */}
        <div className="max-w-2xl mx-auto space-y-5 mb-16">
          <SplitText
            text="Let's Talk"
            tag="h2"
            splitType="words"
            delay={40}
            duration={0.9}
            ease="power3.out"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
            className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white tracking-[-0.04em] font-sans"
          />
          <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto leading-[1.7] font-body">
            Tell me what repetitive task is slowing down your business. <br className="hidden sm:inline" /> I'll help you explore whether it can be automated.
          </p>
        </div>

        {/* Compact quick-access contact directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
          {contactTiles.map((tile, idx) => {
            const Icon = tile.icon;

            return (
              <motion.a
                id={`contact-card-${tile.id}`}
                key={tile.id}
                href={tile.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="group relative block p-5 rounded-2xl bg-white/[0.02] border border-white/8 hover:border-[#5F62FF]/35 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(95,98,255,0.12)] select-none cursor-pointer overflow-hidden backdrop-blur-md"
              >
                <div className="flex items-center gap-4 justify-between h-full">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${tile.bgClass} border ${tile.borderClass} ${tile.colorClass} shadow-md group-hover:scale-105 transition-all duration-300 flex-shrink-0`}>
                      <Icon className="h-4.5 w-4.5 stroke-[2.2]" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-sans text-[10px] font-bold text-zinc-405 uppercase tracking-wide block">
                        {tile.platform}
                      </span>
                      <span className="font-sans font-medium text-[13px] sm:text-[14px] text-white block tracking-[-0.01em] mt-0.5 select-all overflow-hidden text-ellipsis whitespace-nowrap">
                        {tile.value}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-zinc-500 opacity-60 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

