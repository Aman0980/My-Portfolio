import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase } from 'lucide-react';

interface ExperienceProps {
  data: any[];
}

export const Experience: React.FC<ExperienceProps> = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">
            <span className="text-emerald-400 font-mono text-xl md:text-2xl mr-4">01.</span>
            Experience
          </h2>
          <div className="h-px bg-slate-800 flex-grow ml-4"></div>
        </motion.div>

        <div className="space-y-6">
          {data.map((exp, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isExpanded 
                    ? 'bg-slate-900/80 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.1)]' 
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                } backdrop-blur-md`}
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full px-6 py-6 md:px-8 md:py-8 flex flex-col md:flex-row md:items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl transition-colors ${isExpanded ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400 group-hover:text-slate-300'}`}>
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-1">
                        {exp.role} <span className="text-emerald-400">@ {exp.company}</span>
                      </h3>
                      <p className="text-slate-400 font-mono text-sm">
                        {exp.dates} | {exp.location}
                      </p>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 text-slate-500 transition-transform duration-300 mt-4 md:mt-0 ${isExpanded ? 'rotate-180 text-emerald-400' : ''}`} 
                  />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-8 md:px-8 md:pb-8 pt-0">
                        <ul className="space-y-4">
                          {exp.bullets.map((bullet: string, i: number) => (
                            <li key={i} className="flex items-start text-slate-300 leading-relaxed">
                              <span className="text-emerald-400 mr-3 mt-1.5">▹</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
