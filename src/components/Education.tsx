import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface EducationProps {
  data: any[];
}

export const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">
            <span className="text-emerald-400 font-mono text-xl md:text-2xl mr-4">03.</span>
            Education
          </h2>
          <div className="h-px bg-slate-800 flex-grow ml-4"></div>
        </motion.div>

        <div className="space-y-8">
          {data.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-slate-800 ml-6"></div>
              
              <div className="md:ml-16 relative bg-slate-900/40 p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/30 transition-colors backdrop-blur-sm group">
                <div className="absolute -left-12 top-8 w-8 h-8 rounded-full bg-slate-950 border-2 border-emerald-500 hidden md:flex items-center justify-center z-10 group-hover:scale-125 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                </div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-xl text-slate-300 mt-2 font-medium">
                      {edu.degree}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm font-mono text-slate-500 mt-2 md:mt-0">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-emerald-500/70" />
                      <span>{edu.dates}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-500/70" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
