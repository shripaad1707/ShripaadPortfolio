import { motion } from "motion/react";
import SplitText from "./SplitText";
import { BookOpen, Sparkles, Flame } from "lucide-react";

interface LearningTopic {
  title: string;
  description: string;
  focusArea: string;
  badge: string;
}

export default function CurrentlyLearning() {
  const topics: LearningTopic[] = [
    {
      title: "Python Backend Development",
      description: "Learning backend architecture, error handling, APIs, clean code practices, and production-ready Python for AI automation systems.",
      focusArea: "Backend Architecture",
      badge: "In Progress",
    },
    {
      title: "FastAPI",
      description: "Learning to build REST APIs, request validation, backend services, and API integrations for AI applications.",
      focusArea: "API Development",
      badge: "In Progress",
    },
    {
      title: "LLM Engineering",
      description: "Designing prompts, structured outputs, function calling, and AI workflows using OpenAI and Google Gemini APIs.",
      focusArea: "AI Agents",
      badge: "In Progress",
    },
    {
      title: "RAG Systems",
      description: "Building retrieval-augmented AI systems using embeddings, vector databases, semantic search, and enterprise knowledge retrieval.",
      focusArea: "Vector Search",
      badge: "In Progress",
    },
    {
      title: "Model Context Protocol (MCP)",
      description: "Exploring the Model Context Protocol (MCP) for standardized AI tool integration and communication between AI applications.",
      focusArea: "Tool Integration",
      badge: "Exploring",
    },
    {
      title: "AI Production Systems",
      description: "Learning scalable deployment patterns, monitoring, logging, retry mechanisms, and reliable AI automation architectures.",
      focusArea: "Reliability",
      badge: "In Progress",
    },
  ];

  return (
    <section id="currently-learning" className="py-16 md:py-24 relative overflow-hidden bg-[#03020D]/60 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <SplitText
            text="Currently Learning"
            tag="h2"
            splitType="words"
            delay={35}
            duration={0.8}
            ease="power3.out"
            from={{ opacity: 0, y: 25 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-[-0.03em] font-sans"
          />
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-body">
            I actively expand my technical horizon every day to build modern backend services and reliable AI automation platforms.
          </p>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group p-5 rounded-2xl bg-[#080718]/80 border border-white/6 hover:border-[#5F62FF]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(95,98,255,0.1)] flex flex-col justify-between"
            >
              <div>
                <div className="mb-3">
                  <span className="text-[10px] font-mono text-[#8C8EFF] uppercase font-bold tracking-wider">
                    {topic.focusArea}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-sans tracking-tight group-hover:text-[#5F62FF] transition-colors">
                  {topic.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed font-body mt-2">
                  {topic.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-zinc-500">
                <BookOpen className="h-3 w-3 text-[#5F62FF]" />
                <span>Active Skill Development</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
