import { motion, useReducedMotion } from 'framer-motion'
import { User, Shield, Radar, CircuitBoard } from 'lucide-react'
import Footer from '../components/Footer'

type PanelType = 'home' | 'profile' | 'skills' | 'projects' | 'education' | 'contact'

interface ProfilePanelProps {
  onPanelChange: (panel: PanelType) => void
}

const PROFILE_SECTIONS = [
  {
    title: 'Offensive Security Practice',
    icon: Shield,
    points: [
      'Practice controlled attack simulation to evaluate exposure across web and network surfaces.',
      'Validate exploitable paths and document impact with evidence-driven findings.',
      'Translate offensive observations into practical hardening recommendations.',
    ],
  },
  {
    title: 'Detection & Investigation',
    icon: Radar,
    points: [
      'Use network and host telemetry analysis to validate detection effectiveness.',
      'Correlate alerts and events for investigation-focused security analysis.',
      'Support remediation planning with technically reproducible findings.',
    ],
  },
  {
    title: 'Quantum Security Foundation',
    icon: CircuitBoard,
    points: [
      'Build applied foundation knowledge in post-quantum and hybrid cryptographic concepts.',
      'Explore quantum-oriented security workflows through project-based experimentation.',
      'Connect cybersecurity practice with research-backed quantum security learning.',
    ],
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

export default function ProfilePanel({ onPanelChange }: ProfilePanelProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="panel-shell">
      <div className="panel-header">
        <div className="panel-header-row">
          <div className="panel-header-icon">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h1 className="panel-title">Professional Profile</h1>
            <p className="panel-subtitle">Entry-level capability overview across offensive security, detection analysis, and quantum-security foundations.</p>
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
          <motion.section variants={itemVariants} className="section-card p-6">
            <p className="text-slate-700 leading-relaxed text-balance">
              Cybersecurity fresher focused on offensive security practice, web application testing, and detection-aware investigation workflows, with growing project-backed depth in quantum-security concepts.
            </p>
          </motion.section>

          <div className="grid gap-4 md:grid-cols-2">
            {PROFILE_SECTIONS.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.section
                  key={section.title}
                  variants={itemVariants}
                  className={`section-card p-5 ${index === 2 ? 'md:col-span-2' : ''}`}
                  whileHover={shouldReduceMotion ? undefined : { y: -1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="icon-accent">
                      <Icon className="w-4 h-4 text-blue-700" />
                    </div>
                    <h2 className="section-title">{section.title}</h2>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span className="text-blue-700/90 mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )
            })}
          </div>
        </motion.div>
      </div>

      <Footer onPanelChange={onPanelChange} />
    </div>
  )
}
