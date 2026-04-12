import { FileSearch, HardDrive, Monitor, Search, Shield, Users } from 'lucide-react'

const CONTRIBUTION_AREAS = [
  {
    title: 'Web and Network Security Testing Support',
    icon: Shield,
    description: 'Support scoped testing activities, document findings clearly, and help teams prioritize practical fixes.',
  },
  {
    title: 'Vulnerability Validation and Reporting',
    icon: Search,
    description: 'Assist in reproducing vulnerabilities and preparing structured reports with severity context and remediation notes.',
  },
  {
    title: 'SOC and Monitoring Workflow Support',
    icon: Monitor,
    description: 'Contribute to alert triage, event correlation, and investigation handoff with clear evidence tracking.',
  },
  {
    title: 'Security Review Assistance',
    icon: FileSearch,
    description: 'Help review configurations and workflows against baseline security practices and hardening checklists.',
  },
  {
    title: 'Forensics and Incident Investigation Assistance',
    icon: HardDrive,
    description: 'Assist with evidence collection and first-pass analysis during controlled incident response exercises.',
  },
  {
    title: 'Security Awareness and Documentation Support',
    icon: Users,
    description: 'Create concise security guidance and awareness materials that improve secure day-to-day behavior.',
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
            <p className="panel-subtitle">Practical entry-level support areas aligned to junior cybersecurity roles.</p>
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
