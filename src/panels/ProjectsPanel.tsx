import { useMemo, useState } from 'react'
import { Briefcase, Globe, Lock, Radar, Shield } from 'lucide-react'
import { Button } from '../components/Button'

type ProjectCategory = 'All' | 'Application Security' | 'Network & Forensics' | 'Quantum Security'

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

const FILTERS: ProjectCategory[] = ['All', 'Application Security', 'Network & Forensics', 'Quantum Security']

const PROJECTS: ProjectItem[] = [
  {
    title: 'QuantMail — Quantum-Secure Email Client',
    category: 'Quantum Security',
    tags: ['Python', 'Flask', 'QKD', 'Post-Quantum Crypto', 'AES', 'Vercel'],
    problem: 'Standard email encryption breaks the moment a cryptographically relevant quantum computer arrives — yet most users have no migration path.',
    approach: 'Built a full quantum-secure email client integrating four security tiers: quantum one-time pad (perfect secrecy), quantum-aided AES, post-quantum cryptography (Kyber/Dilithium), and classical AES/RSA — all behind real SMTP/IMAP delivery.',
    outcome: 'Shipped a live, deployable Flask application on Vercel with a working Quantum Key Manager client, encrypted attachments, and an admin console — proving practical quantum-era email security end-to-end.',
    liveUrl: 'https://quantmail.vercel.app/',
    icon: Lock,
  },
  {
    title: 'Hybrid AI-Quantum Satellite Image Encryption',
    category: 'Quantum Security',
    tags: ['Qiskit', 'AerSimulator', 'NEQR', 'Vision Transformer', 'AES-256-GCM', 'Python'],
    problem: 'Sensitive satellite imagery needs strong encryption, but uniform encryption wastes effort on low-value pixels and ignores the post-quantum threat to classical ciphers.',
    approach: 'Engineered a dual-layer pipeline: a DOFA Vision Transformer (FlexiMo) segments regions of interest, then 32×32 ROI blocks are encrypted with NEQR quantum circuits in Qiskit while background regions use AES-256-GCM, fused into a single recoverable output.',
    outcome: 'Achieved pixel-perfect reconstruction (PSNR ∞ dB, SSIM 1.0000) across the full encrypt → decrypt → verify workflow, proving zero data loss while applying real quantum encoding to high-value image regions.',
    githubUrl: 'https://github.com/Govind-v-kartha/Hybrid_Quantum_Image_Encryption',
    icon: Lock,
  },
  {
    title: 'PentaVault — Automated VAPT Suite',
    category: 'Application Security',
    tags: ['Python', 'FastAPI', 'Selenium', 'Nmap'],
    problem: 'VAPT engagements lose time to inconsistent recon, scattered evidence, and manual report assembly across every target.',
    approach: 'Built a phase-driven security testing platform that orchestrates reconnaissance, scanning, validation, and reporting — capturing findings to a structured store ready for export.',
    outcome: 'Cut assessment turnaround time and produced consistent, audit-ready reports across multiple practice engagements.',
    githubUrl: 'https://github.com/Govind-v-kartha/PentaVault',
    icon: Shield,
  },
  {
    title: 'Security Testing & Detection Lab',
    category: 'Network & Forensics',
    tags: ['Kali Linux', 'Suricata', 'Wazuh', 'Wireshark', 'Splunk'],
    problem: 'Theory does not build SOC instincts — analysts need a controlled environment to practice the full attack-to-detection loop.',
    approach: 'Stood up a purple-team lab combining Kali-based attack simulation with Suricata IDS, Wazuh host telemetry, and Wireshark packet analysis to produce real, traceable detection events.',
    outcome: 'Sharpened evidence-led investigation skills across MITRE ATT&CK techniques and produced reproducible detection workflows.',
    publicNote: 'Lab walkthrough and detection rules available on request.',
    icon: Radar,
  },
  {
    title: 'OSINT Attack Surface Profiling',
    category: 'Application Security',
    tags: ['OSINT', 'Amass', 'Shodan', 'Subfinder'],
    problem: 'Active scans can miss exposed assets and trigger defenses before scope is even understood.',
    approach: 'Built a passive reconnaissance workflow that fingerprints external assets, leaked credentials, and exposed services using OSINT tooling — producing a prioritized target inventory.',
    outcome: 'Made pre-engagement scoping faster and noticeably reduced false positives during active testing phases.',
    publicNote: 'Findings are kept private to protect target organizations.',
    icon: Globe,
  },
  {
    title: 'MyShark — Network Traffic Triage Tool',
    category: 'Network & Forensics',
    tags: ['Python', 'Packet Analysis', 'Scapy', 'Web UI'],
    problem: 'Wireshark is powerful but slow for first-pass triage when a SOC analyst just needs the suspicious flows highlighted fast.',
    approach: 'Built a focused web-based traffic analyzer that surfaces protocol anomalies, suspicious endpoints, and high-volume flows in seconds rather than minutes.',
    outcome: 'Delivered a live tool that accelerates the first 5 minutes of incident triage — the minutes that matter most.',
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
            <p className="panel-subtitle">Working code, not slideware — projects spanning offensive security, SOC operations, and quantum cryptography.</p>
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
