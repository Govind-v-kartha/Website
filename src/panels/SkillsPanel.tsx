import { Atom, Code2, Shield, TerminalSquare } from 'lucide-react'

type SkillItem = {
  label: string
  level: 'Advanced' | 'Intermediate' | 'Foundational'
}

const SKILL_GROUPS: Array<{ title: string; icon: typeof Shield; items: SkillItem[] }> = [
  {
    title: 'Security Practice',
    icon: Shield,
    items: [
      { label: 'Web Application Security Testing', level: 'Advanced' },
      { label: 'Vulnerability Assessment', level: 'Advanced' },
      { label: 'Network Security Analysis', level: 'Advanced' },
      { label: 'Detection and SOC Workflow Support', level: 'Intermediate' },
      { label: 'Digital Forensics Fundamentals', level: 'Intermediate' },
    ],
  },
  {
    title: 'Tools and Programming',
    icon: TerminalSquare,
    items: [
      { label: 'Kali Linux', level: 'Advanced' },
      { label: 'Nmap and Recon Tooling', level: 'Advanced' },
      { label: 'Wireshark', level: 'Advanced' },
      { label: 'Burp Suite', level: 'Intermediate' },
      { label: 'Python for Security Automation', level: 'Advanced' },
    ],
  },
  {
    title: 'Quantum Computing & Post-Quantum Security',
    icon: Atom,
    items: [
      { label: 'Quantum Computing Fundamentals', level: 'Intermediate' },
      { label: 'Qiskit and Quantum Circuit Simulation', level: 'Intermediate' },
      { label: 'Post-Quantum Cryptography Concepts', level: 'Intermediate' },
      { label: 'Quantum Key Distribution (QKD) Simulation', level: 'Foundational' },
      { label: 'Hybrid Classical-Quantum Security Design', level: 'Foundational' },
    ],
  },
]

const LEVEL_STYLES: Record<SkillItem['level'], string> = {
  Advanced: 'bg-emerald-500/10 text-emerald-200 border-emerald-400/30',
  Intermediate: 'bg-slate-500/10 text-slate-200 border-slate-400/25',
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
            <h1 className="panel-title">Technical Competencies</h1>
            <p className="panel-subtitle">A working stack across offensive security, defensive operations, and quantum cryptography.</p>
          </div>
        </div>
      </div>

      <div className="panel-content space-y-6">
        <div className="grid gap-3 sm:grid-cols-3">
          <article className="section-card section-card-content">
            <p className="section-label">Total Skills</p>
            <p className="mt-1 text-2xl font-semibold text-white">{totalSkills}</p>
          </article>

          <article className="section-card section-card-content">
            <p className="section-label">Advanced</p>
            <p className="mt-1 text-2xl font-semibold text-white">{advancedSkills}</p>
          </article>

          <article className="section-card section-card-content">
            <p className="section-label">Current Focus</p>
            <p className="mt-1 text-sm text-slate-300">Security operations, application testing, and post-quantum cryptography</p>
          </article>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {SKILL_GROUPS.map((group) => {
            const Icon = group.icon
            return (
              <section key={group.title} className="section-card overflow-hidden">
                <div className="section-header">
                  <div className="flex items-center gap-2.5">
                    <div className="icon-accent">
                      <Icon className="w-4 h-4 text-[var(--accent)]" />
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
                      <span className={`text-xs border px-2 py-1 rounded-md ${LEVEL_STYLES[item.level]}`}>{item.level}</span>
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
