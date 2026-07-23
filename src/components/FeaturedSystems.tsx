import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import SplitText from "./SplitText";
import { Check, Cpu, Sparkles, Play, ArrowUpRight } from "lucide-react";
import { ProjectDetail } from "./ProjectDemoModal";

const INVOICE_SLIDES = [
  "/images/invoice-first-slide.png",
  "/images/invoice-ag.jpg",
  "/images/invoice-air.jpg",
  "/images/invoice-gen.jpg",
  "/images/invoice-mail.jpg",
];

const WHATSAPP_SLIDES = [
  "/images/whatsapp-first-slide.png",
  "/images/main-workflow.jpeg",
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/5.jpeg",
  "/images/6.jpeg",
];

const LEAD_SLIDES = [
  "/images/lead-first-slide.png",
  "/images/1780044074920.jpg",
  "/images/1780044076644.jpg",
  "/images/Screenshot 2026-05-29 000311.png",
];

const VOICE_SLIDES = [
  "/images/voice-first-slide.png",
  "/images/Screenshot 2026-07-23 101432.png",
  "/images/Screenshot 2026-07-23 101420.png",
  "/images/voice agent.jpg",
];

// Count Up Number Helper Component
function CountUpNumber({
  value,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeProgress * value;

      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}

// Count Up Triple Helper Component for 24/7/365
function CountUpTriple({ duration = 2 }: { duration?: number }) {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [val3, setVal3] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setVal1(Math.round(easeProgress * 24));
      setVal2(Math.round(easeProgress * 7));
      setVal3(Math.round(easeProgress * 365));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, duration]);

  return (
    <span ref={ref}>
      {val1}
      <span className="text-zinc-500 font-normal">/</span>
      {val2}
      <span className="text-zinc-500 font-normal">/</span>
      {val3}
    </span>
  );
}

// Helper to turn SVG raw string into safe Data URI
const svgToDataUrl = (svgString: string) => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;

// Vector Screen 1: Voice Receptionist (Hero Graphic)
const VOICE_AGENT_SVG = svgToDataUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%" style="background-color:#050412; font-family:'Inter', system-ui, sans-serif;">
  <g stroke="#ffffff" stroke-width="1" opacity="0.03">
    <path d="M0,50 H800 M0,100 H800 M0,150 H800 M0,200 H800 M0,250 H800 M0,300 H800 M0,350 H800 M0,400 H800 M0,450 H800" />
    <path d="M100,0 V500 M200,0 V500 M300,0 V500 M400,0 V500 M500,0 V500 M600,0 V500 M700,0 V500" />
  </g>
  <!-- Left Box: Voice Interface -->
  <rect x="25" y="25" width="350" height="450" rx="14" fill="#0A0920" stroke="#1E1C44" stroke-width="1" />
  <rect x="260" y="45" width="95" height="22" rx="11" fill="#10B981" fill-opacity="0.15" stroke="#10B981" stroke-opacity="0.3" />
  <circle cx="274" cy="56" r="4" fill="#10B981" />
  <text x="284" y="60" fill="#10B981" font-size="9" font-weight="bold" letter-spacing="0.5">ACTIVE 24/7</text>
  <text x="45" y="60" fill="#8C8EFF" font-size="11" font-weight="800" letter-spacing="1">AI VOICE INTERFACE</text>
  
  <circle cx="200" cy="200" r="80" fill="none" stroke="#1E1C44" stroke-width="2" />
  <circle cx="200" cy="200" r="50" fill="none" stroke="#5F62FF" stroke-opacity="0.3" stroke-width="1.5" />
  <path d="M 110,200 Q 135,130 165,200 T 215,200 T 255,200 T 290,200" fill="none" stroke="#5F62FF" stroke-width="3" stroke-linecap="round" />
  <circle cx="200" cy="200" r="22" fill="#5F62FF" />
  <path d="M 194,193 v 14 M 200,190 v 20 M 206,195 v 10" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" />
  
  <text x="200" y="320" fill="#94A3B8" font-size="10" font-weight="600" text-anchor="middle" letter-spacing="1">SESSION DURATION: 1m 42s</text>
  <text x="200" y="348" fill="#FFFFFF" font-size="16" font-weight="bold" text-anchor="middle">+1 (415) 555-0192</text>
  <text x="200" y="368" fill="#10B981" font-size="11" font-weight="600" text-anchor="middle">Inbound Call Connected...</text>

  <!-- Right Box: Transcript & Analytics -->
  <rect x="395" y="25" width="380" height="450" rx="14" fill="#0A0920" stroke="#1E1C44" stroke-width="1" />
  <text x="415" y="58" fill="#94A3B8" font-size="11" font-weight="800" letter-spacing="1">LIVE CONVERSATION TRANSCRIPT</text>
  
  <!-- Bubble 1 -->
  <rect x="415" y="80" width="340" height="60" rx="8" fill="#121032" stroke="#222055" stroke-width="1" />
  <text x="430" y="100" fill="#60A5FA" font-size="10" font-weight="bold">Caller [Inbound Customer]</text>
  <text x="430" y="122" fill="#E2E8F0" font-size="11">"Hi, I'd like to book an appointment for tomorrow afternoon."</text>

  <!-- Bubble 2 -->
  <rect x="415" y="150" width="340" height="60" rx="8" fill="#1B184B" stroke="#5F62FF" stroke-width="1" />
  <text x="430" y="170" fill="#8C8EFF" font-size="10" font-weight="bold">AI Virtual Receptionist</text>
  <text x="430" y="192" fill="#E2E8F0" font-size="11">"Certainly! I have 2:30 PM open. May I get your name?"</text>

  <!-- Analytics section -->
  <text x="415" y="250" fill="#94A3B8" font-size="11" font-weight="800" letter-spacing="1">VOICE PERFORMANCE ANALYTICS</text>
  <rect x="415" y="270" width="340" height="180" rx="8" fill="#121032" stroke="#222055" stroke-width="1" />
  
  <text x="430" y="298" fill="#94A3B8" font-size="11">First Contact Resolution Rate</text>
  <text x="730" y="298" fill="#10B981" font-size="12" font-weight="bold" text-anchor="end">92.6%</text>
  <rect x="430" y="310" width="300" height="6" rx="3" fill="#1E1C44" />
  <rect x="430" y="310" width="278" height="6" rx="3" fill="#10B981" />

  <text x="430" y="350" fill="#94A3B8" font-size="11">WhatsApp / GCal CRM Sync</text>
  <text x="730" y="350" fill="#5F62FF" font-size="12" font-weight="bold" text-anchor="end">Instant</text>

  <text x="430" y="400" fill="#94A3B8" font-size="11">Average Call Handle Duration</text>
  <text x="730" y="400" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="end">1m 15s</text>
</svg>`);

// Vector Screen 2: Lead Qualification
const CRM_PIPELINE_SVG = svgToDataUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%" style="background-color:#050412; font-family:'Inter', system-ui, sans-serif;">
  <rect x="15" y="15" width="770" height="420" rx="12" fill="#0A0920" stroke="#1E1C44" stroke-width="1" />
  <!-- Header -->
  <rect x="15" y="15" width="770" height="45" rx="12" fill="#110F33" />
  <circle cx="40" cy="38" r="5" fill="#10B981" />
  <text x="54" y="42" fill="#FFFFFF" font-size="11" font-weight="bold">LIVE LEAD DESK</text>
  <text x="320" y="42" fill="#8C8EFF" font-size="10">Auto Engaged: <tspan fill="#FFF" font-weight="bold">98.4%</tspan></text>
  <text x="560" y="42" fill="#8C8EFF" font-size="10">Avg Response: <tspan fill="#10B981" font-weight="bold">12s</tspan></text>
  <rect x="700" y="28" width="65" height="20" rx="4" fill="#10B981" fill-opacity="0.15" />
  <text x="732" y="42" fill="#10B981" font-size="9" font-weight="bold" text-anchor="middle">READY</text>

  <!-- 4 Columns -->
  <!-- Col 1 -->
  <rect x="30" y="75" width="170" height="345" rx="8" fill="#0E0C2A" stroke="#191742" stroke-width="1" />
  <text x="42" y="96" fill="#64748B" font-size="10" font-weight="800">INCOMING LEADS</text>
  <rect x="40" y="110" width="150" height="75" rx="6" fill="#15133E" stroke="#22205B" stroke-width="1" />
  <text x="50" y="130" fill="#FFFFFF" font-size="11" font-weight="bold">Marcus Chen</text>
  <text x="50" y="146" fill="#94A3B8" font-size="9">Web Form Inquiry</text>

  <!-- Col 2 -->
  <rect x="215" y="75" width="170" height="345" rx="8" fill="#0E0C2A" stroke="#191742" stroke-width="1" />
  <text x="227" y="96" fill="#5F62FF" font-size="10" font-weight="800">AI ENGAGEMENT</text>
  <rect x="225" y="110" width="150" height="75" rx="6" fill="#1B184D" stroke="#5F62FF" stroke-width="1" />
  <text x="235" y="130" fill="#FFFFFF" font-size="11" font-weight="bold">Derrick Watson</text>
  <text x="235" y="146" fill="#8C8EFF" font-size="9">Budget Qualified</text>

  <!-- Col 3 -->
  <rect x="400" y="75" width="170" height="345" rx="8" fill="#0E0C2A" stroke="#191742" stroke-width="1" />
  <text x="412" y="96" fill="#10B981" font-size="10" font-weight="800">QUALIFIED LEADS</text>
  <rect x="410" y="110" width="150" height="75" rx="6" fill="#15133E" stroke="#10B981" stroke-width="1" />
  <text x="420" y="130" fill="#FFFFFF" font-size="11" font-weight="bold">Alice Vance</text>
  <text x="420" y="146" fill="#10B981" font-size="9">Booked for 2:00 PM</text>

  <!-- Col 4 -->
  <rect x="585" y="75" width="170" height="345" rx="8" fill="#0E0C2A" stroke="#191742" stroke-width="1" />
  <text x="597" y="96" fill="#EC4899" font-size="10" font-weight="800">CRM SYNCED</text>
  <rect x="595" y="110" width="150" height="75" rx="6" fill="#15133E" stroke="#22205B" stroke-width="1" />
  <text x="605" y="130" fill="#FFFFFF" font-size="11" font-weight="bold">Elena Rostova</text>
  <text x="605" y="146" fill="#94A3B8" font-size="9">HubSpot Logged</text>
</svg>`);

// Vector Screen 3: WhatsApp Automation
const WHATSAPP_AUTOMATION_SVG = "/images/whatsapp-automation.png";

// Vector Screen 4: Invoice Software
const INVOICE_SOFTWARE_SVG = svgToDataUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%" style="background-color:#050412; font-family:'Inter', system-ui, sans-serif;">
  <rect x="15" y="15" width="770" height="420" rx="12" fill="#0A0920" stroke="#1E1C44" stroke-width="1" />
  
  <!-- Left Side Dashboard -->
  <rect x="35" y="35" width="270" height="380" rx="10" fill="#110F33" stroke="#222055" stroke-width="1" />
  <text x="55" y="65" fill="#94A3B8" font-size="10" font-weight="800" letter-spacing="1">BILLING DESK STATUS</text>
  
  <rect x="50" y="85" width="240" height="80" rx="8" fill="#181545" />
  <text x="65" y="110" fill="#94A3B8" font-size="10">Month-to-Date Billings</text>
  <text x="65" y="138" fill="#10B981" font-size="22" font-weight="bold">$34,500.00</text>

  <rect x="50" y="180" width="240" height="60" rx="8" fill="#181545" />
  <text x="65" y="202" fill="#94A3B8" font-size="10">Outstanding Invoices</text>
  <text x="65" y="224" fill="#3B82F6" font-size="14" font-weight="bold">0 Unpaid (Auto-Collected)</text>

  <!-- Right Side PDF Preview -->
  <g transform="translate(330, 35)">
    <rect width="425" height="380" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1" />
    <path d="M 0,0 L 425,0 L 425,75 Q 315,90 210,75 T 0,90 Z" fill="#0F52BA" />
    <text x="25" y="45" fill="#FFFFFF" font-size="20" font-weight="bold">INVOICE</text>
    <text x="350" y="35" fill="#E2E8F0" font-size="9">INV-2026-089</text>

    <text x="25" y="115" fill="#475569" font-size="9" font-weight="bold">Billed To:</text>
    <text x="25" y="130" fill="#0F172A" font-size="11" font-weight="bold">Apex Logistics Ltd.</text>

    <!-- Table -->
    <rect x="25" y="160" width="375" height="24" fill="#F1F5F9" />
    <text x="35" y="176" fill="#475569" font-size="9" font-weight="bold">Description</text>
    <text x="380" y="176" fill="#475569" font-size="9" font-weight="bold" text-anchor="end">Amount</text>

    <text x="35" y="205" fill="#1E293B" font-size="10">AI Invoice Reconciliation Workflow</text>
    <text x="380" y="205" fill="#1E293B" font-size="10" font-weight="bold" text-anchor="end">$4,200.00</text>

    <line x1="25" y1="310" x2="400" y2="310" stroke="#E2E8F0" stroke-width="1" />
    <text x="25" y="340" fill="#10B981" font-size="14" font-weight="bold">Thank You!</text>
  </g>
</svg>`);

interface FeaturedSystemsProps {
  onOpenDemoModal: (project: ProjectDetail) => void;
}

export default function FeaturedSystems({ onOpenDemoModal }: FeaturedSystemsProps) {
  const [invoiceSlideIndex, setInvoiceSlideIndex] = useState(0);
  const [whatsappSlideIndex, setWhatsappSlideIndex] = useState(0);
  const [leadSlideIndex, setLeadSlideIndex] = useState(0);
  const [voiceSlideIndex, setVoiceSlideIndex] = useState(0);
  const [invoiceHovered, setInvoiceHovered] = useState(false);
  const [whatsappHovered, setWhatsappHovered] = useState(false);
  const [leadHovered, setLeadHovered] = useState(false);
  const [voiceHovered, setVoiceHovered] = useState(false);

  useEffect(() => {
    if (!leadHovered) {
      setLeadSlideIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setLeadSlideIndex((current) => (current + 1) % LEAD_SLIDES.length);
    }, 1200);

    return () => clearInterval(interval);
  }, [leadHovered]);

  useEffect(() => {
    if (!whatsappHovered) {
      setWhatsappSlideIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setWhatsappSlideIndex((current) => (current + 1) % WHATSAPP_SLIDES.length);
    }, 1200);

    return () => clearInterval(interval);
  }, [whatsappHovered]);

  useEffect(() => {
    if (!invoiceHovered) {
      setInvoiceSlideIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setInvoiceSlideIndex((current) => (current + 1) % INVOICE_SLIDES.length);
    }, 1200);

    return () => clearInterval(interval);
  }, [invoiceHovered]);

  useEffect(() => {
    if (!voiceHovered) {
      setVoiceSlideIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setVoiceSlideIndex((current) => (current + 1) % VOICE_SLIDES.length);
    }, 1200);

    return () => clearInterval(interval);
  }, [voiceHovered]);

  const heroProject: ProjectDetail = {
    category: "AI VOICE AGENT",
    title: "AI Voice Receptionist System",
    problem: "Businesses lose up to 40% of inbound leads due to missed phone calls during peak hours or after business operation times.",
    solution: "An intelligent telephone representative that answers inquiries, qualifies potential prospects, and registers bookings with zero latency.",
    techStack: ["Vapi", "OpenAI", "Google Calendar"],
    businessImpact: "Result: 24/7 Customer Support",
    points: [
      "Handles infinite concurrent call queues with sub-second response lag",
      "Asks logical qualifier questions & updates CRM records instantly",
      "Secures customer consultation spots directly onto Google Calendar"
    ],
    image: VOICE_AGENT_SVG,
  };

  const gridProjects: ProjectDetail[] = [
    {
      category: "LEAD AUTOMATION",
      title: "Lead Qualification & Booking",
      problem: "Slow manual response times to web form inquiries result in lost sales prospects who move to faster competitors.",
      solution: "Intercept active leads, score intent, and lock scheduling immediately without human delay.",
      techStack: ["n8n", "OpenAI", "Google Sheets", "Gmail"],
      businessImpact: "+72% Response Speed",
      points: [
        "Responds to web inquiry forms in under 30 seconds",
        "Scores and registers lead intent instantly",
        "Books qualified discovery calls directly into sales workflows"
      ],
      image: CRM_PIPELINE_SVG,
    },
    {
      category: "WHATSAPP AUTOMATION",
      title: "WhatsApp Interactive Receptionist",
      problem: "High ad spend on Meta / WhatsApp click-to-chat ads wasted because sales teams take hours to respond to chat inquiries.",
      solution: "Nurture ad leads instantly inside the world's most popular messaging medium.",
      techStack: ["n8n", "WhatsApp", "OpenAI", "Google Sheets"],
      businessImpact: "3x Faster Follow-Ups",
      points: [
        "Sends immediate intelligent replies to click-to-chat ads",
        "Guides prospects through interactive qualification flows",
        "Pre-populates contact profiles into client CRM storage"
      ],
      image: WHATSAPP_AUTOMATION_SVG,
    },
    {
      category: "INVOICE AUTOMATION",
      title: "Automated Billing & Reconciliation",
      problem: "Finance and ops teams waste 15+ hours per week manually generating PDF invoices, emailing clients, and cross-checking bank payments.",
      solution: "Eliminate back-office friction by automating invoice dispatch, payment tracking, and reconciliation.",
      techStack: ["n8n", "Gmail", "Google Sheets"],
      businessImpact: "15 Hours Saved Weekly",
      points: [
        "Tracks contract signatures and payment triggers automatically",
        "Generates polished invoices and dispatches them instantly",
        "Reconciles bank payments with real-time status updates"
      ],
      image: INVOICE_SOFTWARE_SVG,
    },
  ];

  return (
    <section
      id="featured-systems"
      className="relative w-full overflow-hidden py-20 sm:py-28 bg-[#03020D] border-t border-b border-white/5"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 h-[600px] w-[800px] bg-gradient-to-tr from-violet-900/10 via-[#5F62FF]/10 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <SplitText
            text="My Recent Automation Systems"
            tag="h2"
            splitType="words"
            delay={35}
            duration={0.8}
            ease="power3.out"
            from={{ opacity: 0, y: 25 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
            className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white tracking-[-0.04em] font-sans leading-tight"
          />
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-body max-w-2xl mx-auto">
            Explore real-world automation systems that save time, reduce costs, and scale operations.
          </p>
          <div className="pt-4 flex justify-center">
            <a
              href="/project-showcase.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-full btn-premium-gradient shadow-lg hover:scale-[1.02] transition-transform"
            >
              <span>View My Work</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-[#080718]/80 border border-white/5 p-4 sm:p-6 transition-all duration-300 hover:border-[#5F62FF]/30"
          >
            <div className="text-2xl sm:text-3xl font-bold text-white font-sans tracking-tight">
              <CountUpNumber value={50} suffix="+ hrs" duration={2} />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1 font-sans">
              Saved Weekly
            </div>
            <div className="text-[11px] sm:text-xs text-zinc-500 mt-0.5 font-body">
              Per business workflow
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl bg-[#080718]/80 border border-white/5 p-4 sm:p-6 transition-all duration-300 hover:border-[#5F62FF]/30"
          >
            <div className="text-2xl sm:text-3xl font-bold text-white font-sans tracking-tight">
              <CountUpTriple duration={2} />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1 font-sans">
              Automated Operations
            </div>
            <div className="text-[11px] sm:text-xs text-zinc-500 mt-0.5 font-body">
              No offline hours
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl bg-[#080718]/80 border border-white/5 p-4 sm:p-6 transition-all duration-300 hover:border-[#5F62FF]/30"
          >
            <div className="text-2xl sm:text-3xl font-bold text-white font-sans tracking-tight">
              <CountUpNumber value={99.9} decimals={1} suffix="%" duration={2} />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1 font-sans">
              System Reliability
            </div>
            <div className="text-[11px] sm:text-xs text-zinc-500 mt-0.5 font-body">
              Zero missed triggers
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl bg-[#080718]/80 border border-white/5 p-4 sm:p-6 transition-all duration-300 hover:border-[#5F62FF]/30"
          >
            <div className="text-2xl sm:text-3xl font-bold text-white font-sans tracking-tight">
              <CountUpNumber value={5} suffix=" Core" duration={2} />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1 font-sans">
              SaaS Integrations
            </div>
            <div className="text-[11px] sm:text-xs text-zinc-500 mt-0.5 font-body">
              Unified workspace sync
            </div>
          </motion.div>
        </div>

        {/* 1. Top Main Hero Project Card (Matching Image 2 Top Section) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onMouseEnter={() => {
            setVoiceHovered(true);
            setVoiceSlideIndex((current) => (current + 1) % VOICE_SLIDES.length);
          }}
          onMouseLeave={() => setVoiceHovered(false)}
          onClick={() => window.open('/project-showcase.pdf', '_blank')}
          className="relative mb-8 rounded-3xl bg-[#080718]/90 border border-white/10 hover:border-[#5F62FF]/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(95,98,255,0.15)] transition-all duration-300 p-6 sm:p-10 overflow-hidden group cursor-pointer"
        >
          {/* Top Right "MOST REQUESTED" Badge */}
          <div className="absolute top-6 right-6 z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#5F62FF]/20 to-purple-500/20 border border-[#8C8EFF]/30 shadow-[0_0_15px_rgba(95,98,255,0.2)]">
              <Sparkles className="h-3 w-3 text-[#8C8EFF]" />
              <span className="font-mono text-[10px] font-bold text-white uppercase tracking-wider">
                MOST REQUESTED
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Category Tag */}
              <div className="font-mono text-xs font-bold tracking-widest text-[#8C8EFF] uppercase">
                {heroProject.category}
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-sans">
                {heroProject.title}
              </h3>

              {/* Subtitle / Description */}
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-body max-w-2xl">
                {heroProject.solution}
              </p>

              {/* Result Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-xs font-semibold shadow-[0_0_15px_rgba(16,185,129,0.12)]">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{heroProject.businessImpact}</span>
              </div>

              {/* Checkmark List */}
              <div className="space-y-2.5 pt-2">
                {heroProject.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-[#5F62FF]/15 border border-[#5F62FF]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-[#8C8EFF]" />
                    </div>
                    <span className="text-zinc-200 text-xs sm:text-sm font-body leading-snug">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom: POWERED BY Tech Pills & Action Button */}
              <div className="pt-6 border-t border-white/8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] text-zinc-500 font-bold uppercase tracking-wider mr-1">
                    POWERED BY:
                  </span>
                  {heroProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>

            {/* Right UI Preview Graphic (5 Cols) */}
            <div
              className="lg:col-span-5 relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[#050410] shadow-2xl aspect-[16/11]"
              onMouseEnter={() => {
                setVoiceHovered(true);
                setVoiceSlideIndex((current) => (current + 1) % VOICE_SLIDES.length);
              }}
              onMouseLeave={() => setVoiceHovered(false)}
            >
              <motion.img
                key={VOICE_SLIDES[voiceSlideIndex]}
                src={
                  heroProject.category === "AI VOICE AGENT"
                    ? VOICE_SLIDES[voiceSlideIndex]
                    : heroProject.image
                }
                alt={heroProject.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </motion.div>

        {/* 2. Bottom 3-Column Grid Cards (Matching Image 2 Bottom Row) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gridProjects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => {
                if (proj.category === "LEAD AUTOMATION") {
                  setLeadHovered(true);
                  setLeadSlideIndex((current) => (current + 1) % LEAD_SLIDES.length);
                }
                if (proj.category === "WHATSAPP AUTOMATION") {
                  setWhatsappHovered(true);
                  setWhatsappSlideIndex((current) => (current + 1) % WHATSAPP_SLIDES.length);
                }
                if (proj.category === "INVOICE AUTOMATION") {
                  setInvoiceHovered(true);
                  setInvoiceSlideIndex((current) => (current + 1) % INVOICE_SLIDES.length);
                }
              }}
              onMouseLeave={() => {
                if (proj.category === "LEAD AUTOMATION") setLeadHovered(false);
                if (proj.category === "WHATSAPP AUTOMATION") setWhatsappHovered(false);
                if (proj.category === "INVOICE AUTOMATION") setInvoiceHovered(false);
              }}
              onClick={() => window.open('/project-showcase.pdf', '_blank')}
              className="relative flex flex-col justify-between rounded-2xl bg-[#080718]/90 border border-white/10 hover:border-[#5F62FF]/40 shadow-xl hover:shadow-[0_0_30px_rgba(95,98,255,0.12)] transition-all duration-300 p-6 group overflow-hidden cursor-pointer"
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="font-mono text-[10px] font-bold tracking-widest text-[#8C8EFF] uppercase">
                  {proj.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white tracking-tight font-sans leading-snug group-hover:text-[#8C8EFF] transition-colors">
                  {proj.title}
                </h3>

                {/* Description Subtitle */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-body line-clamp-3">
                  {proj.solution}
                </p>

                {/* Metric Pill Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#5F62FF]/10 border border-[#5F62FF]/25 text-[#8C8EFF] font-mono text-xs font-bold shadow-[0_0_12px_rgba(95,98,255,0.1)]">
                  <span>{proj.businessImpact}</span>
                </div>

                {/* Checkmark List */}
                <div className="space-y-2 pt-1">
                  {proj.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5">
                      <div className="h-4 w-4 rounded-full bg-[#5F62FF]/15 border border-[#5F62FF]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-2.5 w-2.5 text-[#8C8EFF]" />
                      </div>
                      <span className="text-zinc-300 text-xs font-body leading-tight">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Embedded Graphic Image Frame */}
                <div className="mt-4 rounded-xl overflow-hidden border border-white/10 bg-[#050410] aspect-[16/10] relative">
                  <motion.img
                    key={
                      proj.category === "INVOICE AUTOMATION"
                        ? INVOICE_SLIDES[invoiceSlideIndex]
                        : proj.category === "WHATSAPP AUTOMATION"
                        ? WHATSAPP_SLIDES[whatsappSlideIndex]
                        : proj.category === "LEAD AUTOMATION"
                        ? LEAD_SLIDES[leadSlideIndex]
                        : proj.image
                    }
                    src={
                      proj.category === "INVOICE AUTOMATION"
                        ? INVOICE_SLIDES[invoiceSlideIndex]
                        : proj.category === "WHATSAPP AUTOMATION"
                        ? WHATSAPP_SLIDES[whatsappSlideIndex]
                        : proj.category === "LEAD AUTOMATION"
                        ? LEAD_SLIDES[leadSlideIndex]
                        : proj.image
                    }
                    alt={proj.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Bottom: BUILT WITH Tech Stack */}
              <div className="mt-6 pt-4 border-t border-white/8 flex items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-[9px] text-zinc-500 font-bold uppercase tracking-wider mr-1">
                    BUILT WITH:
                  </span>
                  {proj.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/8 text-[10px] font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => window.open('/project-showcase.pdf', '_blank')}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-[#5F62FF]/20 text-zinc-400 hover:text-white transition-all cursor-pointer shrink-0"
                  title="View Case Study"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
