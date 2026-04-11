import { HardDrive, Monitor, Search, Shield, FileSearch, Users } from 'lucide-react'

const SERVICES = [
  {
    title: 'Penetration Testing',
    icon: Shield,
    description:
      'Support ethical security testing engagements across web and network surfaces with structured validation and reporting.',
  },
  {
    title: 'Vulnerability Assessment',
    icon: Search,
    description:
      'Identify and prioritize security weaknesses using reproducible testing workflows and risk-oriented documentation.',
  },
  {
    title: 'SOC Operations Support',
    icon: Monitor,
    description:
      'Assist monitoring and triage workflows through alert review, event correlation, and investigation support.',
  },
  {
    title: 'Security Reviews',
    icon: FileSearch,
    description:
      'Assist security-focused reviews aligned to recognized frameworks and practical hardening recommendations.',
  },
  {
    title: 'Digital Forensics Assistance',
    icon: HardDrive,
    description:
      'Support evidence collection and incident-focused analysis for security investigations in controlled scope.',
  },
  {
    title: 'Security Awareness Support',
    icon: Users,
    description:
      'Contribute to user-focused awareness content and secure-behavior guidance to reduce common attack exposure.',
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
            <h1 className="panel-title">Security Areas I Can Support</h1>
            <p className="panel-subtitle">Entry-level cybersecurity support for assessments, detection validation, and secure workflow improvement.</p>
          </div>
        </div>
      </div>

      <div className="panel-content">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                className="section-card section-card-content bg-[color-mix(in_srgb,var(--surface)_80%,transparent)] backdrop-blur-sm hover:-translate-y-2 hover:shadow-[0_20px_45px_var(--accent-glow)]"
              >
                <div className="icon-accent w-fit mb-4 transition-all duration-300">
                  <Icon className="w-5 h-5 text-slate-200" />
                </div>
                <h2 className="section-title mb-2">{service.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
