import { useEffect, useState } from 'react'
import { ArrowRight, Atom, Download, FileText, Github, Linkedin, Mail, Shield } from 'lucide-react'

type SectionId = 'home' | 'about' | 'skills' | 'services' | 'projects' | 'certificates' | 'contact'

interface HomePanelProps {
  onNavigate: (section: SectionId) => void
}

const ROTATING_ROLES = [
  'Cybersecurity Analyst',
  'Quantum Computing Engineer',
  'VAPT & SOC Practitioner',
  'Post-Quantum Cryptography Researcher',
]

const HERO_STATS = [
  { value: '6+', label: 'Shipped Projects' },
  { value: '4', label: 'Certificates' },
  { value: '2', label: 'Live Deployments' },
  { value: '2', label: 'Academic Degrees' },
]

export default function HomePanel({ onNavigate }: HomePanelProps) {
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(true)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length)
    }, 2600)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="panel-shell min-h-[calc(100vh-7.5rem)]">
      <div className="panel-content relative z-10 min-h-[calc(100vh-8.5rem)] flex items-center py-10 sm:py-14">
        <div className="w-full grid gap-10 lg:gap-12 lg:grid-cols-[1.4fr,1fr] items-center">
          {/* LEFT: Hero content */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Available for Internships &amp; Entry-Level Roles
            </div>

            <div className="space-y-3">
              <p className="text-sm font-mono text-[var(--accent)] tracking-wider">
                <span className="text-slate-500">{'>'}</span> hello_world.init()
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                <span className="text-white">Govind V </span>
                <span className="gradient-text">Kartha</span>
              </h1>

              <div className="h-9 sm:h-10 flex items-center">
                <p className="text-lg sm:text-2xl font-semibold text-slate-200">
                  <span key={roleIndex} className="animate-fade-up inline-block">
                    {ROTATING_ROLES[roleIndex]}
                  </span>
                  <span className="ml-1 text-[var(--accent)] animate-blink">_</span>
                </p>
              </div>
            </div>

            <p className="text-slate-200 text-lg sm:text-xl max-w-2xl text-balance leading-snug font-medium">
              Cybersecurity by training. Quantum by curiosity. Both, in practice.
            </p>

            <div className="flex flex-wrap gap-2.5">
              <span className="badge-cyber"><Shield className="w-3.5 h-3.5" /> Cybersecurity</span>
              <span className="badge-quantum"><Atom className="w-3.5 h-3.5" /> Quantum Computing</span>
              <span className="terminal-tag">Qiskit</span>
              <span className="terminal-tag">Python</span>
              <span className="terminal-tag">Kali Linux</span>
            </div>

            {/* CV highlight card */}
            <div className="cv-highlight">
              <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="glow-ring flex-shrink-0">
                    <div className="h-12 w-12 rounded-xl bg-[var(--bg)] border border-[var(--border-strong)] flex items-center justify-center">
                      <FileText className="w-5 h-5 text-[var(--accent)]" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Resume</p>
                    <p className="text-base sm:text-lg font-semibold text-white">Govind V Kartha</p>
                    <p className="text-xs text-slate-400 mt-0.5">PDF · Updated recently</p>
                  </div>
                </div>
                <div className="sm:ml-auto flex gap-2">
                  <a
                    href="/cv/Govind_V_Kartha_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <Download size={16} />
                    Download
                  </a>
                  <a
                    href="/cv/Govind_V_Kartha_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <button
                type="button"
                onClick={() => onNavigate('projects')}
                className="btn-ghost"
              >
                <ArrowRight size={16} />
                View Projects
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="btn-ghost"
              >
                <Mail size={16} />
                Get in Touch
              </button>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://github.com/Govind-v-kartha"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring h-10 w-10 rounded-lg border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg-elevated)_88%,transparent)] text-slate-300 hover:text-[var(--accent)] hover:border-[var(--accent-soft-border)] inline-flex items-center justify-center transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/govind-v-kartha"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring h-10 w-10 rounded-lg border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg-elevated)_88%,transparent)] text-slate-300 hover:text-[var(--accent)] hover:border-[var(--accent-soft-border)] inline-flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:knvgovind@gmail.com"
                className="focus-ring h-10 w-10 rounded-lg border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg-elevated)_88%,transparent)] text-slate-300 hover:text-[var(--accent)] hover:border-[var(--accent-soft-border)] inline-flex items-center justify-center transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT: Photo + stats */}
          <div className="space-y-5">
            <div className="relative max-w-sm mx-auto w-full animate-float">
              <div className="glow-ring rounded-2xl">
                <div className="rounded-2xl border border-[var(--border-strong)] bg-[color-mix(in_srgb,var(--bg-elevated)_92%,transparent)] p-2.5">
                  <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] aspect-square relative">
                    {isPhotoLoaded ? (
                      <img
                        src="/profile.jpg"
                        alt="Govind V Kartha"
                        className="h-full w-full object-cover"
                        onError={() => setIsPhotoLoaded(false)}
                      />
                    ) : (
                      <div className="placeholder-gradient h-full w-full flex items-center justify-center text-slate-300 text-sm">
                        Profile image unavailable
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--bg)]/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto w-full">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="stat-tile">
                  <p className="stat-value">{stat.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
