import { useMemo, useState } from 'react'
import { Briefcase, Code2, ExternalLink, Github, Globe, Lock, Radar, Shield } from 'lucide-react'
import { Button } from '../components/Button'

type ProjectCategory = 'All' | 'Web Security' | 'Network' | 'Forensics' | 'Research'

type ProjectItem = {
  title: string
  category: Exclude<ProjectCategory, 'All'>
  tags: string[]
  description: string
  image?: string | null
  github?: string | null
  live?: string | null
  logoSrc?: string | null
  logoAlt?: string
  icon: typeof Shield
}

const FILTERS: ProjectCategory[] = ['All', 'Web Security', 'Network', 'Forensics', 'Research']

const PROJECTS: ProjectItem[] = [
  {
    title: 'PentaVault: Automated VAPT Security Suite',
    category: 'Web Security',
    tags: ['Python', 'FastAPI', 'Selenium', 'Nmap'],
    description: 'Structured VAPT workflow platform covering reconnaissance, testing, and reporting support.',
    image: null,
    github: 'https://github.com/Govind-v-kartha/PentaVault',
    logoSrc: '/images/projects/github.svg',
    logoAlt: 'GitHub platform logo',
    icon: Shield,
  },
  {
    title: 'Security Testing & Analysis Lab',
    category: 'Network',
    tags: ['Kali Linux', 'Suricata', 'Wazuh', 'Wireshark'],
    description: 'Controlled adversary simulation and defensive visibility validation across host and network telemetry.',
    image: null,
    github: null,
    icon: Radar,
  },
  {
    title: 'OSINT-Based Attack Surface Profiling',
    category: 'Web Security',
    tags: ['OSINT', 'Amass', 'Shodan'],
    description: 'Passive reconnaissance workflow for asset exposure mapping and pre-assessment prioritization.',
    image: null,
    github: null,
    icon: Globe,
  },
  {
    title: 'Hybrid AI-Quantum Satellite Image Encryption',
    category: 'Research',
    tags: ['Qiskit', 'AES-256-GCM', 'OpenCV'],
    description: 'Applied quantum-classical image encryption experiment with AI-assisted ROI workflow.',
    image: null,
    github: null,
    icon: Lock,
  },
  {
    title: 'QMail: Secure Communication Prototype',
    category: 'Research',
    tags: ['Post-Quantum Concepts', 'QKD Simulation'],
    description: 'Prototype secure messaging design exploring resilience against future cryptographic threats.',
    image: null,
    github: 'https://github.com/Govind-v-kartha/Qmail',
    logoSrc: '/images/projects/github.svg',
    logoAlt: 'GitHub platform logo',
    icon: Code2,
  },
  {
    title: 'MyShark: Network Traffic Analysis Tool',
    category: 'Forensics',
    tags: ['Python', 'Packet Analysis', 'Network Triage'],
    description: 'Python-based packet analysis utility for suspicious traffic review and investigation assistance.',
    image: null,
    github: 'https://myshark.vercel.app/',
    live: 'https://myshark.vercel.app/',
    logoSrc: '/images/projects/vercel.svg',
    logoAlt: 'Vercel platform logo',
    icon: Briefcase,
  },
]

export default function ProjectsPanel() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All')
  const [hiddenImages, setHiddenImages] = useState<Record<string, boolean>>({})
  const [hiddenLogos, setHiddenLogos] = useState<Record<string, boolean>>({})

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
            <h1 className="panel-title">Hands-on Project Portfolio</h1>
            <p className="panel-subtitle">Selected learning projects across offensive testing practice, detection workflows, and quantum-security exploration.</p>
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
                    ? 'bg-[#38BDF81A] text-white border-[#38BDF866]'
                    : 'bg-[#0B1020]/70 text-slate-300 border-[#1E293B] hover:text-white hover:border-[#38BDF866]'
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
            const isImageVisible = project.image && !hiddenImages[project.title]
            const showLogoCue = project.logoSrc && !hiddenLogos[project.title]

            return (
              <article key={project.title} className="section-card overflow-hidden transition-all duration-300">
                <div className="relative h-44 border-b border-[#1E293B]">
                  {isImageVisible ? (
                    <img
                      src={project.image || ''}
                      alt={project.title}
                      className="h-full w-full object-cover"
                      onError={() => setHiddenImages((prev) => ({ ...prev, [project.title]: true }))}
                    />
                  ) : (
                    <div className="placeholder-gradient h-full w-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-[#38BDF8]" />
                    </div>
                  )}

                  <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded bg-[#0B1020]/85 border border-[#1E293B] text-slate-200">
                    {project.category}
                  </span>

                  {showLogoCue && (
                    <div className="absolute top-3 right-3 rounded bg-[#0B1020]/85 border border-[#1E293B] px-2 py-1">
                      <img
                        src={project.logoSrc || ''}
                        alt={project.logoAlt ?? 'Project platform logo'}
                        className="h-4 w-16 object-contain"
                        onError={() => setHiddenLogos((prev) => ({ ...prev, [project.title]: true }))}
                      />
                    </div>
                  )}
                </div>

                <div className="section-card-content space-y-3">
                  <h2 className="section-title leading-snug">{project.title}</h2>
                  <p className="text-sm text-slate-400">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="meta-chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-1">
                    {project.live && (
                      <Button
                        variant="secondary"
                        size="sm"
                        icon={ExternalLink}
                        onClick={() => window.open(project.live ?? project.github ?? '', '_blank', 'noopener,noreferrer')}
                      >
                        View Details
                      </Button>
                    )}

                    {project.github && (
                      <Button
                        variant="tertiary"
                        size="sm"
                        icon={Github}
                        onClick={() => window.open(project.github ?? '', '_blank', 'noopener,noreferrer')}
                      >
                        GitHub
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
