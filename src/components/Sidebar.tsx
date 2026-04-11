import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Home,
  User,
  Zap,
  FolderGit2,
  GraduationCap,
  Mail,
  Menu,
  X,
  Github,
  Linkedin,
  ExternalLink,
  FileText,
} from 'lucide-react'

type PanelType = 'home' | 'profile' | 'skills' | 'projects' | 'education' | 'contact'

interface SidebarProps {
  activePanel: PanelType
  onPanelChange: (panel: PanelType) => void
}

const navigationItems: Array<{ id: PanelType; label: string; icon: typeof Home }> = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'skills', label: 'Skills', icon: Zap },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export default function Sidebar({ activePanel, onPanelChange }: SidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const closeSidebar = () => setSidebarOpen(false)

  return (
    <>
      <motion.button
        type="button"
        className="focus-ring fixed top-4 right-4 z-50 lg:hidden p-2.5 border border-slate-300/90 bg-slate-50/95 backdrop-blur text-slate-900 rounded-lg shadow-sm hover:border-blue-300 hover:bg-white transition-all duration-200"
        onClick={() => setSidebarOpen((prev) => !prev)}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
        aria-label={sidebarOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={sidebarOpen}
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </motion.button>

      {sidebarOpen && (
        <motion.button
          type="button"
          className="fixed inset-0 bg-slate-900/45 backdrop-blur-sm z-30 lg:hidden"
          onClick={closeSidebar}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-label="Close navigation overlay"
        />
      )}

      <motion.aside
        className={`
          fixed left-0 top-16 bottom-0 w-72 bg-slate-50/95 backdrop-blur border-r border-slate-200/90 overflow-y-auto z-40
          lg:translate-x-0 transform transition-transform duration-200
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        initial={false}
      >
        <div className="p-6 flex flex-col h-full">
          <button
            type="button"
            className="focus-ring mb-8 text-left p-4 rounded-xl border border-slate-200/90 bg-white/85 hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-200"
            onClick={() => {
              onPanelChange('contact')
              closeSidebar()
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/profile.jpg"
                alt="Govind V Kartha"
                className="w-14 h-14 rounded-lg object-cover border border-slate-300"
              />
              <div>
                <p className="font-semibold text-slate-900 text-sm leading-tight">Govind V Kartha</p>
                <p className="text-xs text-slate-500 mt-1">Cybersecurity Graduate (Entry-Level)</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Entry-level cybersecurity professional with strong interest in offensive security, application security testing, detection engineering, and quantum security research.
            </p>
          </button>

          <nav className="space-y-2 mb-8" aria-label="Primary">
            {navigationItems.map((item, index) => {
              const Icon = item.icon
              const isActive = activePanel === item.id

              return (
                <motion.button
                  type="button"
                  key={item.id}
                  className={`
                    focus-ring w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium border
                    transition-all duration-200
                    ${
                      isActive
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-transparent text-slate-700 border-transparent hover:bg-slate-100/95 hover:border-slate-200 hover:text-slate-900'
                    }
                  `}
                  onClick={() => {
                    onPanelChange(item.id)
                    closeSidebar()
                  }}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: shouldReduceMotion ? 0 : 0.06 + index * 0.03, duration: 0.15 }}
                  whileHover={shouldReduceMotion ? undefined : { x: 3 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon size={17} className="flex-shrink-0" />
                  <span>{item.label}</span>
                  {isActive && <span className="ml-auto h-2 w-2 rounded-full bg-blue-300 ring-2 ring-blue-200/60" aria-hidden="true" />}
                </motion.button>
              )
            })}
          </nav>

          <motion.div
            className="mt-auto border-t border-slate-200 pt-6 space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.16, duration: 0.2 }}
          >
            <a
              href="https://github.com/Govind-v-kartha"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-2 text-sm text-slate-600 hover:text-blue-700 hover:bg-slate-100/80 transition-all duration-200 rounded px-2 py-1"
            >
              <Github size={16} />
              <span>GitHub</span>
              <ExternalLink size={12} className="ml-auto" />
            </a>
            <a
              href="https://www.linkedin.com/in/govind-v-kartha"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-2 text-sm text-slate-600 hover:text-blue-700 hover:bg-slate-100/80 transition-all duration-200 rounded px-2 py-1"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
              <ExternalLink size={12} className="ml-auto" />
            </a>
            <a
              href="/cv/Govind_V_Kartha_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-2 text-sm text-slate-600 hover:text-blue-700 hover:bg-slate-100/80 transition-all duration-200 rounded px-2 py-1"
            >
              <FileText size={16} />
              <span>View CV</span>
              <ExternalLink size={12} className="ml-auto" />
            </a>
            <a
              href="mailto:knvgovind@gmail.com"
              className="focus-ring flex items-center gap-2 text-sm text-slate-600 hover:text-blue-700 hover:bg-slate-100/80 transition-all duration-200 rounded px-2 py-1"
            >
              <Mail size={16} />
              <span>Email</span>
              <ExternalLink size={12} className="ml-auto" />
            </a>
          </motion.div>
        </div>
      </motion.aside>
    </>
  )
}
