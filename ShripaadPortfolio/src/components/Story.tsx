import { motion } from "motion/react";
import { Clock, Zap, ShieldCheck } from "lucide-react";
import SplitText from "./SplitText";

export default function Story() {
  const beliefs = [
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
      id="story"
      className="py-20 md:py-28 bg-[#020108]/80 border-b border-white/5 relative overflow-hidden"
    >
      {/* Background glow circle - Optimized for mobile scrolling rendering speed */}
      <div className="absolute top-[20%] left-[-100px] -z-10 h-[400px] w-[400px] bg-[#5F62FF]/5 blur-[50px] lg:blur-[120px] rounded-full pointer-events-none" />

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
            {/* Circular Profile Image (180px–220px) with elegant purple outer glow */}
            <div className="relative w-[190px] h-[190px] mb-6 select-none">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#5F62FF] to-purple-600 opacity-30 group-hover:opacity-50 blur-[15px] transition-opacity duration-700 pointer-events-none" />
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#5F62FF]/40 to-purple-500/20" />
              
              <img
                src="/images/profilepic.jpeg"
                alt="Koduri Shripaad"
                referrerPolicy="no-referrer"
                className="relative w-full h-full rounded-full object-cover border border-white/20"
              />
            </div>

            {/* Profile Info */}
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-none mb-1.5 font-sans">
              Koduri Shripaad
            </h3>
            <span className="text-[11px] font-mono text-[#8C8EFF] uppercase tracking-widest font-bold mb-4 block">
              Business Automation Consultant
            </span>
            <div className="h-px w-10 bg-white/10 mb-4" />
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-body">
              Building practical automation systems that help businesses save time and operate more efficiently.
            </p>
          </motion.div>

          {/* RIGHT SIDE: Story & Beliefs */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-10">
            
            {/* Section Header */}
            <div className="space-y-4">
              <SplitText
                text="Why I Build Automation Systems"
                tag="h2"
                splitType="words"
                delay={35}
                duration={0.8}
                from={{ opacity: 0, y: 25 }}
                to={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl font-semibold text-white tracking-[-0.03em] font-sans leading-tight"
              />
            </div>

            {/* Story Paragraphs */}
            <div className="space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed font-body">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Modern businesses shouldn't rely on repetitive manual processes to operate effectively. Valuable time is often spent managing leads, responding to inquiries, scheduling appointments, and handling routine administrative work.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-zinc-400"
              >
                I build intelligent automation systems that simplify operations, improve response times, and create scalable workflows. By reducing manual effort, businesses can increase productivity, deliver a better customer experience, and focus on sustainable growth.
              </motion.p>
            </div>

            {/* Three Belief Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {beliefs.map((belief, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                  className="bg-[#080718]/80 border border-white/5 hover:border-[#5F62FF]/20 rounded-xl p-4 transition-all duration-300 group"
                >
                  <div className="p-2 w-fit rounded-lg bg-white/[0.02] border border-white/[0.05] mb-3 group-hover:scale-105 transition-transform">
                    {belief.icon}
                  </div>
                  <h4 className="text-zinc-100 font-semibold text-sm sm:text-base tracking-tight mb-1 font-sans">
                    {belief.title}
                  </h4>
                  <p className="text-zinc-400 text-xs leading-normal font-body">
                    {belief.desc}
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
