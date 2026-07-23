import { motion } from "motion/react";
import { Clock, ShieldCheck, Zap, Code2 } from "lucide-react";
import SplitText from "./SplitText";

export default function Story() {
  const pillars = [
    {
      icon: <Clock className="w-5 h-5 text-[#8C8EFF]" />,
      title: "Save Time",
      desc: "Remove repetitive manual tasks and administrative overhead.",
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: "Increase Response Speed",
      desc: "Help businesses respond to customers instantly.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#10B981]" />,
      title: "Build Reliable Systems",
      desc: "Create automation workflows that remain simple, stable, and scalable.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[#020108]/90 border-b border-white/5 relative overflow-hidden"
    >
      {/* Background glow circle */}
      <div className="absolute top-[20%] left-[-100px] -z-10 h-[400px] w-[400px] bg-[#5F62FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Personal Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col items-center text-center max-w-sm mx-auto w-full group"
          >
            {/* Profile Avatar / Photo Container with sleek purple outer glow */}
            <div className="relative w-[280px] h-[280px] mb-6 select-none">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#5F62FF] to-purple-600 opacity-40 group-hover:opacity-70 blur-[24px] transition-opacity duration-700 pointer-events-none" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#5F62FF]/60 to-purple-500/30 p-0.5" />
              
              <div className="relative w-full h-full rounded-full bg-[#080718] border border-white/20 p-1.5 shadow-2xl overflow-hidden">
                <img
                  src="/images/profilepic.jpeg"
                  alt="Koduri Shripaad"
                  referrerPolicy="no-referrer"
                  className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Title & Info */}
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-none mb-1.5 font-sans">
              Koduri Shripaad
            </h3>
            <span className="text-[11px] font-mono text-[#8C8EFF] uppercase tracking-widest font-bold block">
              AI Automation Engineer
            </span>
          </motion.div>

          {/* RIGHT SIDE: Technical About Me & Philosophy */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-8">
            
            {/* Section Header */}
            <div className="space-y-3">
              <SplitText
                text="My Engineering Philosophy"
                tag="h2"
                splitType="words"
                delay={35}
                duration={0.8}
                from={{ opacity: 0, y: 25 }}
                to={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl font-semibold text-white tracking-[-0.03em] font-sans leading-tight"
              />
            </div>

            {/* Professional & Technical Story */}
            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-body">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Businesses lose valuable hours every week on repetitive tasks that software should handle automatically. I focus on identifying those operational bottlenecks and engineering automation systems that reduce manual effort, speed up response times, and keep operations running reliably in the background.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-zinc-300"
              >
                My goal isn't just to automate tasks—it's to simplify operations. I believe automation should clarify workflows rather than complicate them, prioritizing long-term stability, robust error handling, and clean maintainability so systems perform dependably day after day.
              </motion.p>
            </div>

            {/* 3 Technical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                  className="bg-[#080718]/80 border border-white/8 hover:border-[#5F62FF]/30 rounded-xl p-4 transition-all duration-300 group"
                >
                  <div className="p-2 w-fit rounded-lg bg-white/[0.03] border border-white/10 mb-3 group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <h4 className="text-zinc-100 font-semibold text-sm sm:text-base tracking-tight mb-1 font-sans">
                    {pillar.title}
                  </h4>
                  <p className="text-zinc-400 text-xs leading-normal font-body">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
