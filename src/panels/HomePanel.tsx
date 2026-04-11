import { motion, useReducedMotion } from 'framer-motion'
import { Download, FileText, FolderGit2, Github, Mail, MapPin, ShieldCheck } from 'lucide-react'
import { Button } from '../components/Button'

type SectionId = 'home' | 'profile' | 'skills' | 'services' | 'projects' | 'education' | 'contact'

interface HomePanelProps {
  onNavigate: (section: SectionId) => void
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: 'easeOut' as const },
  },
}

export default function HomePanel({ onNavigate }: HomePanelProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="panel-shell">
      <div className="panel-header">
        <div className="panel-header-row">
          <div className="panel-header-icon">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="panel-title">Executive Summary</h1>
            <p className="panel-subtitle text-balance">
              Entry-level cybersecurity professional focused on offensive security, web application testing, detection-driven analysis, and quantum-security research foundations.
            </p>
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
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <motion.img
                src="/profile.jpg"
                alt="Govind V Kartha"
                className="w-28 h-28 rounded-xl object-cover border border-slate-300 shadow-sm ring-1 ring-white/80"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
                transition={{ duration: 0.18 }}
              />

              <div className="flex-1 space-y-4">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">Govind V Kartha</h2>
                  <p className="mt-1 text-base font-semibold text-blue-700">Offensive Security & Quantum Security Enthusiast</p>
                </div>

                <div className="space-y-2 text-sm text-slate-600">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    Thrissur, Kerala, India
                  </p>
                  <a
                    href="mailto:knvgovind@gmail.com"
                    className="focus-ring inline-flex items-center gap-2 rounded text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-slate-500" />
                    knvgovind@gmail.com
                  </a>
                </div>

                <p className="text-slate-700 leading-relaxed text-balance">
                  I am building practical cybersecurity capability through offensive testing projects, detection-focused analysis, and research-oriented exploration of quantum and post-quantum security concepts.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="meta-chip">Offensive Security</span>
                  <span className="meta-chip">Web App Testing</span>
                  <span className="meta-chip">Detection & Analysis</span>
                  <span className="meta-chip">Quantum Security Basis</span>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="section-card p-6">
            <p className="section-label mb-3">Current Focus</p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-700/90 mt-0.5">•</span>
                Entry-level VAPT workflow practice covering reconnaissance, testing, validation, and structured reporting.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-700/90 mt-0.5">•</span>
                Detection-focused analysis using telemetry and alert correlation to validate defensive visibility.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-700/90 mt-0.5">•</span>
                Quantum-security foundation work spanning post-quantum concepts and hybrid encryption experimentation.
              </li>
            </ul>
          </motion.section>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            <Button
              variant="primary"
              size="md"
              icon={FileText}
              onClick={() => window.open('/cv/Govind_V_Kartha_CV.pdf', '_blank', 'noopener,noreferrer')}
            >
              View CV
            </Button>
            <a
              href="/cv/Govind_V_Kartha_CV.pdf"
              download="Govind_V_Kartha_CV.pdf"
              className="focus-ring font-medium rounded-lg transition-all duration-200 inline-flex items-center gap-2 bg-slate-50 text-slate-800 border border-slate-300 hover:bg-white hover:border-blue-200 active:bg-slate-100 px-4 py-2.5 text-base"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
            <Button variant="secondary" size="md" icon={FolderGit2} onClick={() => onNavigate('projects')}>
              View Projects
            </Button>
            <Button variant="tertiary" size="md" icon={Github} onClick={() => window.open('https://github.com/Govind-v-kartha', '_blank', 'noopener,noreferrer')}>
              GitHub
            </Button>
            <Button variant="tertiary" size="md" icon={Mail} onClick={() => onNavigate('contact')}>
              Engage
            </Button>
          </motion.div>
        </motion.div>
      </div>

    </div>
  )
}
