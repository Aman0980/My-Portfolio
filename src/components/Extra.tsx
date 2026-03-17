import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake } from 'lucide-react';

interface ExtraProps {
  data: any[];
}

export const Extra: React.FC<ExtraProps> = ({ data }) => {
  return (
    <section id="extra" className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">
            <span className="text-emerald-400 font-mono text-xl md:text-2xl mr-4">05.</span>
            Beyond Work
          </h2>
          <div className="h-px bg-slate-800 flex-grow ml-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/30 transition-colors backdrop-blur-sm group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-rose-500/20 transition-colors">
                  <HeartHandshake className="w-6 h-6 text-rose-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-rose-400 transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
