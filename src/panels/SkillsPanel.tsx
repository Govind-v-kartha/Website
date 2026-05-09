import { Atom, Code2, Shield, TerminalSquare } from 'lucide-react'

type SkillItem = {
  label: string
  level: 'Advanced' | 'Intermediate' | 'Foundational'
}

type GroupAccent = 'cyber' | 'quantum'

type SkillGroup = {
  title: string
  icon: typeof Shield
  accent: GroupAccent
  items: SkillItem[]
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Security Practice',
    icon: Shield,
    accent: 'cyber',
    items: [
      { label: 'Web Application Security Testing', level: 'Advanced' },
      { label: 'Vulnerability Assessment', level: 'Advanced' },
      { label: 'Network Security Analysis', level: 'Advanced' },
      { label: 'Detection & SOC Workflow Support', level: 'Intermediate' },
      { label: 'Digital Forensics Fundamentals', level: 'Intermediate' },
    ],
  },
  {
    title: 'Tools & Programming',
    icon: TerminalSquare,
    accent: 'cyber',
    items: [
      { label: 'Kali Linux', level: 'Advanced' },
      { label: 'Nmap & Recon Tooling', level: 'Advanced' },
      { label: 'Wireshark', level: 'Advanced' },
      { label: 'Burp Suite', level: 'Intermediate' },
      { label: 'Python for Security Automation', level: 'Advanced' },
    ],
  },
  {
    title: 'Quantum Computing & Algorithms',
    icon: Atom,
    accent: 'quantum',
    items: [
      { label: 'Quantum Algorithm Design (Grover, Deutsch–Jozsa, QFT)', level: 'Intermediate' },
      { label: 'Qiskit Circuit Engineering & AerSimulator', level: 'Intermediate' },
      { label: 'Quantum Image Encoding (NEQR) & Scrambling', level: 'Intermediate' },
      { label: 'Post-Quantum Cryptography (Kyber, Dilithium)', level: 'Intermediate' },
      { label: 'Quantum Key Distribution (QKD) Protocols', level: 'Foundational' },
      { label: 'Hybrid Classical–Quantum System Design', level: 'Intermediate' },
    ],
  },
]

const LEVEL_STYLES: Record<SkillItem['level'], string> = {
  Advanced: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/30',
  Intermediate: 'bg-amber-500/10 text-amber-200 border-amber-400/25',
  Foundational: 'bg-sky-500/10 text-sky-200 border-sky-400/25',
}

export default function SkillsPanel() {
  const totalSkills = SKILL_GROUPS.reduce((sum, group) => sum + group.items.length, 0)
  const advancedSkills = SKILL_GROUPS.reduce(
    (sum, group) => sum + group.items.filter((item) => item.level === 'Advanced').length,
    0
  )

  return (
    <div className="panel-shell">
      <div className="panel-header">
        <div className="panel-header-row">
          <div className="panel-header-icon">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="panel-title">Skills</h1>
            <p className="panel-subtitle">What I actually use. Levels reflect how comfortable I am, not how often I list them.</p>
          </div>
        </div>
      </div>

      <div className="panel-content space-y-6">
        <div className="grid gap-3 sm:grid-cols-3">
          <article className="stat-tile">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Total Skills</p>
            <p className="stat-value mt-1">{totalSkills}</p>
          </article>
          <article className="stat-tile">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Advanced Level</p>
            <p className="stat-value mt-1">{advancedSkills}</p>
          </article>
          <article className="stat-tile">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Currently Learning</p>
            <p className="mt-1 text-sm text-slate-300 leading-snug">Cloud security, threat hunting, deeper Qiskit work</p>
          </article>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => {
            const Icon = group.icon
            const isQuantum = group.accent === 'quantum'
            return (
              <section
                key={group.title}
                className={`section-card overflow-hidden ${
                  isQuantum ? 'project-card-quantum' : ''
                }`}
              >
                <div
                  className="section-header"
                  style={{
                    background: isQuantum
                      ? 'linear-gradient(to right, rgba(167,139,250,0.10), transparent)'
                      : 'linear-gradient(to right, rgba(34,211,238,0.10), transparent)',
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="p-2 rounded-md border"
                      style={{
                        borderColor: isQuantum ? 'var(--accent-2-border)' : 'var(--accent-soft-border)',
                        background: isQuantum ? 'var(--accent-2-soft)' : 'var(--accent-soft)',
                        color: isQuantum ? 'var(--accent-2)' : 'var(--accent)',
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <h2 className="section-title">{group.title}</h2>
                  </div>
                </div>

                <div className="section-card-content space-y-2.5">
                  {group.items.map((item) => (
                    <article
                      key={item.label}
                      className="rounded-lg border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg-elevated)_88%,transparent)] px-3 py-2.5 flex items-center justify-between gap-3"
                    >
                      <p className="text-sm text-slate-200 leading-snug">{item.label}</p>
                      <span className={`text-[11px] border px-2 py-0.5 rounded-md flex-shrink-0 ${LEVEL_STYLES[item.level]}`}>
                        {item.level}
                      </span>
                    </article>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
