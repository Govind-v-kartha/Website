import React from 'react'
import { motion } from 'framer-motion'

interface TopBarProps {
  activePanel: string
  onPanelChange?: (panel: 'home' | 'profile' | 'skills' | 'projects' | 'education' | 'contact') => void
}

const panelTitles: Record<string, string> = {
  home: 'Executive Summary',
  profile: 'Professional Profile',
  skills: 'Technical Capability',
  projects: 'Selected Projects',
  education: 'Education & Credentials',
  contact: 'Contact',
}

export const TopBar: React.FC<TopBarProps> = ({ activePanel, onPanelChange }) => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 h-16 bg-slate-50/90 backdrop-blur-lg border-b border-slate-200/90 shadow-md z-40"
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between h-full px-6 lg:px-8">
        <button
          type="button"
          onClick={() => onPanelChange?.('contact')}
          className="focus-ring font-semibold tracking-tight text-slate-900 text-sm lg:text-base hover:text-blue-700 hover:tracking-wide transition-all duration-200"
        >
          GOVIND V KARTHA
        </button>

        <motion.div
          key={activePanel}
          className="hidden md:block text-sm font-medium text-slate-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.16 }}
        >
          {panelTitles[activePanel] || 'Executive Summary'}
        </motion.div>

        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full border border-emerald-200/90 bg-emerald-50/90 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
          <span className="text-xs font-semibold text-emerald-800">Open to Security Roles</span>
        </div>
      </div>
    </motion.header>
  )
}
