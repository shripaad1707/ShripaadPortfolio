import SplitText from "./SplitText";

const INVOICE_SVG_DATA = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="100%" height="100%" style="background-color:%23ffffff; font-family:'Inter', system-ui, sans-serif;">
  <rect width="800" height="1000" fill="%23ffffff" />
  <path d="M 0,0 L 800,0 L 800,200 Q 600,260 400,200 T 0,260 Z" fill="url(%23blueGrad)" />
  <defs>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%230F52BA" />
      <stop offset="100%" stop-color="%23020056" />
    </linearGradient>
  </defs>
  <text x="60" y="130" fill="%23ffffff" font-size="52" font-weight="900" letter-spacing="2">INVOICE</text>
  <text x="740" y="120" fill="%23ffffff" font-size="18" font-weight="700" text-anchor="end" opacity="0.9">NO: INV-12345-1</text>
  <text x="80" y="360" fill="%231e293b" font-size="20" font-weight="bold">Bill To:</text>
  <text x="80" y="395" fill="%23475569" font-size="16">Estelle Darcy</text>
  <text x="80" y="425" fill="%23475569" font-size="16">+123-456-7890</text>
  <text x="80" y="455" fill="%23475569" font-size="16">123 Anywhere St., Any City</text>
  <text x="480" y="360" fill="%231e293b" font-size="20" font-weight="bold">From:</text>
  <text x="480" y="395" fill="%23475569" font-size="16">Samira Hadid</text>
  <text x="480" y="425" fill="%23475569" font-size="16">+123-456-7890</text>
  <text x="480" y="455" fill="%23475569" font-size="16">123 Anywhere St., Any City</text>
  <text x="80" y="540" fill="%23475569" font-size="16" font-weight="bold">Date: 26 June 2022</text>
  <rect x="80" y="590" width="640" height="45" fill="%230F52BA" rx="6" />
  <text x="100" y="618" fill="%23ffffff" font-size="15" font-weight="bold">Description</text>
  <text x="400" y="618" fill="%23ffffff" font-size="15" font-weight="bold" text-anchor="middle">Qty</text>
  <text x="520" y="618" fill="%23ffffff" font-size="15" font-weight="bold" text-anchor="middle">Price</text>
  <text x="680" y="618" fill="%23ffffff" font-size="15" font-weight="bold" text-anchor="middle">Total</text>
  <line x1="80" y1="675" x2="720" y2="675" stroke="%23e2e8f0" stroke-width="1.5" />
  <text x="100" y="710" fill="%23475569" font-size="15">Intelligent Automation Setup</text>
  <text x="400" y="710" fill="%23475569" font-size="15" text-anchor="middle">1</text>
  <text x="520" y="710" fill="%23475569" font-size="15" text-anchor="middle">$1,250.00</text>
  <text x="680" y="710" fill="%23475569" font-size="15" text-anchor="middle">$1,250.00</text>
  <line x1="80" y1="755" x2="720" y2="755" stroke="%23e2e8f0" stroke-width="1.5" />
  <text x="100" y="790" fill="%23475569" font-size="15">n8n Custom Workflow Integration</text>
  <text x="400" y="790" fill="%23475569" font-size="15" text-anchor="middle">1</text>
  <text x="520" y="790" fill="%23475569" font-size="15" text-anchor="middle">$1,750.00</text>
  <text x="680" y="790" fill="%23475569" font-size="15" text-anchor="middle">$1,750.00</text>
  <rect x="420" y="845" width="300" height="45" fill="%230F52BA" rx="6" />
  <text x="440" y="873" fill="%23ffffff" font-size="15" font-weight="bold">Sub Total / Total Due</text>
  <text x="700" y="873" fill="%23ffffff" font-size="15" font-weight="bold" text-anchor="end">$3,000.00</text>
  <text x="80" y="875" fill="%230F52BA" font-size="28" font-weight="bold">Thank You!</text>
</svg>`;

export default function Works() {
  const items = [
    {
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800&auto=format&fit=crop",
      text: "WhatsApp Automation",
    },
    {
      image: "https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=800&auto=format&fit=crop",
      text: "AI Voice Receptionist",
    },
    {
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop",
      text: "Appointment Booking Automation",
    },
    {
      image: INVOICE_SVG_DATA,
      text: "Invoice Automation System",
    },
    {
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=800&auto=format&fit=crop",
      text: "Email Lead Qualification System",
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      text: "CRM Automation",
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      text: "Lead Management Automation",
    },
    {
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=800&auto=format&fit=crop",
      text: "Instagram Automation",
    },
    {
      image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=800&auto=format&fit=crop",
      text: "Facebook Lead Automation",
    },
    {
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      text: "Web Scraping Automation",
    },
    {
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
      text: "Airtable Automation",
    },
    {
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
      text: "Google Sheets Automation",
    },
  ];

  return (
    <section
      id="works"
      className="relative w-full overflow-hidden mt-20 sm:mt-[140px] mb-16 sm:mb-[120px]"
    >
      {/* Background Decorative Glow to Match Theme - Optimized blurs for mobile rendering performance */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 -z-10 h-[350px] w-full max-w-4xl mx-auto bg-gradient-to-r from-violet-600/10 via-[#5F62FF]/15 to-purple-600/10 blur-[50px] lg:blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <SplitText
            text="Automations I Build For Businesses"
            tag="h2"
            splitType="words"
            delay={40}
            duration={0.9}
            ease="power3.out"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
            className="text-2xl sm:text-4xl lg:text-[44px] font-semibold text-white tracking-[-0.04em] font-sans leading-tight"
          />
          <p className="text-zinc-400 text-xs sm:text-base leading-relaxed font-body">
            From AI voice agents and WhatsApp automation to invoicing, lead management, CRM systems, and appointment booking.
          </p>
        </div>
      </div>

      {/* Responsive Continuous Horizontal Marquee Layer */}
      <div className="w-full relative-z-20 select-none custom-marquee-container overflow-hidden">
        {/* Scrolling list containing duplicating sequences for continuous loop */}
        <div className="custom-marquee-track py-4">
          {/* Loop Set 1 */}
          {items.map((item, idx) => (
            <div
              key={`row1-${idx}`}
              className="w-[160px] sm:w-[220px] lg:w-[310px] flex-shrink-0 px-1.5 sm:px-3 flex flex-col group pointer-events-auto cursor-pointer"
            >
              <div className="premium-card overflow-hidden border border-zinc-800/80 bg-zinc-900/20 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:border-[#5F62FF]/40 hover:bg-zinc-900/50 hover:shadow-[0_12px_40px_rgba(95,98,255,0.25)] shadow-[0_8px_40px_-5px_rgba(0,0,0,0.6)] flex flex-col h-full">
                {/* Image Aspect Box */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-zinc-800/50 bg-[#060515]">
                  {item.image.startsWith("data:image/svg+xml") ? (
                    <img
                      src={item.image}
                      alt={item.text}
                      className="w-full h-full object-contain p-2 sm:p-4 opacity-90 transition-all duration-500 group-hover:scale-102 group-hover:brightness-[1.08] group-hover:contrast-[103%] group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                      draggable={false}
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.text}
                      className="w-full h-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:brightness-[1.08] group-hover:contrast-[103%] group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                      draggable={false}
                    />
                  )}
                  {/* Bottom fade highlight */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03020D]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Automation Details below image */}
                <div className="p-3 sm:p-5 flex flex-col justify-between flex-grow">
                  <div className="space-y-1 sm:space-y-1.5">
                    <span className="text-[8px] sm:text-[9px] text-[#5F62FF] font-mono tracking-widest uppercase block font-semibold leading-none">
                      AUTOMATION SYSTEM
                    </span>
                    <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-white tracking-tight group-hover:text-[#5F62FF] transition-colors duration-250 font-sans leading-tight">
                      {item.text}
                    </h3>
                  </div>

                  {/* Active Indicator details inside cards */}
                  <div className="flex items-center gap-1.5 mt-2 sm:mt-4 text-[#5F62FF] opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-250">
                    <span className="text-[9px] sm:text-[11px] font-sans font-medium tracking-wide">System Active</span>
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Loop Set 2 (Identical for seamless rollover) */}
          {items.map((item, idx) => (
            <div
              key={`row2-${idx}`}
              className="w-[160px] sm:w-[220px] lg:w-[310px] flex-shrink-0 px-1.5 sm:px-3 flex flex-col group pointer-events-auto cursor-pointer"
            >
              <div className="premium-card overflow-hidden border border-zinc-800/80 bg-zinc-900/20 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:border-[#5F62FF]/40 hover:bg-zinc-900/50 hover:shadow-[0_12px_40px_rgba(95,98,255,0.25)] shadow-[0_8px_40px_-5px_rgba(0,0,0,0.6)] flex flex-col h-full">
                {/* Image Aspect Box */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-zinc-800/50 bg-[#060515]">
                  {item.image.startsWith("data:image/svg+xml") ? (
                    <img
                      src={item.image}
                      alt={item.text}
                      className="w-full h-full object-contain p-2 sm:p-4 opacity-90 transition-all duration-500 group-hover:scale-102 group-hover:brightness-[1.08] group-hover:contrast-[103%] group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                      draggable={false}
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.text}
                      className="w-full h-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:brightness-[1.08] group-hover:contrast-[103%] group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                      draggable={false}
                    />
                  )}
                  {/* Bottom fade highlight */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03020D]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Automation Details below image */}
                <div className="p-3 sm:p-5 flex flex-col justify-between flex-grow">
                  <div className="space-y-1 sm:space-y-1.5">
                    <span className="text-[8px] sm:text-[9px] text-[#5F62FF] font-mono tracking-widest uppercase block font-semibold leading-none">
                      AUTOMATION SYSTEM
                    </span>
                    <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-white tracking-tight group-hover:text-[#5F62FF] transition-colors duration-250 font-sans leading-tight">
                      {item.text}
                    </h3>
                  </div>

                  {/* Active Indicator details inside cards */}
                  <div className="flex items-center gap-1.5 mt-2 sm:mt-4 text-[#5F62FF] opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-250">
                    <span className="text-[9px] sm:text-[11px] font-sans font-medium tracking-wide">System Active</span>
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
