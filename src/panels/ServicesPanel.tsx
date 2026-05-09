import { Atom, FileSearch, HardDrive, Monitor, Search, Shield } from 'lucide-react'

const CONTRIBUTION_AREAS = [
  {
    title: 'Web & Network Penetration Testing',
    icon: Shield,
    description: 'Scope, execute, and document VAPT engagements end-to-end — from recon to validated findings to prioritized remediation.',
  },
  {
    title: 'Vulnerability Validation & Reporting',
    icon: Search,
    description: 'Reproduce findings with reliable PoCs, assess real-world impact, and write reports engineers can act on without ambiguity.',
  },
  {
    title: 'SOC Monitoring & Alert Triage',
    icon: Monitor,
    description: 'Investigate alerts, correlate events across IDS/EDR/host telemetry, and hand off cases with a clear evidence trail.',
  },
  {
    title: 'Security Configuration Review',
    icon: FileSearch,
    description: 'Audit infrastructure, applications, and workflows against CIS, OWASP, and NIST baselines — and close the gaps.',
  },
  {
    title: 'Digital Forensics & Incident Response',
    icon: HardDrive,
    description: 'Preserve evidence, perform first-pass analysis, and contribute to structured IR playbooks during real incident exercises.',
  },
  {
    title: 'Post-Quantum & Quantum Security R&D',
    icon: Atom,
    description: 'Design Qiskit circuits, simulate QKD protocols, and prototype hybrid classical–quantum cryptosystems for the post-quantum era.',
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
            <h1 className="panel-title">How I Can Contribute</h1>
            <p className="panel-subtitle">Where I add value on day one — from offensive testing to SOC operations to quantum-era cryptography research.</p>
          </div>
        </div>
      </div>

      <div className="panel-content">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONTRIBUTION_AREAS.map((area) => {
            const Icon = area.icon

            return (
              <article
                key={area.title}
                className="section-card section-card-content bg-[color-mix(in_srgb,var(--surface)_80%,transparent)]"
              >
                <div className="icon-accent w-fit mb-4">
                  <Icon className="w-5 h-5 text-slate-200" />
                </div>
                <h2 className="section-title mb-2 leading-snug">{area.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed">{area.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
