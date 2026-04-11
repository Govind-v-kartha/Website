import { FileText, Github, Linkedin, Mail } from 'lucide-react'

type FooterProps = {
  onPanelChange?: (panel: 'home' | 'profile' | 'skills' | 'projects' | 'education' | 'contact') => void
}

export default function Footer({ onPanelChange }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Govind-v-kartha',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/govind-v-kartha-3816a2322',
      icon: Linkedin,
    },
    {
      name: 'CV',
      href: '/cv/Govind_V_Kartha_CV.pdf',
      icon: FileText,
    },
    {
      name: 'Email',
      href: 'mailto:knvgovind@gmail.com',
      icon: Mail,
    },
  ]

  const links: Array<{ label: string; panel: 'home' | 'projects' | 'skills' | 'contact' }> = [
    { label: 'Home', panel: 'home' },
    { label: 'Projects', panel: 'projects' },
    { label: 'Skills', panel: 'skills' },
    { label: 'Contact', panel: 'contact' },
  ]

  return (
    <footer className="bg-slate-900/95 backdrop-blur text-slate-300 border-t border-slate-700/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
          <h3 className="text-xs font-semibold text-white tracking-wide">Govind V Kartha</h3>

          <div className="flex gap-4 text-xs">
            {links.map((link) => (
              <button
                key={link.label}
                type="button"
                className="focus-ring text-slate-400 hover:text-blue-300 hover:bg-slate-800/70 transition-all duration-200 rounded px-2 py-1"
                onClick={() => onPanelChange?.(link.panel)}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                    className="focus-ring p-1.5 rounded text-slate-400 hover:text-blue-300 hover:bg-slate-800/70 transition-all duration-200"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                )
              })}
            </div>
            <p className="text-xs text-slate-500">© {currentYear}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
