import { useState } from 'react'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'

type SectionId = 'home' | 'about' | 'skills' | 'services' | 'projects' | 'certificates' | 'contact'

interface HomePanelProps {
  onNavigate: (section: SectionId) => void
}

export default function HomePanel({ onNavigate }: HomePanelProps) {
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(true)

  return (
    <div className="panel-shell min-h-[calc(100vh-7.5rem)]">
      <div className="panel-content relative z-10 min-h-[calc(100vh-8.5rem)] flex items-center">
        <div className="w-full grid gap-8 lg:grid-cols-[1.35fr,1fr] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/8 px-3 py-1.5 text-xs text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for Internships &amp; Entry-Level Roles
            </div>

            <div>
              <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight text-balance">Govind V Kartha</h1>
              <p className="mt-3 text-xl sm:text-2xl font-semibold text-[var(--accent)]">Cybersecurity Analyst &amp; Quantum Security Researcher</p>
            </div>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl text-balance leading-relaxed">
              I secure today's systems and prepare them for tomorrow's threats. I combine hands-on cybersecurity work —
              VAPT, network forensics, and SOC-style investigation — with applied research in quantum computing and
              post-quantum cryptography. I have shipped working prototypes in both domains, including a quantum-secure
              email client and a hybrid AI-quantum image encryption system.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/cv/Govind_V_Kartha_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-hover)] transition-all duration-300"
              >
                <Download size={18} />
                View Resume
              </a>

              <button
                type="button"
                onClick={() => onNavigate('projects')}
                className="focus-ring inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--accent-soft-border)] text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-all duration-300"
              >
                <ArrowRight size={18} />
                View Projects
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="focus-ring inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] text-slate-300 hover:text-white hover:border-[var(--accent-soft-border)] transition-all duration-300"
              >
                <Mail size={18} />
                Contact
              </button>
            </div>

            <div className="flex items-center gap-2.5">
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
            </div>
          </div>

          <div className="relative max-w-sm mx-auto w-full">
            <div className="rounded-2xl border border-[var(--accent-soft-border)] bg-[color-mix(in_srgb,var(--bg-elevated)_92%,transparent)] p-3">
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] aspect-square">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
