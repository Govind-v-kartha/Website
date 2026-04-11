import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Home,
  User,
  Zap,
  FolderGit2,
  GraduationCap,
  Mail,
  Briefcase,
  Menu,
  X,
  Github,
  Linkedin,
  ExternalLink,
  FileText,
  Download,
} from 'lucide-react'

type SectionId = 'home' | 'profile' | 'skills' | 'services' | 'projects' | 'education' | 'contact'

interface SidebarProps {
  activeSection: SectionId
  onNavigate: (section: SectionId) => void
}

const navigationItems: Array<{ id: SectionId; label: string; icon: typeof Home }> = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'skills', label: 'Skills', icon: Zap },
  { id: 'services', label: 'Services', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const closeSidebar = () => setSidebarOpen(false)

  return (
    <>
      <motion.button
        type="button"
        className="focus-ring fixed top-4 right-4 z-50 lg:hidden p-2.5 border border-slate-600/90 bg-slate-900/85 backdrop-blur text-slate-100 rounded-lg shadow-sm hover:border-blue-400 hover:bg-slate-900 transition-all duration-200"
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
          className="fixed inset-0 bg-slate-950/65 backdrop-blur-sm z-30 lg:hidden"
          onClick={closeSidebar}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-label="Close navigation overlay"
        />
      )}

      <motion.aside
        className={`
          fixed left-0 top-16 bottom-0 w-72 bg-slate-950/90 backdrop-blur-xl border-r border-slate-700/80 overflow-y-auto z-40
          lg:hidden transform transition-transform duration-200
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        initial={false}
      >
        <div className="p-6 flex flex-col h-full">
          <button
            type="button"
            className="focus-ring mb-8 text-left p-4 rounded-xl border border-slate-700/80 bg-slate-900/80 hover:bg-slate-900 hover:border-blue-400/60 transition-all duration-200"
            onClick={() => {
              onNavigate('home')
              closeSidebar()
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/profile.jpg"
                alt="Govind V Kartha"
                className="w-14 h-14 rounded-lg object-cover border border-slate-600"
              />
              <div>
                <p className="font-semibold text-slate-100 text-sm leading-tight">Govind V Kartha</p>
                <p className="text-xs text-slate-400 mt-1">Cybersecurity Graduate (Entry-Level)</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Entry-level cybersecurity professional focused on offensive testing, detection analysis, and quantum-security foundations.
            </p>
          </button>

          <nav className="space-y-2 mb-8" aria-label="Mobile navigation">
            {navigationItems.map((item, index) => {
              const Icon = item.icon
              const isActive = activeSection === item.id

              return (
                <motion.button
                  type="button"
                  key={item.id}
                  className={`
                    focus-ring w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium border
                    transition-all duration-200
                    ${
                      isActive
                        ? 'bg-blue-500/20 text-blue-100 border-blue-300/40'
                        : 'bg-transparent text-slate-300 border-transparent hover:bg-slate-800/90 hover:border-slate-600 hover:text-white'
                    }
                  `}
                  onClick={() => {
                    onNavigate(item.id)
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
                </motion.button>
              )
            })}
          </nav>

          <motion.div
            className="mt-auto border-t border-slate-700/80 pt-6 space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.16, duration: 0.2 }}
          >
            <a
              href="https://github.com/Govind-v-kartha"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-2 text-sm text-slate-300 hover:text-blue-200 hover:bg-slate-800/80 transition-all duration-200 rounded px-2 py-1"
            >
              <Github size={16} />
              <span>GitHub</span>
              <ExternalLink size={12} className="ml-auto" />
            </a>
            <a
              href="https://www.linkedin.com/in/govind-v-kartha"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-2 text-sm text-slate-300 hover:text-blue-200 hover:bg-slate-800/80 transition-all duration-200 rounded px-2 py-1"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
              <ExternalLink size={12} className="ml-auto" />
            </a>
            <a
              href="/cv/Govind_V_Kartha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-2 text-sm text-slate-300 hover:text-blue-200 hover:bg-slate-800/80 transition-all duration-200 rounded px-2 py-1"
            >
              <FileText size={16} />
              <span>View Resume</span>
              <ExternalLink size={12} className="ml-auto" />
            </a>
            <a
              href="/cv/Govind_V_Kartha_Resume.pdf"
              download="Govind_V_Kartha_Resume.pdf"
              className="focus-ring flex items-center gap-2 text-sm text-slate-300 hover:text-blue-200 hover:bg-slate-800/80 transition-all duration-200 rounded px-2 py-1"
            >
              <Download size={16} />
              <span>Download Resume</span>
              <ExternalLink size={12} className="ml-auto" />
            </a>
            <a
              href="mailto:knvgovind@gmail.com"
              className="focus-ring flex items-center gap-2 text-sm text-slate-300 hover:text-blue-200 hover:bg-slate-800/80 transition-all duration-200 rounded px-2 py-1"
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
