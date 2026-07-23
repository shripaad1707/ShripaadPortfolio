import { motion } from "motion/react";
import SplitText from "./SplitText";
import { Cpu, Server, Layout, Database, CheckCircle, Sparkles } from "lucide-react";

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: any;
  accentColor: string;
  skills: { name: string }[];
}

export default function TechnicalSkills() {
  const categories: SkillCategory[] = [
    {
      title: "AI & Automation",
      subtitle: "Building intelligent AI agents, LLM-powered workflows, retrieval systems, and business automation platforms.",
      icon: Cpu,
      accentColor: "text-[#5F62FF]",
      skills: [
        { name: "AI Agents" },
        { name: "OpenAI API" },
        { name: "Google Gemini" },
        { name: "Prompt Engineering" },
        { name: "RAG" },
        { name: "Vector Databases" },
        { name: "n8n" },
        { name: "Make" },
        { name: "Zapier" },
      ],
    },
    {
      title: "Backend Development",
      subtitle: "Building backend services, API integrations, webhook-based systems, and automation logic.",
      icon: Server,
      accentColor: "text-[#8B5CF6]",
      skills: [
        { name: "Python" },
        { name: "FastAPI" },
        { name: "REST APIs" },
        { name: "API Integrations" },
        { name: "HTTP Requests" },
        { name: "JSON" },
        { name: "Webhooks" },
        { name: "Environment Variables (.env)" },
      ],
    },
    {
      title: "Frontend Development",
      subtitle: "User Interfaces & Design Systems",
      icon: Layout,
      accentColor: "text-[#3B82F6]",
      skills: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript" },
        { name: "React" },
        { name: "Tailwind CSS" },
        { name: "Figma" },
      ],
    },
    {
      title: "Database & Tools",
      subtitle: "Databases, version control, deployment, and tools used to build production-ready automation systems.",
      icon: Database,
      accentColor: "text-[#10B981]",
      skills: [
        { name: "Supabase (DB & Auth)" },
        { name: "Airtable" },
        { name: "Google Sheets" },
        { name: "Git" },
        { name: "GitHub" },
        { name: "Postman" },
        { name: "Vercel" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden bg-[#03020D]/80 border-t border-b border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-full max-w-5xl bg-gradient-to-r from-violet-900/10 via-[#5F62FF]/15 to-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <SplitText
            text="Technical Skills & Ecosystem"
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
            Tools, languages, and frameworks I combine to engineer production-grade AI agents, scalable backend endpoints, and autonomous business workflows.
          </p>
        </div>

        {/* 4 Cards Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {categories.map((cat, idx) => {
            const CategoryIcon = cat.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl bg-[#090818]/80 border border-white/8 hover:border-[#5F62FF]/35 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_15px_45px_rgba(95,98,255,0.12)] flex flex-col justify-between"
              >
                {/* Category Header */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-white/[0.03] border border-white/10 ${cat.accentColor} shadow-inner group-hover:scale-105 transition-transform duration-300`}>
                        <CategoryIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white font-sans tracking-tight">
                          {cat.title}
                        </h3>
                        <p className="text-zinc-400 text-xs font-body font-normal">
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-white/5 w-full my-4" />

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="group/chip flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.02] border border-white/8 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200 select-none"
                      >
                        <CheckCircle className={`h-3.5 w-3.5 ${cat.accentColor} opacity-70 group-hover/chip:opacity-100 transition-opacity`} />
                        <span className="text-xs sm:text-sm font-medium text-zinc-200 group-hover/chip:text-white font-sans">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Corner accent glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-bl-full pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
