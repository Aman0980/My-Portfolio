import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';

interface HeroProps {
  data: any;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const handleScroll = () => {
    const el = document.getElementById('experience');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = () => {
    // Generate a simple text version or PDF link
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(data, null, 2)], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "Aman_Kumar_Resume.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-emerald-400 font-mono text-lg md:text-xl mb-4 tracking-wider">
            Hi, my name is
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-100 tracking-tight mb-4">
            {data.basics.name}.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-400 tracking-tight mb-8">
            {data.basics.title}.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-12">
            {data.basics.summary}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={handleScroll}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-slate-950 bg-emerald-400 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]"
          >
            <span className="mr-2">View Experience</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
          
          <button
            onClick={handleDownload}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-slate-300 border border-slate-700 rounded-full overflow-hidden transition-all hover:bg-slate-800 hover:text-white hover:border-slate-500"
          >
            <span className="mr-2">Download Resume</span>
            <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
