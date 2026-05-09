import { useMemo, useState } from 'react'
import { Briefcase, ExternalLink, Github, Globe, Lock, Radar, Shield, Sparkles } from 'lucide-react'

type ProjectCategory = 'All' | 'Application Security' | 'Network & Forensics' | 'Quantum Computing'

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

const FILTERS: ProjectCategory[] = ['All', 'Application Security', 'Network & Forensics', 'Quantum Computing']

const PROJECTS: ProjectItem[] = [
  {
    title: 'QuantMail',
    category: 'Quantum Computing',
    tags: ['Python', 'Flask', 'QKD', 'Post-Quantum Crypto', 'AES', 'Vercel'],
    problem: 'Most email encryption today will break once a real quantum computer shows up. I wanted to see what a working alternative actually looks like.',
    approach: 'Built a Flask email client with four encryption tiers you can pick per message: quantum one-time pad, quantum-aided AES, post-quantum (Kyber/Dilithium), and classical AES/RSA. Real SMTP/IMAP, not a mock.',
    outcome: 'Live on Vercel. Has a Quantum Key Manager client, encrypted attachments, and an admin console. You can sign in and try it.',
    liveUrl: 'https://quantmail.vercel.app/',
    icon: Lock,
  },
  {
    title: 'Hybrid AI-Quantum Image Encryption',
    category: 'Quantum Computing',
    tags: ['Qiskit', 'NEQR', 'Vision Transformer', 'AES-256-GCM', 'Python'],
    problem: 'Encrypting every pixel of a satellite image the same way is wasteful. The interesting parts deserve stronger protection than the sky.',
    approach: 'A Vision Transformer (DOFA / FlexiMo) finds the regions of interest. Those get encrypted with NEQR quantum circuits in Qiskit. The rest gets AES-256-GCM. Everything is fused back into one image.',
    outcome: 'Decrypts back to the original with zero data loss — PSNR ∞ dB, SSIM 1.0000. Code and walkthrough on GitHub.',
    githubUrl: 'https://github.com/Govind-v-kartha/Hybrid_Quantum_Image_Encryption',
    icon: Lock,
  },
  {
    title: 'PentaVault',
    category: 'Application Security',
    tags: ['Python', 'FastAPI', 'Selenium', 'Nmap'],
    problem: 'Every VAPT engagement I practiced wasted time on the same boring setup: recon, scan, sort findings, write report. So I automated it.',
    approach: 'Phase-driven testing tool that runs recon, scanning, and validation, then collects everything in one place ready to export.',
    outcome: 'Faster assessments, consistent reports, fewer steps I forget. My go-to for any web target.',
    githubUrl: 'https://github.com/Govind-v-kartha/PentaVault',
    icon: Shield,
  },
  {
    title: 'Security Testing & Detection Lab',
    category: 'Network & Forensics',
    tags: ['Kali Linux', 'Suricata', 'Wazuh', 'Wireshark', 'Splunk'],
    problem: 'Reading about SOC work is not the same as doing it. I needed somewhere to actually run attacks and watch the alerts fire.',
    approach: 'A purple-team lab: Kali on the offense side, Suricata + Wazuh + Wireshark on the defense side. I attack, I investigate, I write up what I find.',
    outcome: 'Real practice with MITRE ATT&CK techniques and a habit of tracing every alert back to evidence.',
    publicNote: 'Walkthrough and detection notes available on request.',
    icon: Radar,
  },
  {
    title: 'OSINT Attack Surface Profiling',
    category: 'Application Security',
    tags: ['OSINT', 'Amass', 'Shodan', 'Subfinder'],
    problem: 'Jumping into active scans without knowing what is even exposed is loud and inefficient.',
    approach: 'A passive recon workflow using Amass, Shodan, and Subfinder to map the external surface before touching anything.',
    outcome: 'Cleaner scope going into active testing. Fewer surprises, fewer wasted scans.',
    publicNote: 'Findings stay private out of respect for the targets.',
    icon: Globe,
  },
  {
    title: 'MyShark',
    category: 'Network & Forensics',
    tags: ['Python', 'Packet Analysis', 'Scapy', 'Web UI'],
    problem: 'Wireshark is great, but for a quick first look at suspicious traffic, I wanted something simpler I could open in a browser.',
    approach: 'A web-based traffic analyzer that highlights protocol anomalies, noisy endpoints, and high-volume flows.',
    outcome: 'Live and useful for the first five minutes of triage — which is usually when it matters most.',
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
            <h1 className="panel-title">Projects</h1>
            <p className="panel-subtitle">Things I've built. Most are on GitHub. Two are live. All of them taught me something.</p>
          </div>
        </div>
      </div>

      <div className="panel-content space-y-6">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`focus-ring px-3.5 py-1.5 rounded-full text-sm border transition-all duration-300 ${
                  isActive
                    ? 'bg-[var(--accent-soft)] text-white border-[var(--accent-soft-border)] shadow-[0_0_18px_rgba(34,211,238,0.18)]'
                    : 'bg-[color-mix(in_srgb,var(--bg-elevated)_86%,transparent)] text-slate-300 border-[var(--border)] hover:text-white hover:border-[var(--accent-soft-border)]'
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => {
            const Icon = project.icon
            const isQuantum = project.category === 'Quantum Computing'
            const isFeatured = project.liveUrl && project.githubUrl === undefined && isQuantum
              || project.title.startsWith('QuantMail')
              || project.title.startsWith('Hybrid')

            return (
              <article
                key={project.title}
                className={`project-card section-card-content space-y-4 flex flex-col ${isQuantum ? 'project-card-quantum' : ''}`}
              >
                <div className="flex items-start justify-between gap-2">
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
                  <div className="flex items-center gap-1.5">
                    {isFeatured && (
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 font-semibold">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                    <span
                      className="text-[11px] uppercase tracking-wider px-2 py-1 rounded-full border font-semibold"
                      style={{
                        borderColor: isQuantum ? 'var(--accent-2-border)' : 'var(--accent-soft-border)',
                        background: isQuantum ? 'var(--accent-2-soft)' : 'var(--accent-soft)',
                        color: isQuantum ? 'var(--accent-2)' : 'var(--accent)',
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-white leading-snug">{project.title}</h2>

                <div className="space-y-2.5 text-sm flex-1">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-0.5">Problem</p>
                    <p className="text-slate-300 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-0.5">Approach</p>
                    <p className="text-slate-300 leading-relaxed">{project.approach}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-0.5">Outcome</p>
                    <p className="text-slate-200 leading-relaxed font-medium">{project.outcome}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="terminal-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--border)]">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !py-2 !px-3.5 text-xs"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost !py-2 !px-3.5 text-xs"
                    >
                      <Github size={14} />
                      Source Code
                    </a>
                  )}
                  {!project.liveUrl && !project.githubUrl && project.publicNote && (
                    <p className="text-xs text-slate-400 italic">{project.publicNote}</p>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
