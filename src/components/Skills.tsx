import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Languages } from 'lucide-react';

interface SkillsProps {
  data: any[];
}

export const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 relative z-10 bg-slate-950/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">
            <span className="text-emerald-400 font-mono text-xl md:text-2xl mr-4">04.</span>
            Skills & Expertise
          </h2>
          <div className="h-px bg-slate-800 flex-grow ml-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/30 transition-colors backdrop-blur-sm group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
                  {skillGroup.group === 'Technical' ? (
                    <Code2 className="w-6 h-6 text-emerald-400" />
                  ) : (
                    <Languages className="w-6 h-6 text-blue-400" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                  {skillGroup.group}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item: string, i: number) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-full text-sm font-mono border border-slate-700/50 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
