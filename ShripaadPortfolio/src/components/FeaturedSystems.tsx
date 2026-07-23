import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import SplitText from "./SplitText";
import { Check, Sparkles, Cpu } from "lucide-react";

interface CountUpProps {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

function CountUp({ end, duration = 1.5, decimals = 0, prefix = "", suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setCount(end);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            // Easing function: easeOutQuad
            const easeProgress = progress * (2 - progress);
            setCount(easeProgress * end);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
      observer.disconnect();
    };
  }, [end, duration]);

  return (
    <span ref={elementRef}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

// Vector Screen 1: Email Lead Qualification & Follow-Up System
const CRM_PIPELINE_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%" style="background-color:%23080718; font-family:'Inter', system-ui, sans-serif;">
  <g stroke="%23ffffff" stroke-width="1" opacity="0.02">
    <path d="M0,50 H800 M0,100 H800 M0,150 H800 M0,200 H800 M0,250 H800 M0,300 H800 M0,350 H800 M0,400 H800 M0,450 H800" />
    <path d="M100,0 V500 M200,0 V500 M300,0 V500 M400,0 V500 M500,0 V500 M600,0 V500 M700,0 V500" />
  </g>
  
  <rect x="25" y="20" width="750" height="60" rx="10" fill="%2311102A" stroke="%2325244C" stroke-width="1" />
  <circle cx="50" cy="50" r="6" fill="%2310B981" />
  <text x="68" y="55" fill="%23FFFFFF" font-size="14" font-weight="600">LIVE LEAD DESK</text>
  
  <text x="320" y="55" fill="%238C8EFF" font-size="13" font-weight="500">Auto Engaged: <tspan fill="%23FFF" font-weight="700">98.4%</tspan></text>
  <text x="540" y="55" fill="%238C8EFF" font-size="13" font-weight="500">Avg Response: <tspan fill="%23FFF" font-weight="700">12s</tspan></text>
  <text x="730" y="55" fill="%2310B981" font-size="12" font-weight="bold" text-anchor="end">READY</text>
  
  <rect x="25" y="100" width="175" height="370" rx="8" fill="%230E0D25" stroke="%231F1D3D" stroke-width="1" />
  <text x="40" y="125" fill="%2394A3B8" font-size="11" font-weight="800" letter-spacing="1">INCOMING LEADS</text>
  <circle cx="178" cy="121" r="9" fill="%231E1C3F" />
  <text x="178" y="125" fill="%23FFF" font-size="10" font-weight="bold" text-anchor="middle">2</text>
  
  <rect x="35" y="145" width="155" height="85" rx="6" fill="%2314132F" stroke="%2322214E" stroke-width="1" />
  <text x="45" y="165" fill="%23FFF" font-size="11" font-weight="700">Marcus Chen</text>
  <text x="45" y="180" fill="%238C8EFF" font-size="9" font-weight="600">Real Estate Buyer</text>
  <rect x="45" y="195" width="75" height="18" rx="4" fill="%233B82F6" fill-opacity="0.2" />
  <text x="50" y="207" fill="%2360A5FA" font-size="8" font-weight="bold">WEB_INQUIRY</text>
  <text x="135" y="207" fill="%2394A3B8" font-size="9" text-anchor="middle">1m ago</text>

  <rect x="35" y="240" width="155" height="85" rx="6" fill="%2314132F" stroke="%2322214E" stroke-width="1" />
  <text x="45" y="260" fill="%23FFF" font-size="11" font-weight="700">Sarah Jenkins</text>
  <text x="45" y="275" fill="%238C8EFF" font-size="9" font-weight="600">Commercial Tenant</text>
  <rect x="45" y="290" width="70" height="18" rx="4" fill="%23EAB308" fill-opacity="0.15" />
  <text x="50" y="302" fill="%23FACC15" font-size="8" font-weight="bold">ZILLOW_API</text>
  <text x="135" y="302" fill="%2394A3B8" font-size="9" text-anchor="middle">5m ago</text>

  <rect x="215" y="100" width="175" height="370" rx="8" fill="%230E0D25" stroke="%231F1D3D" stroke-width="1" />
  <text x="230" y="125" fill="%235F62FF" font-size="11" font-weight="800" letter-spacing="1">AI ENGAGEMENT</text>
  <circle cx="368" cy="121" r="9" fill="%231E1C3F" />
  <text x="368" y="125" fill="%235F62FF" font-size="10" font-weight="bold" text-anchor="middle">1</text>
  
  <rect x="225" y="145" width="155" height="95" rx="6" fill="%2314132F" stroke="%235F62FF" stroke-width="1" />
  <text x="235" y="165" fill="%23FFF" font-size="11" font-weight="700">Derrick Watson</text>
  <text x="235" y="180" fill="%238C8EFF" font-size="9" font-weight="600">Budget: $1.2M</text>
  <rect x="235" y="195" width="115" height="18" rx="4" fill="%2310B981" fill-opacity="0.15" />
  <circle cx="242" cy="204" r="3" fill="%2310B981" />
  <text x="250" y="207" fill="%2334D399" font-size="8" font-weight="bold">AI CHAT ENGAGED</text>
  <text x="235" y="228" fill="%2394A3B8" font-size="8" font-style="italic">Asking timing requirements...</text>

  <rect x="405" y="100" width="175" height="370" rx="8" fill="%230E0D25" stroke="%231F1D3D" stroke-width="1" />
  <text x="420" y="125" fill="%2310B981" font-size="11" font-weight="800" letter-spacing="1">QUALIFIED LEADS</text>
  
  <rect x="415" y="145" width="155" height="95" rx="6" fill="%2314132F" stroke="%2310B981" stroke-width="1" />
  <text x="425" y="165" fill="%23FFF" font-size="11" font-weight="700">Alice Vance</text>
  <text x="425" y="180" fill="%238C8EFF" font-size="9" font-weight="600">Pre-approved: Yes</text>
  <rect x="425" y="195" width="105" height="18" rx="4" fill="%2310B981" fill-opacity="0.2" />
  <text x="430" y="207" fill="%2334D399" font-size="8" font-weight="bold">READY FOR CALENDAR</text>
  <text x="425" y="228" fill="%23F59E0B" font-size="9" font-weight="700">★ Hot Opportunity</text>

  <rect x="595" y="100" width="175" height="370" rx="8" fill="%230E0D25" stroke="%231F1D3D" stroke-width="1" />
  <text x="610" y="125" fill="%23EC4899" font-size="11" font-weight="800" letter-spacing="1">CRM SYNCED</text>
  
  <rect x="605" y="145" width="155" height="85" rx="6" fill="%2314132F" stroke="%2322214E" stroke-width="1" />
  <text x="615" y="165" fill="%23FFF" font-size="11" font-weight="700">Elena Rostova</text>
  <text x="615" y="180" fill="%238C8EFF" font-size="9" font-weight="600">Synced to HubSpot</text>
  <rect x="615" y="195" width="75" height="18" rx="4" fill="%23EC4899" fill-opacity="0.15" />
  <text x="620" y="207" fill="%23F472B6" font-size="8" font-weight="bold">COMPLETED</text>
  <text x="705" y="207" fill="%2394A3B8" font-size="9" text-anchor="middle">12m ago</text>
</svg>`;

// Vector Screen 2: AI Voice Receptionist System
const VOICE_AGENT_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%" style="background-color:%23080718; font-family:'Inter', system-ui, sans-serif;">
  <g stroke="%23ffffff" stroke-width="1" opacity="0.02">
    <path d="M0,50 H800 M0,100 H800 M0,150 H800 M0,200 H800 M0,250 H800 M0,300 H800 M0,350 H800 M0,400 H800 M0,450 H800" />
    <path d="M100,0 V500 M200,0 V500 M300,0 V500 M400,0 V500 M500,0 V500 M600,0 V500 M700,0 V500" />
  </g>
  
  <rect x="25" y="25" width="345" height="450" rx="12" fill="%230E0D25" stroke="%231F1D3D" stroke-width="1" />
  <text x="45" y="55" fill="%23FFF" font-size="14" font-weight="700">AI VOICE INTERFACE</text>
  <rect x="280" y="40" width="70" height="20" rx="10" fill="%2310B981" fill-opacity="0.15" />
  <circle cx="290" cy="50" r="3" fill="%2310B981" />
  <text x="298" y="54" fill="%2334D399" font-size="9" font-weight="bold">ACTIVE 24/7</text>
  
  <circle cx="197" cy="210" r="85" fill="none" stroke="%2325244C" stroke-width="2" />
  <circle cx="197" cy="210" r="65" fill="none" stroke="%235F62FF" stroke-width="1" stroke-dasharray="4 6" opacity="0.6" />
  <path d="M 100,210 Q 125,110 150,210 T 200,210 T 250,210 T 300,210" fill="none" stroke="%235F62FF" stroke-width="3" opacity="0.8" />
  <path d="M 110,210 Q 140,270 170,210 T 230,210 T 290,210" fill="none" stroke="%23EC4899" stroke-width="2" opacity="0.5" />
  <circle cx="197" cy="210" r="24" fill="%235F62FF" />
  <path d="M 191,202 L 191,218 M 197,198 L 197,222 M 203,202 L 203,218" stroke="%23FFF" stroke-width="3" stroke-linecap="round" />
  
  <text x="197" y="340" fill="%2394A3B8" font-size="11" font-weight="600" text-anchor="middle">SESSION DURATION: 1m 42s</text>
  <text x="197" y="365" fill="%23FFF" font-size="14" font-weight="bold" text-anchor="middle">+1 (415) 555-0192</text>
  <text x="197" y="385" fill="%238C8EFF" font-size="11" text-anchor="middle">Incoming Call Connected...</text>

  <rect x="390" y="25" width="385" height="450" rx="12" fill="%230E0D25" stroke="%231F1D3D" stroke-width="1" />
  <text x="410" y="55" fill="%2394A3B8" font-size="11" font-weight="800" letter-spacing="1">LIVE CONVERSATION TRANSCRIPT</text>
  
  <path d="M 410,85 h 320 rx 6 ry 6 v 55 rx -6 ry -6 h -320 rx -6 ry -6 v -55 rx 6 ry 6 Z" fill="%2314132F" stroke="%2322214E" stroke-width="1" />
  <text x="420" y="103" fill="%238C8EFF" font-size="10" font-weight="bold">Caller [Inbound Customer]</text>
  <text x="420" y="118" fill="%23FFF" font-size="11">"Hi, I'd like to book an appointment</text>
  <text x="420" y="133" fill="%23FFF" font-size="11">for tomorrow afternoon."</text>
  
  <path d="M 440,155 h 310 rx 6 ry 6 v 55 rx -6 ry -6 h -310 rx -6 ry -6 v -55 rx 6 ry 6 Z" fill="%231B1944" stroke="%235F62FF" stroke-width="1" />
  <text x="450" y="173" fill="%238C8EFF" font-size="10" font-weight="bold">AI Virtual Receptionist</text>
  <text x="450" y="188" fill="%23FFF" font-size="11">"Certainly! I have 3:30 PM open.</text>
  <text x="450" y="203" fill="%23FFF" font-size="11">May I get your name?"</text>

  <rect x="410" y="235" width="345" height="215" rx="8" fill="%2311102A" stroke="%2325244C" stroke-width="1" />
  <text x="425" y="260" fill="%23FFF" font-size="13" font-weight="700">VOICE PERFORMANCE ANALYTICS</text>
  
  <text x="425" y="295" fill="%2394A3B8" font-size="11">First Contact Resolution Rate</text>
  <text x="740" y="295" fill="%2310B981" font-size="12" font-weight="bold" text-anchor="end">92.6%</text>
  <rect x="425" y="305" width="315" height="6" rx="3" fill="%231E1C3F" />
  <rect x="425" y="305" width="291" height="6" rx="3" fill="%2310B981" />
  
  <text x="425" y="345" fill="%2394A3B8" font-size="11">WhatsApp / GCal CRM Sync</text>
  <text x="740" y="345" fill="%235F62FF" font-size="12" font-weight="bold" text-anchor="end">Instant</text>
  
  <text x="425" y="380" fill="%2394A3B8" font-size="11">Average Call Handler Duration</text>
  <text x="740" y="380" fill="%23FFF" font-size="12" font-weight="bold" text-anchor="end">1m 15s</text>
</svg>`;

// Vector Screen 3: Invoice Automation System
const INVOICE_SOFTWARE_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%" style="background-color:%23080718; font-family:'Inter', system-ui, sans-serif;">
  <g stroke="%23ffffff" stroke-width="1" opacity="0.02">
    <path d="M0,50 H800 M0,100 H800 M0,150 H800 M0,200 H800 M0,250 H800 M0,300 H800 M0,350 H800 M0,400 H800 M0,450 H800" />
    <path d="M100,0 V500 M200,0 V500 M300,0 V500 M400,0 V500 M500,0 V500 M600,0 V500 M700,0 V500" />
  </g>
  
  <rect x="25" y="25" width="295" height="450" rx="12" fill="%230E0D25" stroke="%231F1D3D" stroke-width="1" />
  <text x="45" y="55" fill="%23FFF" font-size="14" font-weight="700">BILLING DESK STATUS</text>
  
  <rect x="40" y="85" width="265" height="75" rx="8" fill="%2314132F" stroke="%2322214E" stroke-width="1" />
  <text x="40" y="80" fill="%235F62FF" font-size="8" font-weight="bold">ENGINE STATUS: ACTIVE</text>
  <text x="50" y="110" fill="%23FFF" font-size="12" font-weight="700">Month-to-Date Billings</text>
  <text x="50" y="132" fill="%2310B981" font-size="20" font-weight="950">$34,500.00</text>
  <text x="285" y="110" fill="%2310B981" font-size="10" font-weight="bold" text-anchor="end">↑ 14.5%</text>

  <rect x="40" y="175" width="265" height="150" rx="8" fill="%2311102A" stroke="%231F1D3D" stroke-width="1" />
  <text x="50" y="200" fill="%2394A3B8" font-size="11" font-weight="700">ENGINE EVENT TRACKER</text>
  
  <text x="50" y="230" fill="%23F59E0B" font-size="10" font-weight="bold">● SCHEDULED RUN</text>
  <text x="50" y="245" fill="%238C8EFF" font-size="11">n8n: Check pending contracts</text>
  
  <text x="50" y="280" fill="%2310B981" font-size="10" font-weight="bold">✔ CLIENT_RECURRING</text>
  <text x="50" y="295" fill="%23EEF2F6" font-size="11">Gmail: INV-12345-1 auto generated</text>
  <circle cx="280" cy="285" r="5" fill="%2310B981" />

  <rect x="40" y="340" width="265" height="115" rx="8" fill="%2314132F" stroke="%2322214E" stroke-width="1" />
  <text x="55" y="365" fill="%23FFF" font-size="12" font-weight="bold">Outstanding invoices</text>
  <text x="55" y="385" fill="%23F43F5E" font-size="11" font-style="italic">0 Delayed Invoices</text>
  <text x="55" y="415" fill="%2394A3B8" font-size="11">All clients auto-billed on 1st</text>
  
  <g transform="translate(345, 25)">
    <rect width="430" height="450" rx="12" fill="%23FFFFFF" stroke="%23CBD5E1" stroke-width="1" />
    
    <path d="M 0,0 L 430,0 L 430,90 Q 320,110 215,90 T 0,110 Z" fill="%230F52BA" />
    <text x="25" y="55" fill="%23FFFFFF" font-size="24" font-weight="bold" letter-spacing="1">INVOICE</text>
    <text x="405" y="50" fill="%23FFFFFF" font-size="10" text-anchor="end">NO: INV-12345-1</text>
    
    <text x="25" y="140" fill="%231E293B" font-size="11" font-weight="bold">Bill To:</text>
    <text x="25" y="155" fill="%23475569" font-size="10">Estelle Darcy</text>
    <text x="25" y="170" fill="%23475569" font-size="10">123 Anywhere St., Any City</text>
    
    <text x="250" y="140" fill="%231E293B" font-size="11" font-weight="bold">From:</text>
    <text x="250" y="155" fill="%23475569" font-size="10">Samira Hadid</text>
    <text x="250" y="170" fill="%23475569" font-size="10">123 Anywhere St., Any City</text>
    
    <text x="25" y="210" fill="%23475569" font-size="10" font-weight="bold">Date: 26 June 2022</text>
    
    <rect x="25" y="230" width="380" height="25" fill="%230F52BA" rx="3" />
    <text x="35" y="246" fill="%23FFFFFF" font-size="9" font-weight="bold">Description</text>
    <text x="220" y="246" fill="%23FFFFFF" font-size="9" font-weight="bold" text-anchor="middle">Qty</text>
    <text x="280" y="246" fill="%23FFFFFF" font-size="9" font-weight="bold" text-anchor="middle">Price</text>
    <text x="385" y="246" fill="%23FFFFFF" font-size="9" font-weight="bold" text-anchor="middle">Total</text>
    
    <text x="35" y="280" fill="%23475569" font-size="9" font-weight="500">Intelligent Automation Setup</text>
    <text x="220" y="280" fill="%23475569" font-size="9" text-anchor="middle">1</text>
    <text x="280" y="280" fill="%23475569" font-size="9" text-anchor="middle">$1,250.00</text>
    <text x="385" y="280" fill="%23475569" font-size="9" text-anchor="middle">$1,250.00</text>
    <line x1="25" y1="295" x2="405" y2="295" stroke="%23E2E8F0" stroke-width="1" />
    
    <text x="35" y="320" fill="%23475569" font-size="9" font-weight="500">n8n Custom integration workflow</text>
    <text x="220" y="320" fill="%23475569" font-size="9" text-anchor="middle">1</text>
    <text x="280" y="320" fill="%23475569" font-size="9" text-anchor="middle">$1,750.00</text>
    <text x="385" y="320" fill="%23475569" font-size="9" text-anchor="middle">$1,750.00</text>
    <line x1="25" y1="335" x2="405" y2="335" stroke="%23E2E8F0" stroke-width="1" />
    
    <rect x="250" y="355" width="155" height="30" fill="%230F52BA" rx="3" />
    <text x="260" y="374" fill="%23FFFFFF" font-size="10" font-weight="bold">Total Due</text>
    <text x="395" y="374" fill="%23FFFFFF" font-size="10" font-weight="bold" text-anchor="end">$3,000.00</text>
    
    <text x="25" y="420" fill="%230F52BA" font-size="16" font-weight="bold">Thank You!</text>
  </g>
</svg>`;

// Vector Screen 4: WhatsApp Automation System For Businesses
const WHATSAPP_AUTOMATION_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%" style="background-color:%23080718; font-family:'Inter', system-ui, sans-serif;">
  <g stroke="%23ffffff" stroke-width="1" opacity="0.02">
    <path d="M0,50 H800 M0,100 H800 M0,150 H800 M0,200 H800 M0,250 H800 M0,300 H800 M0,350 H800 M0,400 H800 M0,450 H800" />
    <path d="M100,0 V500 M200,0 V500 M300,0 V500 M400,0 V500 M500,0 V500 M600,0 V500 M700,0 V500" />
  </g>
  
  <rect x="25" y="25" width="275" height="450" rx="12" fill="%230E0D25" stroke="%231F1D3D" stroke-width="1" />
  <text x="45" y="55" fill="%23FFF" font-size="14" font-weight="700">WHATSAPP ACTIVE RUNS</text>
  
  <rect x="35" y="80" width="255" height="60" rx="8" fill="%2314132F" stroke="%2310B981" stroke-width="1" />
  <circle cx="65" cy="110" r="16" fill="%23128C7E" />
  <text x="65" y="114" fill="%23FFF" font-size="14" font-weight="950" text-anchor="middle">W</text>
  <text x="95" y="105" fill="%23FFF" font-size="11" font-weight="bold">Global Group Logistics</text>
  <text x="95" y="122" fill="%2310B981" font-size="10" font-weight="bold">ACTIVE CHATFLOW</text>
  <circle cx="265" cy="110" r="5" fill="%2310B981" />

  <rect x="35" y="150" width="255" height="60" rx="8" fill="%2314132F" stroke="%2322214E" stroke-width="1" />
  <circle cx="65" cy="180" r="16" fill="%233B82F6" />
  <text x="65" y="184" fill="%23FFF" font-size="14" font-weight="950" text-anchor="middle">J</text>
  <text x="95" y="175" fill="%23FFF" font-size="11" font-weight="bold">James Sterling</text>
  <text x="95" y="192" fill="%238C8EFF" font-size="10">Session Standby</text>
  
  <rect x="35" y="235" width="255" height="215" rx="8" fill="%2311102A" stroke="%2325244C" stroke-width="1" />
  <text x="45" y="260" fill="%2394A3B8" font-size="10" font-weight="800" letter-spacing="0.5">MESSAGING ENGINE METRICS</text>
  
  <text x="45" y="295" fill="%23FFF" font-size="11">Total Automated Conversations</text>
  <text x="45" y="315" fill="%2310B981" font-size="15" font-weight="bold">12,480 sessions</text>
  
  <text x="45" y="350" fill="%23FFF" font-size="11">Chatbot Click-Through-Rate</text>
  <text x="45" y="370" fill="%235F62FF" font-size="15" font-weight="bold">42.8% conversion</text>

  <rect x="45" y="400" width="235" height="35" rx="4" fill="%2310B981" fill-opacity="0.1" stroke="%2310B981" stroke-opacity="0.2" />
  <text x="55" y="421" fill="%2334D399" font-size="9" font-weight="bold">✔ WhatsApp Cloud API Active</text>

  <rect x="315" y="25" width="460" height="450" rx="12" fill="%23050E0C" stroke="%231F3D2A" stroke-width="1" />
  
  <rect x="315" y="25" width="460" height="50" rx="12" fill="%23075E54" />
  <circle cx="345" cy="50" r="14" fill="%23128C7E" />
  <text x="345" y="54" fill="%23FFF" font-size="12" font-weight="bold" text-anchor="middle">WA</text>
  <text x="375" y="52" fill="%23FFF" font-size="12" font-weight="bold">Automated WhatsApp Receptionist</text>
  <text x="375" y="66" fill="%2334D399" font-size="9" font-weight="600">Online &amp; Instant</text>

  <path d="M 335,100 h 330 rx 6 ry 6 v 58 rx -6 ry -6 h -330 rx -6 ry -6 v -58 rx 6 ry 6 Z" fill="%23262D31" />
  <text x="345" y="118" fill="%23ECEFF1" font-size="11">"Hi, I saw your ad. Are you guys currently</text>
  <text x="345" y="133" fill="%23ECEFF1" font-size="11">available for real estate booking?"</text>
  <text x="655" y="150" fill="%2390A4AE" font-size="8" text-anchor="end">14:02</text>

  <path d="M 400,170 h 350 rx 6 ry 6 v 98 rx -6 ry -6 h -350 rx -6 ry -6 v -98 rx 6 ry 6 Z" fill="%23056162" />
  <text x="410" y="188" fill="%23FFF" font-size="11" font-weight="600">Smart Automation Bot</text>
  <text x="410" y="204" fill="%23E0F2F1" font-size="11">"Hi there! Yes we are! 📅 Here are available"</text>
  <text x="410" y="219" fill="%23E0F2F1" font-size="11">"consultation spots today: 1. 2:00 PM | 2. 4:30 PM"</text>
  <text x="740" y="258" fill="%2390A4AE" font-size="8" text-anchor="end">14:02 - Auto Response</text>

  <path d="M 335,282 h 65 rx 6 ry 6 v 35 rx -6 ry -6 h -65 rx -6 ry -6 v -35 rx 6 ry 6 Z" fill="%23262D31" />
  <text x="345" y="303" fill="%23ECEFF1" font-size="11">"1"</text>
  <text x="390" y="309" fill="%2390A4AE" font-size="8" text-anchor="end">14:03</text>

  <path d="M 400,330 h 350 rx 6 ry 6 v 95 rx -6 ry -6 h -350 rx -6 ry -6 v -95 rx 6 ry 6 Z" fill="%23056162" />
  <text x="410" y="348" fill="%23FFF" font-size="11" font-weight="600">Smart Automation Bot</text>
  <text x="410" y="364" fill="%23E0F2F1" font-size="11">"Fantastic! You're booked for 2:00 PM today!"</text>
  <text x="410" y="379" fill="%23E0F2F1" font-size="11">"I've sent confirmation to your email. Talk soon!"</text>
  <text x="740" y="415" fill="%2390A4AE" font-size="8" text-anchor="end">14:03 - Auto Response</text>
</svg>`;

interface AutomationCard {
  category: string;
  title: string;
  outcome: string;
  roiBadge: string;
  points: string[];
  image: string;
  tools: string[];
}

export default function FeaturedSystems() {
  const stats = [
    {
      renderValue: () => <CountUp end={50} suffix="+ hrs" />,
      label: "Saved Weekly",
      desc: "Per business workflow"
    },
    {
      renderValue: () => (
        <span className="inline-flex items-center">
          <CountUp end={24} />
          <span className="text-zinc-500 mx-0.5 font-light">/</span>
          <CountUp end={7} />
          <span className="text-zinc-500 mx-0.5 font-light">/</span>
          <CountUp end={365} />
        </span>
      ),
      label: "Automated Operations",
      desc: "No offline hours"
    },
    {
      renderValue: () => <CountUp end={99.9} decimals={1} suffix="%" />,
      label: "System Reliability",
      desc: "Zero missed triggers"
    },
    {
      renderValue: () => <CountUp end={5} suffix=" Core" />,
      label: "SaaS Integrations",
      desc: "Unified workspace sync"
    }
  ];

  const featuredVoiceSystem = {
    category: "AI Voice Agent",
    title: "AI Voice Receptionist System",
    outcome: "An intelligent telephone representative that answers inquiries, qualifies potential prospects, and registers bookings with zero latency.",
    roiBadge: "24/7 Customer Support",
    points: [
      "Handles infinite concurrent call queues with sub-second response lag",
      "Asks logical qualifier questions & updates CRM records instantly",
      "Secures customer consultation spots directly onto Google Calendar"
    ],
    image: VOICE_AGENT_SVG,
    tools: ["Vapi", "OpenAI", "Google Calendar"],
  };

  const secondarySystems: AutomationCard[] = [
    {
      category: "Lead Automation",
      title: "Lead Qualification & Booking",
      outcome: "Intercept active leads, analyze fit parameters, and lock scheduling immediately without human delay.",
      roiBadge: "+72% Response Speed",
      points: [
        "Responds to web inquiry forms in under 30 seconds",
        "Scores and registers demographic data instantly",
        "Books qualified discovery calls onto sales sheets"
      ],
      image: CRM_PIPELINE_SVG,
      tools: ["n8n", "OpenAI", "Google Sheets", "Gmail"]
    },
    {
      category: "WhatsApp Automation",
      title: "WhatsApp Interactive Receptionist",
      outcome: "Nurture cold advertisement leads directly inside the world's most popular messaging medium.",
      roiBadge: "3x Faster Follow-Ups",
      points: [
        "Initiates proactive instant replies to click-to-chat ads",
        "Guides users through interactive product discovery",
        "Pre-populates contact profiles in client HubSpot/ActiveCampaign"
      ],
      image: WHATSAPP_AUTOMATION_SVG,
      tools: ["n8n", "WhatsApp", "OpenAI", "Google Sheets"]
    },
    {
      category: "Invoice Automation",
      title: "Automated Billing & Reconciliation",
      outcome: "Eliminate administrative back-office friction by automating invoice dispatching and contract checking.",
      roiBadge: "15 Hours Saved Weekly",
      points: [
        "Tracks contract signatures or active payment triggers",
        "Generates elegant PDF ledgers & dispatches them automatically",
        "Reconciles inbound bank transfers with real-time feedback"
      ],
      image: INVOICE_SOFTWARE_SVG,
      tools: ["n8n", "Gmail", "Google Sheets"]
    }
  ];

  return (
    <section
      id="featured-systems"
      className="relative w-full overflow-hidden py-24 bg-[#03020D]/60 border-t border-b border-white/5"
    >
      {/* Inline styling to hide scrollbars cleanly on Chrome, Safari, and other engines */}
      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Luxury Ambient Lighting Layer */}
      <div className="absolute top-[10%] left-1/4 -z-10 h-[500px] w-[500px] bg-gradient-to-tr from-violet-900/10 via-[#5F62FF]/10 to-indigo-900/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-10 -z-10 h-[400px] w-[400px] bg-[#8B5CF6]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Headline & Pitch - Upgraded to outcome-driven SaaS agency style */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5F62FF]/10 border border-[#5F62FF]/20 shadow-[0_0_15px_rgba(95,98,255,0.1)]">
            <Cpu className="h-3.5 w-3.5 text-[#8C8EFF]" />
            <span className="font-mono text-[10px] font-bold text-[#8C8EFF] uppercase tracking-wider">
              Battle-Tested Systems
            </span>
          </div>
          <SplitText
            text="Automation Systems That Replace Repetitive Work"
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
            Real-world automation solutions built to save time, reduce costs, and scale operations.
          </p>
        </div>

        {/* Section Statistics Row ABOVE Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative p-5 rounded-2xl bg-[#080718]/40 border border-white/[0.04] backdrop-blur-md hover:border-white/[0.08] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] group overflow-hidden"
            >
              {/* Subtle accent hover indicator line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#5F62FF] to-[#8B5CF6] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-white via-white to-zinc-400 bg-clip-text text-transparent font-sans tracking-tight">
                {stat.renderValue()}
              </div>
              <div className="text-zinc-300 font-semibold text-xs mt-1 sm:mt-1.5 flex items-center gap-1">
                <span>{stat.label}</span>
              </div>
              <div className="text-zinc-500 text-[10px] sm:text-xs mt-1 font-body">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Primary Large Featured System Card (AI Voice Receptionist) */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#11102A]/85 to-[#090818]/85 border border-white/10 hover:border-[#5F62FF]/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] shadow-indigo-950/20 hover:shadow-[0_0_50px_rgba(95,98,255,0.25)] transition-all duration-500 p-6 sm:p-8 lg:p-10"
          >
            {/* Top corner luxury badge */}
            <div className="absolute top-0 right-0 z-20">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-bl-3xl bg-gradient-to-l from-[#5F62FF] to-[#8B5CF6] text-white font-mono text-[9px] font-extrabold tracking-widest uppercase select-none shadow-[0_0_15px_rgba(95,98,255,0.2)]">
                <Sparkles className="h-3 w-3 inline" /> MOST REQUESTED
              </span>
            </div>

            {/* Content Splitting Grid (60% text content / 40% graphic mockup ratio) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Product Info Block (60%) */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="space-y-2">
                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#8C8EFF] uppercase block">
                    {featuredVoiceSystem.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight group-hover:text-white transition-colors duration-300 font-sans">
                    {featuredVoiceSystem.title}
                  </h3>
                </div>
                <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed font-body">
                  {featuredVoiceSystem.outcome}
                </p>

                {/* Measurable ROI Result Flag */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] sm:text-xs font-bold shadow-[0_0_12px_rgba(16,185,129,0.15)] select-none">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Result: 24/7 Customer Support</span>
                </div>

                {/* Custom Checkbox outcome metrics bullet lists */}
                <div className="space-y-3 pt-2">
                  {featuredVoiceSystem.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5">
                      <span className="shrink-0 h-5 w-5 rounded-full bg-[#5F62FF]/10 border border-[#5F62FF]/20 flex items-center justify-center text-emerald-400 mt-0.5">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-zinc-300 text-xs sm:text-sm font-body">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technology custom badges */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2 items-center">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mr-1">
                    Powered By:
                  </span>
                  {featuredVoiceSystem.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono text-white bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.08]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Graphic Mockup Block (40%) */}
              <div className="lg:col-span-5 relative w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080718] select-none shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
                {/* Visual grid / cyber styling overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(95,98,255,0.08)_0%,transparent_70%)] pointer-events-none" />
                
                <div className="relative aspect-[4/3] w-full">
                  <motion.img
                    src={featuredVoiceSystem.image}
                    alt={featuredVoiceSystem.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain p-4 origin-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>

            {/* Extra purple back glow reflecting on hover container */}
            <div className="absolute -bottom-10 -right-10 -z-10 h-40 w-40 bg-[#5F62FF]/0 group-hover:bg-[#5F62FF]/8 blur-[60px] rounded-full transition-all duration-700 pointer-events-none" />
          </motion.div>
        </div>

        {/* Secondary Showcase Cards Grid */}
        {/* Responsive vertical stack on mobile/tablet, standard grid layout on desktop */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 md:px-0"
        >
          {secondarySystems.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#090818]/75 border border-white/5 hover:border-[#5F62FF]/30 hover:shadow-[0_0_35px_rgba(95,98,255,0.15)] shadow-xl transition-all duration-500 p-4 sm:p-5 md:p-6 w-full"
            >
              {/* Top 60% content column */}
              <div className="space-y-4">
                <div className="space-y-1 text-left">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-[#8C8EFF] uppercase block">
                    {card.category}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-white transition-colors duration-300 font-sans">
                    {card.title}
                  </h4>
                </div>

                {/* Outcome description paragraph */}
                <p className="text-zinc-400 text-xs leading-relaxed font-body text-left">
                  {card.outcome}
                </p>

                {/* Action / ROI Result metric badge */}
                <div className="flex text-left">
                  <span className={`text-[10px] font-semibold tracking-wide px-3 py-1 rounded-full border bg-[#5F62FF]/5 border-[#5F62FF]/15 text-[#8C8EFF] select-none`}>
                    {card.roiBadge}
                  </span>
                </div>

                {/* Checkmarked benefits summary */}
                <div className="space-y-2 pt-1 text-left">
                  {card.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2">
                      <span className="shrink-0 h-4.5 w-4.5 rounded-full bg-[#5F62FF]/5 border border-[#5F62FF]/15 flex items-center justify-center text-emerald-400 mt-0.5">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      <span className="text-zinc-300 text-xs font-body">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom 40% screenshot column */}
              <div className="space-y-4 mt-6">
                {/* Visual Graphic Device Screen */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/[0.04] bg-[#070614] select-none p-2 flex items-center justify-center shadow-inner">
                  {/* Digital atmospheric shine */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <motion.img
                    src={card.image}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain origin-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                </div>

                {/* Built-with tools container */}
                <div className="pt-3 border-t border-white/[0.03] flex flex-wrap gap-1 items-center justify-start">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mr-1">
                    Built With:
                  </span>
                  {card.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-mono text-zinc-300 bg-white/[0.02] px-2 py-0.5 rounded border border-white/[0.05]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Delicate highlight back-glow glow */}
              <div className="absolute bottom-[-20px] right-[-20px] -z-10 h-24 w-24 bg-[#5F62FF]/0 group-hover:bg-[#5F62FF]/4 blur-[30px] rounded-full transition-all duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
