import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type SectionId = 'home' | 'profile' | 'skills' | 'services' | 'projects' | 'education' | 'contact'

interface TopBarProps {
  activeSection: SectionId
  onNavigate: (section: SectionId) => void
}

const navigationItems: Array<{ id: SectionId; label: string }> = [
  { id: 'home', label: 'Home' },
  { id: 'profile', label: 'Profile' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const TopBar = ({ activeSection, onNavigate }: TopBarProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 h-16 z-40 border-b transition-all duration-200 ${
        isScrolled
          ? 'bg-slate-900/90 border-slate-700/90 shadow-lg backdrop-blur-xl'
          : 'bg-slate-900/75 border-slate-700/70 backdrop-blur-lg'
      }`}
      initial={shouldReduceMotion ? undefined : { y: -24, opacity: 0 }}
      animate={shouldReduceMotion ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="focus-ring font-semibold tracking-tight text-white text-sm lg:text-base hover:text-blue-200 transition-colors"
        >
          GOVIND V KARTHA
        </button>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`focus-ring px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-500/20 text-blue-100 border border-blue-300/30'
                    : 'text-slate-300 border border-transparent hover:text-white hover:bg-slate-800/80'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            )
          })}
        </nav>

        <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full border border-emerald-400/30 bg-emerald-500/10">
          <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
          <span className="text-xs font-semibold text-emerald-200">Open to Security Roles</span>
        </div>
      </div>
    </motion.header>
  )
}
