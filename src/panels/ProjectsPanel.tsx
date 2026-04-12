import { useMemo, useState } from 'react'
import { Briefcase, Globe, Lock, Radar, Shield } from 'lucide-react'
import { Button } from '../components/Button'

type ProjectCategory = 'All' | 'Application Security' | 'Network & Forensics' | 'Research'

type ProjectItem = {
  title: string
  category: Exclude<ProjectCategory, 'All'>
  tags: string[]
  problem: string
  approach: string
  outcome: string
  githubUrl?: string
  liveUrl?: string
  publicNote?: string
  icon: typeof Shield
}

const FILTERS: ProjectCategory[] = ['All', 'Application Security', 'Network & Forensics', 'Research']

const PROJECTS: ProjectItem[] = [
  {
    title: 'PentaVault: Automated VAPT Security Suite',
    category: 'Application Security',
    tags: ['Python', 'FastAPI', 'Selenium', 'Nmap'],
    problem: 'Need a repeatable workflow for reconnaissance, testing, and reporting across web targets.',
    approach: 'Built a structured VAPT platform that organizes test phases and captures findings consistently.',
    outcome: 'Improved repeatability of assessments and reduced reporting friction for learning projects.',
    githubUrl: 'https://github.com/Govind-v-kartha/PentaVault',
    icon: Shield,
  },
  {
    title: 'Security Testing and Analysis Lab',
    category: 'Network & Forensics',
    tags: ['Kali Linux', 'Suricata', 'Wazuh', 'Wireshark'],
    problem: 'Needed a controlled environment to practice attacker simulation and defensive telemetry analysis.',
    approach: 'Created a lab workflow for attack simulation, alert triage, and host/network visibility validation.',
    outcome: 'Built stronger evidence-driven investigation habits for SOC-oriented scenarios.',
    publicNote: 'Detailed walkthrough available on request (lab setup maintained as private).',
    icon: Radar,
  },
  {
    title: 'OSINT Attack Surface Profiling',
    category: 'Application Security',
    tags: ['OSINT', 'Amass', 'Shodan'],
    problem: 'External assets were difficult to map quickly before security assessment planning.',
    approach: 'Implemented a passive reconnaissance process to inventory exposed assets and prioritize scope.',
    outcome: 'Improved pre-assessment targeting and reduced noise during active testing phases.',
    publicNote: 'Project artifacts are private to avoid exposing target discovery workflows.',
    icon: Globe,
  },
  {
    title: 'Hybrid AI-Quantum Image Encryption',
    category: 'Research',
    tags: ['Qiskit', 'AES-256-GCM', 'OpenCV'],
    problem: 'Explored how quantum-classical ideas could be applied to secure image handling experiments.',
    approach: 'Built a research prototype combining AI-assisted ROI handling with hybrid encryption concepts.',
    outcome: 'Produced a proof-of-concept pipeline and documented practical constraints for future work.',
    publicNote: 'Research summary can be shared during interviews.',
    icon: Lock,
  },
  {
    title: 'QMail: Secure Communication Prototype',
    category: 'Research',
    tags: ['Post-Quantum Concepts', 'QKD Simulation'],
    problem: 'Wanted to study resilience of messaging design against future cryptographic shifts.',
    approach: 'Developed a prototype communication model incorporating post-quantum security concepts.',
    outcome: 'Strengthened understanding of secure-channel design trade-offs in emerging threat models.',
    githubUrl: 'https://github.com/Govind-v-kartha/Qmail',
    icon: Lock,
  },
  {
    title: 'MyShark: Network Traffic Analysis Tool',
    category: 'Network & Forensics',
    tags: ['Python', 'Packet Analysis', 'Network Triage'],
    problem: 'Needed a lightweight way to review suspicious packet patterns during analysis practice.',
    approach: 'Built a Python-driven analysis utility with focused traffic inspection capabilities.',
    outcome: 'Improved speed and consistency of first-pass traffic triage in lab scenarios.',
    liveUrl: 'https://myshark.vercel.app/',
    icon: Briefcase,
  },
]

export default function ProjectsPanel() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All')

  const visibleProjects = useMemo(
    () =>
      PROJECTS.filter((project) => {
        if (activeFilter === 'All') return true
        return project.category === activeFilter
      }),
    [activeFilter]
  )

  return (
    <div className="panel-shell">
      <div className="panel-header">
        <div className="panel-header-row">
          <div className="panel-header-icon">
            <Briefcase className="w-6 h-6" />
          </div>
          <div>
            <h1 className="panel-title">Project Portfolio</h1>
            <p className="panel-subtitle">Selected projects that demonstrate practical security testing, analysis, and research capability.</p>
          </div>
        </div>
      </div>

      <div className="panel-content space-y-5">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`focus-ring px-3 py-1.5 rounded-md text-sm border transition-all duration-300 ${
                  isActive
                    ? 'bg-[var(--accent-soft)] text-white border-[var(--accent-soft-border)]'
                    : 'bg-[color-mix(in_srgb,var(--bg-elevated)_86%,transparent)] text-slate-300 border-[var(--border)] hover:text-white hover:border-[var(--accent-soft-border)]'
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => {
            const Icon = project.icon

            return (
              <article key={project.title} className="section-card section-card-content space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="icon-accent">
                    <Icon className="w-4 h-4 text-[var(--accent)]" />
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-[color-mix(in_srgb,var(--bg-elevated)_92%,transparent)] border border-[var(--border)] text-slate-200">
                    {project.category}
                  </span>
                </div>

                <h2 className="section-title leading-snug">{project.title}</h2>

                <div className="space-y-2 text-sm">
                  <p className="text-slate-300"><span className="text-slate-400">Problem:</span> {project.problem}</p>
                  <p className="text-slate-300"><span className="text-slate-400">Approach:</span> {project.approach}</p>
                  <p className="text-slate-300"><span className="text-slate-400">Outcome:</span> {project.outcome}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="meta-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.liveUrl && (
                    <Button variant="secondary" size="sm" onClick={() => window.open(project.liveUrl ?? '', '_blank', 'noopener,noreferrer')}>
                      Live Demo
                    </Button>
                  )}

                  {project.githubUrl && (
                    <Button variant="tertiary" size="sm" onClick={() => window.open(project.githubUrl ?? '', '_blank', 'noopener,noreferrer')}>
                      Source Code
                    </Button>
                  )}
                </div>

                {!project.liveUrl && !project.githubUrl && project.publicNote && <p className="text-xs text-slate-400">{project.publicNote}</p>}
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
