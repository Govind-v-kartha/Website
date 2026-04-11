import { useEffect, useState } from 'react'
import { ArrowUp, Github, Linkedin } from 'lucide-react'

type SectionId = 'home' | 'about' | 'skills' | 'services' | 'projects' | 'certificates' | 'contact'

type FooterProps = {
  onNavigate?: (section: SectionId) => void
}

const QUICK_LINKS: Array<{ label: string; section: SectionId }> = [
  { label: 'Home', section: 'home' },
  { label: 'About', section: 'about' },
  { label: 'Skills', section: 'skills' },
  { label: 'Services', section: 'services' },
  { label: 'Projects', section: 'projects' },
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
      <footer className="border-t border-[#38BDF833] bg-[#0B1020]/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid gap-6 md:grid-cols-3 items-start">
          <div>
            <h3 className="text-white font-semibold text-base">Govind V Kartha</h3>
            <p className="mt-2 text-sm text-slate-400">Built with purpose. Secured by design.</p>
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
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">Social</p>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Govind-v-kartha"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring h-9 w-9 rounded-md border border-[#1E293B] bg-[#101A30] text-slate-300 hover:text-[#38BDF8] hover:border-[#38BDF866] inline-flex items-center justify-center transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/govind-v-kartha"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring h-9 w-9 rounded-md border border-[#1E293B] bg-[#101A30] text-slate-300 hover:text-[#38BDF8] hover:border-[#38BDF866] inline-flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1E293B] py-3 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
          © {currentYear} Govind V Kartha. All rights reserved.
        </div>
      </footer>

      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="focus-ring fixed bottom-6 right-6 z-40 h-11 w-11 rounded-full bg-[#38BDF8] text-white shadow-[0_0_24px_rgba(0,180,255,0.45)] hover:bg-[#0EA5E9] transition-all duration-300 inline-flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  )
}
