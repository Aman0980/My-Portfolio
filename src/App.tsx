import React, { useState } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Extra } from './components/Extra';
import resumeData from './data/resume.json';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-transparent min-h-screen text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <>
          <AnimatedBackground />
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-50"
            style={{ scaleX }}
          />
          <Navbar />
          <main className="relative z-10">
            <Hero data={resumeData} />
            <Experience data={resumeData.experience} />
            <Achievements data={resumeData.achievements} />
            <Education data={resumeData.education} />
            <Skills data={resumeData.skills} />
            <Extra data={resumeData.extra} />
          </main>
          
          <footer className="py-8 text-center text-slate-500 font-mono text-sm border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-md relative z-10">
            <p>Designed & Built by {resumeData.basics.name}</p>
            <div className="flex justify-center gap-4 mt-4">
              {resumeData.basics.links.map((link, i) => (
                <a key={i} href="#" className="hover:text-emerald-400 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
