import { useEffect, useState } from 'react'
import { Github, Linkedin, Download, Mail, Sparkles } from 'lucide-react'

type SectionId = 'home' | 'about' | 'skills' | 'services' | 'projects' | 'certificates' | 'contact'

interface HomePanelProps {
  onNavigate: (section: SectionId) => void
}

const ROLE_CYCLE = [
  'Cybersecurity Graduate',
  'Offensive Security Learner',
  'Detection Analysis Learner',
  'Quantum Security Explorer',
]

export default function HomePanel({ onNavigate }: HomePanelProps) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [typedRole, setTypedRole] = useState('')
  const [typingForward, setTypingForward] = useState(true)
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(true)

  useEffect(() => {
    const currentRole = ROLE_CYCLE[roleIndex]
    const isCompleted = typedRole.length === currentRole.length

    const timer = setTimeout(
      () => {
        if (typingForward) {
          if (isCompleted) {
            setTypingForward(false)
            return
          }
          setTypedRole(currentRole.slice(0, typedRole.length + 1))
        } else {
          if (typedRole.length === 0) {
            setTypingForward(true)
            setRoleIndex((prev) => (prev + 1) % ROLE_CYCLE.length)
            return
          }
          setTypedRole(currentRole.slice(0, typedRole.length - 1))
        }
      },
      typingForward ? 62 : 38
    )

    return () => clearTimeout(timer)
  }, [roleIndex, typedRole, typingForward])

  return (
    <div className="panel-shell min-h-[calc(100vh-7.5rem)]">
      <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 22% 18%, color-mix(in srgb, var(--accent) 32%, transparent), transparent 32%), radial-gradient(circle at 78% 34%, color-mix(in srgb, var(--focus) 24%, transparent), transparent 28%)',
        }}
        aria-hidden="true"
      />

      <div className="panel-content relative z-10 min-h-[calc(100vh-8.5rem)] flex items-center">
        <div className="w-full grid gap-8 lg:grid-cols-[1.4fr,1fr] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" style={{ animation: 'pulse-dot 1.5s ease-in-out infinite' }} />
              Available for Opportunities
            </div>

            <div>
              <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight text-balance">Hi, I'm Govind V Kartha</h1>
              <p className="mt-3 text-xl sm:text-2xl font-semibold text-[var(--accent)] min-h-[2.2rem]">
                {typedRole}
                <span className="text-[color-mix(in_srgb,var(--accent)_70%,transparent)]">|</span>
              </p>
            </div>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl text-balance">
              Building practical cybersecurity capability through offensive testing projects, detection-driven analysis,
              and research-oriented exploration of quantum and post-quantum security concepts.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="focus-ring inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-hover)] glow-accent transition-all duration-300"
              >
                <Mail size={18} />
                Let's Connect
              </button>

              <a
                href="/cv/Govind_V_Kartha_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--accent-soft-border)] text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-all duration-300"
              >
                <Mail size={18} />
                View Resume
              </a>

              <a
                href="/cv/Govind_V_Kartha_Resume.pdf"
                download="Govind_V_Kartha_Resume.pdf"
                className="focus-ring inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] text-slate-300 hover:text-white hover:border-[var(--accent-soft-border)] transition-all duration-300"
              >
                <Download size={18} />
                Download Resume
              </a>

              <button
                type="button"
                onClick={() => onNavigate('projects')}
                className="focus-ring inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] text-slate-300 hover:text-white hover:border-[var(--accent-soft-border)] transition-all duration-300"
              >
                <Sparkles size={18} />
                View Projects
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
            <div className="relative aspect-square">
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--accent-soft-border)]"
                style={{ animation: 'spin-ring 12s linear infinite' }}
                aria-hidden="true"
              />

              <div className="absolute inset-[14px] rounded-full border-[3px] border-[var(--accent)] overflow-hidden bg-[var(--bg-elevated)]">
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
