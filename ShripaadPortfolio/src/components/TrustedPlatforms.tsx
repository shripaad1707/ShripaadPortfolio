import React from "react";
import LogoLoop, { LogoItem } from "./LogoLoop";

export default function TrustedPlatforms() {
  const platforms: LogoItem[] = [
    {
      node: (
        <div className="flex items-center gap-3 text-zinc-400 select-none">
          {/* n8n icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5.5 w-5.5 opacity-80"
          >
            <circle cx="12" cy="5" r="2.5" />
            <circle cx="6" cy="15" r="2.5" />
            <circle cx="18" cy="15" r="2.5" />
            <path d="M12 7.5v5M6 12.5h12" />
          </svg>
          <span className="font-sans text-[13px] font-bold tracking-widest uppercase">
            n8n
          </span>
        </div>
      ),
      title: "n8n",
    },
    {
      node: (
        <div className="flex items-center gap-3 text-zinc-400 select-none">
          {/* Airtable icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5.5 w-5.5 opacity-80"
          >
            <path d="M3 10V5a1 1 0 011-1h16a1 1 0 011 1v5M3 10l9 4.5 9-4.5M3 10v9a1 1 0 001 1h16a1 1 0 001-1v-9" />
            <path d="M12 14.5V20" />
          </svg>
          <span className="font-sans text-[13px] font-bold tracking-widest uppercase">
            Airtable
          </span>
        </div>
      ),
      title: "Airtable",
    },
    {
      node: (
        <div className="flex items-center gap-3 text-zinc-400 select-none">
          {/* OpenAI icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5.5 w-5.5 opacity-80"
          >
            <path d="M4.5 16.5c-1.5-1.5-1.5-4 0-5.5s4-1.5 5.5 0M19.5 7.5c1.5 1.5 1.5 4 0 5.5s-4 1.5-5.5 0" />
            <path d="M16.5 4.5c1.5-1.5 4-1.5 5.5 0s1.5 4 0 5.5" />
            <path d="M7.5 19.5c-1.5 1.5-4 1.5-5.5 0s-1.5-4 0-5.5" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0" />
            <path d="M12 3v6M12 15v6" />
          </svg>
          <span className="font-sans text-[13px] font-bold tracking-widest uppercase">
            OpenAI
          </span>
        </div>
      ),
      title: "OpenAI",
    },
    {
      node: (
        <div className="flex items-center gap-3 text-zinc-400 select-none">
          {/* Google Sheets icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5.5 w-5.5 opacity-80"
          >
            <rect x="4" y="3" width="16" height="18" rx="2" />
            <path d="M4 9h16M4 15h16M10 9v12" />
          </svg>
          <span className="font-sans text-[13px] font-bold tracking-widest uppercase">
            Google Sheets
          </span>
        </div>
      ),
      title: "Google Sheets",
    },
    {
      node: (
        <div className="flex items-center gap-3 text-zinc-400 select-none">
          {/* Gmail icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5.5 w-5.5 opacity-80"
          >
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M21 6l-9 6-9-6" />
          </svg>
          <span className="font-sans text-[13px] font-bold tracking-widest uppercase">
            Gmail
          </span>
        </div>
      ),
      title: "Gmail",
    },
    {
      node: (
        <div className="flex items-center gap-3 text-zinc-400 select-none">
          {/* WhatsApp icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5.5 w-5.5 opacity-80"
          >
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
          <span className="font-sans text-[13px] font-bold tracking-widest uppercase">
            WhatsApp
          </span>
        </div>
      ),
      title: "WhatsApp",
    },
    {
      node: (
        <div className="flex items-center gap-3 text-zinc-400 select-none">
          {/* Twilio icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5.5 w-5.5 opacity-80"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="9" cy="9" r="1" fill="currentColor" />
            <circle cx="15" cy="9" r="1" fill="currentColor" />
            <circle cx="9" cy="15" r="1" fill="currentColor" />
            <circle cx="15" cy="15" r="1" fill="currentColor" />
          </svg>
          <span className="font-sans text-[13px] font-bold tracking-widest uppercase">
            Twilio
          </span>
        </div>
      ),
      title: "Twilio",
    },
    {
      node: (
        <div className="flex items-center gap-3 text-zinc-400 select-none">
          {/* Calendly icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5.5 w-5.5 opacity-80"
          >
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <span className="font-sans text-[13px] font-bold tracking-widest uppercase">
            Calendly
          </span>
        </div>
      ),
      title: "Calendly",
    },
    {
      node: (
        <div className="flex items-center gap-3 text-zinc-400 select-none">
          {/* Notion icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5.5 w-5.5 opacity-80"
          >
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M8 8v8M16 8v8M8 8l8 8" />
          </svg>
          <span className="font-sans text-[13px] font-bold tracking-widest uppercase">
            Notion
          </span>
        </div>
      ),
      title: "Notion",
    },
    {
      node: (
        <div className="flex items-center gap-3 text-zinc-400 select-none">
          {/* Slack icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5.5 w-5.5 opacity-80"
          >
            <path d="M14.5 10c-.8 0-1.5-.7-1.5-1.5v-5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v5c0 .8-.7 1.5-1.5 1.5z" />
            <path d="M16 7c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5z" />
            <path d="M9.5 14c.8 0 1.5.7 1.5 1.5v5c0 .8-.7 1.5-1.5 1.5S8 21.3 8 20.5v-5c0-.8.7-1.5 1.5-1.5z" />
            <path d="M8 17c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z" />
          </svg>
          <span className="font-sans text-[13px] font-bold tracking-widest uppercase">
            Slack
          </span>
        </div>
      ),
      title: "Slack",
    },
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 select-none bg-[#03020D]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-[650px] mx-auto mb-12 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-[-0.03em] font-sans">
            Built Using Trusted Platforms
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-[1.6] font-body">
            I build automation systems using reliable platforms that businesses already use every day.
          </p>
        </div>

        {/* Logo Loop Track Wrapper */}
        <div className="w-full relative overflow-hidden flex items-center justify-center py-4">
          <LogoLoop
            logos={platforms}
            speed={40}
            direction="left"
            logoHeight={32}
            gap={48}
            fadeOut={true}
            hoverSpeed={20}
            scaleOnHover={false}
            fadeOutColor="#03020D"
            ariaLabel="Trusted technology partners and automation integration platforms"
          />
        </div>
      </div>
    </section>
  );
}
