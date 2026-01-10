import { motion } from 'framer-motion'
import { FolderOpen, Github, ExternalLink, Microscope, Lock, Zap } from 'lucide-react'
import Footer from '../components/Footer'

const PROJECTS = [
  {
    icon: Microscope,
    title: '🔬 Security Testing & Analysis Lab',
    description:
      'Designed and operated a comprehensive security testing and analysis lab to understand how real-world attacks are executed and how they are detected and investigated using security monitoring tools.',
    keyFocus: [
      'Attack simulation using Kali Linux',
      'Vulnerability exploitation against Metasploitable',
      'Traffic capture and inspection',
      'Network-based detection using Suricata',
      'Host-based monitoring using Wazuh',
      'Correlation of attack activity with alerts and logs',
    ],
    environment: 'Kali Linux, Metasploitable, Wazuh, Suricata, Wireshark, VirtualBox',
  },
  {
    icon: Microscope,
    title: '🔍 OSINT-Based Attack Preparation',
    description:
      'Conducted passive open-source intelligence gathering against a simulated organization to identify public-facing assets, exposed information, and potential attack entry points. Focused on target profiling and attack surface mapping without active scanning.',
    keyFocus: [
      'Passive reconnaissance and intelligence gathering',
      'Target profiling and asset discovery',
      'Attack surface mapping',
      'Exposed information identification',
      'Potential vulnerability assessment',
    ],
    environment: 'OSINT, theHarvester, Amass, Shodan',
  },
  {
    icon: Lock,
    title: '🔐 QMail – Secure Email Communication Prototype',
    description:
      'Developed a secure email communication prototype focused on protecting communication against classical and future quantum threats.',
    keyFocus: [
      'Secure communication',
      'Post-quantum cryptography concepts',
      'Simulated Quantum Key Distribution (QKD)',
    ],
    environment: null,
    github: 'https://github.com/Govind-v-kartha/Qmail',
  },
  {
    icon: Zap,
    title: '🦈 MyShark – Network Traffic Analysis Tool',
    description:
      'Built a Python-based packet capture and traffic analysis tool for inspecting live network traffic and identifying suspicious communication patterns.',
    keyFocus: ['Packet capture', 'Protocol analysis', 'Security investigation support'],
    environment: null,
    github: 'https://myshark.vercel.app/',
  },
]

export default function ProjectsPanel() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg animate-fade-in-up">
      {/* Panel Header */}
      <div className="px-8 py-8 bg-white border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-600 rounded-lg">
            <FolderOpen className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Projects</h1>
        </div>
      </div>

      {/* Panel Content */}
      <div className="flex-1 overflow-y-auto px-8 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl space-y-6"
        >
          {PROJECTS.map((project, idx) => {
            const Icon = project.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Project Header */}
                <div className="px-6 py-5 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-2.5 bg-blue-100 rounded-lg flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold text-slate-900">{project.title}</h2>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="px-6 py-5 space-y-4">
                  <p className="text-slate-700 leading-relaxed">{project.description}</p>

                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-slate-900 mb-3">Key Focus:</p>
                      <ul className="space-y-2">
                        {project.keyFocus.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3 text-slate-700">
                            <span className="text-blue-600 font-bold mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project.environment && (
                      <div>
                        <p className="font-semibold text-slate-900 mb-2">Environment:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.environment.split(', ').map((tool, toolIdx) => (
                            <span key={toolIdx} className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-md text-sm font-medium">
                              <strong>{tool}</strong>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md mt-2"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Repository
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
