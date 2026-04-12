import { useEffect, useState } from 'react'
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

type SectionId = 'home' | 'about' | 'skills' | 'services' | 'projects' | 'certificates' | 'contact'

type FooterProps = {
  onNavigate?: (section: SectionId) => void
}

const QUICK_LINKS: Array<{ label: string; section: SectionId }> = [
  { label: 'Home', section: 'home' },
  { label: 'About', section: 'about' },
  { label: 'Projects', section: 'projects' },
  { label: 'Credentials', section: 'certificates' },
  { label: 'Contact', section: 'contact' },
]

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 420)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <footer className="border-t border-[var(--accent-soft-border)] bg-[color-mix(in_srgb,var(--bg-elevated)_95%,transparent)] backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid gap-6 md:grid-cols-3 items-start">
          <div>
            <h3 className="text-white font-semibold text-base">Govind V Kartha</h3>
            <p className="mt-2 text-sm text-slate-400">Entry-Level Cybersecurity Portfolio</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">Quick Links</p>
            <div className="flex flex-wrap gap-2">
              {QUICK_LINKS.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => onNavigate?.(link.section)}
                  className="focus-ring px-2.5 py-1 rounded-md text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">Professional Links</p>
            <div className="flex items-center gap-2">
              <a
                href="mailto:knvgovind@gmail.com"
                className="focus-ring h-9 w-9 rounded-md border border-[var(--border)] bg-[var(--surface)] text-slate-300 hover:text-[var(--accent)] hover:border-[var(--accent-soft-border)] inline-flex items-center justify-center transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://github.com/Govind-v-kartha"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring h-9 w-9 rounded-md border border-[var(--border)] bg-[var(--surface)] text-slate-300 hover:text-[var(--accent)] hover:border-[var(--accent-soft-border)] inline-flex items-center justify-center transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/govind-v-kartha"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring h-9 w-9 rounded-md border border-[var(--border)] bg-[var(--surface)] text-slate-300 hover:text-[var(--accent)] hover:border-[var(--accent-soft-border)] inline-flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border)] py-3 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
          © {currentYear} Govind V Kartha. All rights reserved.
        </div>
      </footer>

      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="focus-ring fixed bottom-6 right-6 z-40 h-11 w-11 rounded-full bg-[var(--accent)] text-white shadow-[0_0_16px_var(--accent-glow)] hover:bg-[var(--accent-hover)] transition-all duration-300 inline-flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  )
}
