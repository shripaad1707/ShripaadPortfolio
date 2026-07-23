import React from "react";
import LogoLoop, { LogoItem } from "./LogoLoop";
import {
  Mail,
  MessageCircle,
  PhoneCall,
  Calendar,
  FileText,
  Hash,
  Workflow,
  Table,
  FileSpreadsheet,
  Sparkles,
  Code2,
  Zap,
  Layers,
  Database,
  Server,
  Grid,
} from "lucide-react";

export default function TrustedPlatforms() {
  const platforms: LogoItem[] = [
    {
      node: (
        <div className="flex items-center gap-2.5 text-zinc-300 font-sans tracking-widest font-semibold uppercase text-xs sm:text-sm select-none hover:text-white transition-colors">
          <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>GMAIL</span>
        </div>
      ),
      title: "Gmail",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 text-zinc-300 font-sans tracking-widest font-semibold uppercase text-xs sm:text-sm select-none hover:text-white transition-colors">
          <MessageCircle className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>WHATSAPP</span>
        </div>
      ),
      title: "WhatsApp",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 text-zinc-300 font-sans tracking-widest font-semibold uppercase text-xs sm:text-sm select-none hover:text-white transition-colors">
          <Grid className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>TWILIO</span>
        </div>
      ),
      title: "Twilio",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 text-zinc-300 font-sans tracking-widest font-semibold uppercase text-xs sm:text-sm select-none hover:text-white transition-colors">
          <Calendar className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>CALENDLY</span>
        </div>
      ),
      title: "Calendly",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 text-zinc-300 font-sans tracking-widest font-semibold uppercase text-xs sm:text-sm select-none hover:text-white transition-colors">
          <FileText className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>NOTION</span>
        </div>
      ),
      title: "Notion",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 text-zinc-300 font-sans tracking-widest font-semibold uppercase text-xs sm:text-sm select-none hover:text-white transition-colors">
          <Hash className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>SLACK</span>
        </div>
      ),
      title: "Slack",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 text-zinc-300 font-sans tracking-widest font-semibold uppercase text-xs sm:text-sm select-none hover:text-white transition-colors">
          <Workflow className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>N8N</span>
        </div>
      ),
      title: "n8n",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 text-zinc-300 font-sans tracking-widest font-semibold uppercase text-xs sm:text-sm select-none hover:text-white transition-colors">
          <Table className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>AIRTABLE</span>
        </div>
      ),
      title: "Airtable",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 text-zinc-300 font-sans tracking-widest font-semibold uppercase text-xs sm:text-sm select-none hover:text-white transition-colors">
          <FileSpreadsheet className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>GOOGLE SHEETS</span>
        </div>
      ),
      title: "Google Sheets",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 text-zinc-300 font-sans tracking-widest font-semibold uppercase text-xs sm:text-sm select-none hover:text-white transition-colors">
          <Sparkles className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>OPENAI</span>
        </div>
      ),
      title: "OpenAI",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 text-zinc-300 font-sans tracking-widest font-semibold uppercase text-xs sm:text-sm select-none hover:text-white transition-colors">
          <Code2 className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>PYTHON</span>
        </div>
      ),
      title: "Python",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 text-zinc-300 font-sans tracking-widest font-semibold uppercase text-xs sm:text-sm select-none hover:text-white transition-colors">
          <Zap className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>ZAPIER</span>
        </div>
      ),
      title: "Zapier",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 text-zinc-300 font-sans tracking-widest font-semibold uppercase text-xs sm:text-sm select-none hover:text-white transition-colors">
          <Layers className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>MAKE</span>
        </div>
      ),
      title: "Make",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 text-zinc-300 font-sans tracking-widest font-semibold uppercase text-xs sm:text-sm select-none hover:text-white transition-colors">
          <Database className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>SUPABASE</span>
        </div>
      ),
      title: "Supabase",
    },
    {
      node: (
        <div className="flex items-center gap-2.5 text-zinc-300 font-sans tracking-widest font-semibold uppercase text-xs sm:text-sm select-none hover:text-white transition-colors">
          <Server className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>FASTAPI</span>
        </div>
      ),
      title: "FastAPI",
    },
  ];

  return (
    <section className="relative w-full bg-[#03020D] py-16 px-6 select-none overflow-hidden border-t border-b border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Header matching exact image text & hierarchy */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-sans">
            Built Using Trusted Platforms
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-body">
            I build automation systems using reliable platforms that businesses already use every day.
          </p>
        </div>

        {/* Horizontal Infinite Logo Loop Track */}
        <div className="w-full relative overflow-hidden flex items-center justify-center py-2">
          <LogoLoop
            logos={platforms}
            speed={35}
            direction="left"
            logoHeight={28}
            gap={52}
            fadeOut={true}
            hoverSpeed={15}
            scaleOnHover={false}
            fadeOutColor="#03020D"
            ariaLabel="Trusted platforms for AI automations and integrations"
          />
        </div>
      </div>
    </section>
  );
}

