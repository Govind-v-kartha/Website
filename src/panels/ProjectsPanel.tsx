import { motion, useReducedMotion } from 'framer-motion'
import { FolderOpen, Github, ExternalLink, Microscope, Lock, Zap } from 'lucide-react'
import { Button } from '../components/Button'
import Footer from '../components/Footer'

type PanelType = 'home' | 'profile' | 'skills' | 'projects' | 'education' | 'contact'

interface ProjectsPanelProps {
  onPanelChange: (panel: PanelType) => void
}

const PROJECTS = [
  {
    icon: Lock,
    title: 'PentaVault: Automated VAPT Security Suite',
    objective:
      'Build a security testing platform that operationalizes end-to-end VAPT workflows from reconnaissance to structured reporting.',
    keyFocus: [
      '7-stage assessment pipeline with reconnaissance, fingerprinting, crawling, exploit-oriented testing, and CVSS scoring',
      'MITRE ATT&CK v16.1 and OWASP 2025 mapping to translate technical findings into structured risk context',
      'FastAPI dashboard with scan history, AI-assisted threat interpretation, and multi-format report generation',
    ],
    environment: 'Python 3.13, FastAPI, Selenium, Nmap, Gemini AI, FPDF2, Node.js DOCX',
    github: 'https://github.com/Govind-v-kartha/PentaVault',
  },
  {
    icon: Microscope,
    title: 'Security Testing & Analysis Lab',
    objective:
      'Design and operate a controlled security lab to emulate realistic attack behavior and validate defensive visibility.',
    keyFocus: [
      'Adversary simulation with Kali Linux against controlled targets',
      'Protocol-level traffic inspection and evidence extraction for reporting',
      'Detection validation workflows with Suricata and Wazuh across host and network telemetry',
      'Correlation of attacker behavior with alerts and response-relevant artifacts',
    ],
    environment: 'Kali Linux, Metasploitable, Wazuh, Suricata, Wireshark, VirtualBox',
  },
  {
    icon: Microscope,
    title: 'OSINT-Based Attack Surface Profiling',
    objective:
      'Perform passive reconnaissance to identify exposed assets, probable entry vectors, and pre-engagement risk indicators.',
    keyFocus: [
      'External asset discovery and target profiling from open-source intelligence',
      'Exposure mapping of internet-facing services, metadata, and attack surface signals',
      'Pre-assessment risk modeling to prioritize pentest paths',
    ],
    environment: 'OSINT, theHarvester, Amass, Shodan',
  },
  {
    icon: Lock,
    title: 'Hybrid AI-Quantum Satellite Image Encryption',
    objective:
      'Design a dual-layer image security pipeline that combines AI-driven ROI segmentation with quantum and classical encryption for high-value imagery.',
    keyFocus: [
      'FlexiMo-based semantic segmentation to isolate sensitive ROI regions before encryption',
      'Per-channel NEQR quantum encryption for ROI blocks with chaotic scrambling and DNA diffusion',
      'AES-256-GCM background protection with fusion and zero-loss reconstruction verification',
    ],
    environment: 'Python, Qiskit AerSimulator, FlexiMo ViT, AES-256-GCM, OpenCV, NumPy',
    github: null,
  },
  {
    icon: Lock,
    title: 'QMail: Secure Communication Prototype',
    objective:
      'Develop a secure communication prototype exploring resilience against classical and future quantum-era threats.',
    keyFocus: [
      'Secure communication architecture and key-management workflow design',
      'Post-quantum cryptography concept integration in a practical prototype',
      'Simulated Quantum Key Distribution (QKD) workflow evaluation',
    ],
    environment: null,
    github: 'https://github.com/Govind-v-kartha/Qmail',
  },
  {
    icon: Zap,
    title: 'MyShark: Network Traffic Analysis Tool',
    objective:
      'Build a Python-based packet capture and traffic analysis utility for rapid investigation of suspicious network behavior.',
    keyFocus: [
      'Packet capture and parsing pipeline for investigation workflows',
      'Protocol-level analysis for anomaly detection support',
      'Operational assistance for security triage and network forensics',
    ],
    environment: null,
    github: 'https://myshark.vercel.app/',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.22 } },
}

export default function ProjectsPanel({ onPanelChange }: ProjectsPanelProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="panel-shell">
      <div className="panel-header">
        <div className="panel-header-row">
          <div className="panel-header-icon">
            <FolderOpen className="w-6 h-6" />
          </div>
          <div>
            <h1 className="panel-title">Selected Projects</h1>
            <p className="panel-subtitle">Projects demonstrating offensive security practice, detection-oriented analysis, and quantum-security research foundations.</p>
          </div>
        </div>
      </div>

      <div className="panel-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl space-y-5"
        >
          {PROJECTS.map((project) => {
            const Icon = project.icon
            return (
              <motion.section
                key={project.title}
                variants={itemVariants}
                className="section-card overflow-hidden"
                whileHover={shouldReduceMotion ? undefined : { y: -1 }}
              >
                <div className="section-header">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="icon-accent">
                        <Icon className="w-4 h-4 text-blue-700" />
                      </div>
                      <div>
                        <h2 className="section-title">{project.title}</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section-card-content space-y-4">
                  <div>
                    <p className="section-label mb-2">Objective</p>
                    <p className="text-slate-700 leading-relaxed">{project.objective}</p>
                  </div>

                  <div>
                    <p className="section-label mb-2">Scope</p>
                    <ul className="space-y-1.5 text-slate-700">
                      {project.keyFocus.map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span className="text-blue-700/90 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.environment && (
                    <div>
                      <p className="section-label mb-2">Environment</p>
                      <div className="flex flex-wrap gap-2">
                        {project.environment.split(', ').map((tool) => (
                          <span key={tool} className="meta-chip">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.github && (
                    <Button
                      variant="secondary"
                      size="sm"
                      icon={project.github.includes('myshark.vercel.app') ? ExternalLink : Github}
                      onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                    >
                      {project.github.includes('myshark.vercel.app') ? 'Open Live Demo' : 'View Repository'}
                    </Button>
                  )}
                </div>
              </motion.section>
            )
          })}
        </motion.div>
      </div>

      <Footer onPanelChange={onPanelChange} />
    </div>
  )
}
