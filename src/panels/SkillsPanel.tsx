import { motion } from 'framer-motion'
import { Code, Shield, Radar, Wrench } from 'lucide-react'

const CAPABILITY_AREAS = [
  {
    title: 'Offensive Security & VAPT',
    icon: Shield,
    points: [
      'Reconnaissance, attack surface mapping, and service enumeration',
      'Vulnerability validation through controlled exploitation workflows',
      'Web, API, and network testing in practical lab and project settings',
      'Evidence-based reporting with remediation prioritization',
    ],
    tools: ['Nmap', 'Metasploit', 'Burp Suite', 'OWASP ZAP', 'SQLMap', 'Gobuster'],
  },
  {
    title: 'Detection, Investigation & Validation',
    icon: Radar,
    points: [
      'Network and host telemetry analysis for detection efficacy validation',
      'Alert triage, event correlation, and investigation-focused analysis',
      'Support blue-team readiness through offensive insight mapping',
      'Security control gap identification across attack paths',
    ],
    tools: ['Wazuh', 'Suricata', 'Wireshark', 'Scapy'],
  },
]

const PROJECT_TOOL_GROUPS = [
  {
    title: 'Security Testing & Recon Tooling',
    tools: ['Nmap', 'Selenium', 'theHarvester', 'Amass', 'Shodan'],
  },
  {
    title: 'Detection & Lab Stack',
    tools: ['Kali Linux', 'Wazuh', 'Suricata', 'Wireshark', 'VirtualBox'],
  },
  {
    title: 'Engineering & Reporting Stack',
    tools: ['Python', 'FastAPI', 'FPDF2', 'Node.js DOCX', 'OpenCV', 'NumPy'],
  },
  {
    title: 'AI, Quantum & Crypto Components',
    tools: ['Qiskit AerSimulator', 'FlexiMo ViT', 'AES-256-GCM', 'Gemini AI'],
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

export default function SkillsPanel() {
  return (
    <div className="panel-shell">
      <div className="panel-header">
        <div className="panel-header-row">
          <div className="panel-header-icon">
            <Code className="w-6 h-6" />
          </div>
          <div>
            <h1 className="panel-title">Technical Capability</h1>
            <p className="panel-subtitle">Applied skills across offensive security testing, detection analysis, and quantum-security foundations.</p>
          </div>
        </div>
      </div>

      <div className="panel-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl space-y-6"
        >
          {CAPABILITY_AREAS.map((area) => {
            const Icon = area.icon
            return (
              <motion.section key={area.title} variants={itemVariants} className="section-card overflow-hidden">
                <div className="section-header">
                  <div className="flex items-center gap-3">
                    <div className="icon-accent">
                      <Icon className="w-4 h-4 text-blue-700" />
                    </div>
                    <h2 className="section-title">{area.title}</h2>
                  </div>
                </div>

                <div className="section-card-content space-y-5">
                  <ul className="space-y-2 text-slate-700">
                    {area.points.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span className="text-blue-700 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <p className="section-label mb-2">Core Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {area.tools.map((tool) => (
                        <span key={tool} className="meta-chip">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>
            )
          })}

          <motion.section variants={itemVariants} className="section-card overflow-hidden">
            <div className="section-header">
              <div className="flex items-center gap-3">
                <div className="icon-accent">
                  <Wrench className="w-4 h-4 text-blue-700" />
                </div>
                <h2 className="section-title">Tools Used Across Projects</h2>
              </div>
            </div>

            <div className="section-card-content space-y-4">
              {PROJECT_TOOL_GROUPS.map((group) => (
                <div key={group.title}>
                  <p className="section-label mb-2">{group.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <span key={tool} className="meta-chip">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="section-card overflow-hidden">
            <div className="section-header">
              <div className="flex items-center gap-3">
                <div className="icon-accent">
                  <Wrench className="w-4 h-4 text-blue-700" />
                </div>
                <h2 className="section-title">Platforms, Programming & Quantum Basis</h2>
              </div>
            </div>

            <div className="section-card-content grid gap-5 md:grid-cols-2">
              <div>
                <p className="section-label mb-2">Platforms</p>
                <div className="flex flex-wrap gap-2">
                  {['Kali Linux', 'VirtualBox', 'Qiskit AerSimulator'].map((item) => (
                    <span key={item} className="meta-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="section-label mb-2">Programming</p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  {[
                    'Python for security tooling and automation',
                    'Bash scripting for reconnaissance and workflow support',
                    'SQL fundamentals for testing and data validation',
                    'Strong applied basis in post-quantum and hybrid encryption concepts',
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="text-blue-700 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.p variants={itemVariants} className="text-sm text-slate-600">
            Capability depth is evidenced through project outcomes, lab reproducibility, and engagement-style deliverables rather than subjective rating scales.
          </motion.p>
        </motion.div>
      </div>

    </div>
  )
}
