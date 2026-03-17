import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Zap, Target } from 'lucide-react';

interface AchievementsProps {
  data: any[];
}

export const Achievements: React.FC<AchievementsProps> = ({ data }) => {
  const getIcon = (title: string) => {
    if (title.toLowerCase().includes('rank') || title.toLowerCase().includes('air')) return <Trophy className="w-8 h-8 text-yellow-400" />;
    if (title.toLowerCase().includes('cambridge')) return <Award className="w-8 h-8 text-blue-400" />;
    if (title.toLowerCase().includes('mckinsey')) return <Target className="w-8 h-8 text-emerald-400" />;
    return <Star className="w-8 h-8 text-purple-400" />;
  };

  return (
    <section id="achievements" className="py-24 px-6 md:px-12 lg:px-24 relative z-10 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">
            <span className="text-emerald-400 font-mono text-xl md:text-2xl mr-4">02.</span>
            Achievements
          </h2>
          <div className="h-px bg-slate-800 flex-grow ml-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-slate-800/50 rounded-2xl inline-block group-hover:bg-slate-800 transition-colors">
                  {getIcon(item.title)}
                </div>
                
                <h3 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed">
                  {item.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
