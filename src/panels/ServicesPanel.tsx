import { Atom, FileSearch, HardDrive, Monitor, Search, Shield } from 'lucide-react'

const CONTRIBUTION_AREAS = [
  {
    title: 'Web & Network Penetration Testing',
    icon: Shield,
    description: 'Run pentests on web apps and networks. Find issues, reproduce them, write reports a developer can actually fix from.',
  },
  {
    title: 'Vulnerability Validation & Reporting',
    icon: Search,
    description: 'Verify findings with working PoCs and explain the impact in plain terms — not just CVSS numbers.',
  },
  {
    title: 'SOC Monitoring & Alert Triage',
    icon: Monitor,
    description: 'Work through alerts, follow the evidence across IDS, EDR, and host logs, and hand off cases that the next analyst can pick up cleanly.',
  },
  {
    title: 'Security Configuration Review',
    icon: FileSearch,
    description: 'Check setups against CIS, OWASP, and NIST baselines and flag what needs fixing — with reasons, not just checklists.',
  },
  {
    title: 'Digital Forensics & Incident Response',
    icon: HardDrive,
    description: 'Preserve evidence, do first-pass analysis, and help build IR playbooks that hold up under pressure.',
  },
  {
    title: 'Quantum Computing & Cryptography',
    icon: Atom,
    description: 'Write Qiskit circuits, work with quantum image encoding, and use post-quantum crypto (Kyber, Dilithium) in real projects.',
  },
]

export default function ServicesPanel() {
  return (
    <div className="panel-shell">
      <div className="panel-header">
        <div className="panel-header-row">
          <div className="panel-header-icon">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="panel-title">What I Can Do</h1>
            <p className="panel-subtitle">If you're hiring for any of these, I can show up ready to work.</p>
          </div>
        </div>
      </div>

      <div className="panel-content">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONTRIBUTION_AREAS.map((area) => {
            const Icon = area.icon
            const isQuantum = area.icon === Atom

            return (
              <article
                key={area.title}
                className={`project-card section-card-content ${isQuantum ? 'project-card-quantum' : ''}`}
              >
                <div
                  className="p-2.5 rounded-lg border w-fit mb-4"
                  style={{
                    borderColor: isQuantum ? 'var(--accent-2-border)' : 'var(--accent-soft-border)',
                    background: isQuantum ? 'var(--accent-2-soft)' : 'var(--accent-soft)',
                    color: isQuantum ? 'var(--accent-2)' : 'var(--accent)',
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-base font-bold text-white mb-2 leading-snug">{area.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed">{area.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
