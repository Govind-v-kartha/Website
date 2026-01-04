import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
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
      name: 'Email',
      href: 'mailto:knvgovind@gmail.com',
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center">
          {/* Brand */}
          <h3 className="text-xs font-bold text-white">Govind V Kartha</h3>

          {/* Quick Links */}
          <div className="flex gap-4 text-xs">
            <a href="#home" className="text-slate-400 hover:text-blue-400">Home</a>
            <a href="#projects" className="text-slate-400 hover:text-blue-400">Projects</a>
            <a href="#skills" className="text-slate-400 hover:text-blue-400">Skills</a>
            <a href="#contact" className="text-slate-400 hover:text-blue-400">Contact</a>
          </div>

          {/* Social Links */}
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
                  className="p-0.5 hover:text-blue-400"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-500">© {currentYear}</p>
        </div>
      </div>
    </footer>
  )
}
