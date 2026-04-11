import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

type SectionId = 'home' | 'about' | 'skills' | 'services' | 'projects' | 'certificates' | 'contact'

interface NavbarProps {
  activeSection: SectionId
  onNavigate: (section: SectionId) => void
}

const NAV_ITEMS: Array<{ id: SectionId; label: string }> = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-black/35 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]'
          : 'backdrop-blur-md bg-black/20 border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="focus-ring text-[#38BDF8] font-bold tracking-tight text-base sm:text-lg"
        >
          Govind V Kartha
        </button>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`focus-ring px-3 py-1.5 rounded-md text-sm border transition-all duration-300 ${
                  isActive
                    ? 'text-white bg-[#38BDF81A] border-[#38BDF866]'
                    : 'text-slate-300 border-transparent hover:text-white hover:bg-white/5'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            )
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="focus-ring lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/20 text-slate-200 hover:text-white hover:border-[#38BDF866] transition-all duration-300"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0B1020]/95 backdrop-blur-xl">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-1" aria-label="Mobile primary">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onNavigate(item.id)
                    setMobileOpen(false)
                  }}
                  className={`focus-ring text-left px-3 py-2 rounded-md text-sm border transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-[#38BDF81A] border-[#38BDF866]'
                      : 'text-slate-300 border-transparent hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
