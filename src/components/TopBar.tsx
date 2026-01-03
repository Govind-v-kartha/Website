import React from 'react';
import { motion } from 'framer-motion';

interface TopBarProps {
  activePanel: string;
}

const panelTitles: Record<string, string> = {
  home: 'Welcome',
  profile: 'Professional Profile',
  skills: 'Technical Skills',
  projects: 'Projects',
  education: 'Education & Certifications',
  contact: 'Get In Touch'
};

export const TopBar: React.FC<TopBarProps> = ({ activePanel }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm z-40"
      initial={{ y: -64 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between h-full px-8">
        {/* Left: Logo/Name */}
        <motion.div
          className="font-semibold tracking-tight text-slate-900 text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          GOVIND V KARTHA
        </motion.div>

        {/* Center: Panel Title */}
        <motion.div
          key={activePanel}
          className="text-sm font-medium text-slate-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {panelTitles[activePanel] || 'Welcome'}
        </motion.div>

        {/* Right: Status */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-slate-600">Available for Work</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
