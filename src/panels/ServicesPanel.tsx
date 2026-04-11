import { motion, useReducedMotion } from 'framer-motion'
import { Briefcase, ShieldCheck, Radar, Workflow, FileCheck } from 'lucide-react'

const SERVICES = [
  {
    title: 'Security Testing Support',
    icon: ShieldCheck,
    description:
      'Support web, API, and network security assessments with structured testing and reproducible findings.',
    points: [
      'Reconnaissance and attack-surface mapping',
      'Validation of common vulnerability classes in controlled scope',
      'Evidence capture with clear severity and remediation notes',
    ],
  },
  {
    title: 'Detection Validation Assistance',
    icon: Radar,
    description:
      'Assist blue-team readiness by mapping offensive test activity to alerts, telemetry, and detection visibility.',
    points: [
      'Alert triage and event correlation support',
      'Host and network telemetry review for control gaps',
      'Documentation of blind spots and tuning opportunities',
    ],
  },
  {
    title: 'Security Workflow Automation',
    icon: Workflow,
    description:
      'Build lightweight automation to improve repeatability across testing and reporting workflows.',
    points: [
      'Python-based tooling for scan and analysis workflows',
      'Structured output generation for practical reporting',
      'Project-focused prototypes for faster investigation cycles',
    ],
  },
  {
    title: 'Reporting & Knowledge Transfer',
    icon: FileCheck,
    description:
      'Translate technical observations into concise outputs useful for engineering and security stakeholders.',
    points: [
      'Clear summaries of findings and probable impact',
      'Remediation-priority suggestions aligned to risk context',
      'Engagement-style deliverables for review and follow-up',
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

export default function ServicesPanel() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="panel-shell">
      <div className="panel-header">
        <div className="panel-header-row">
          <div className="panel-header-icon">
            <Briefcase className="w-6 h-6" />
          </div>
          <div>
            <h1 className="panel-title">Services</h1>
            <p className="panel-subtitle">
              Entry-level service capabilities focused on practical security contribution across offensive testing,
              detection validation, and reporting quality.
            </p>
          </div>
        </div>
      </div>

      <div className="panel-content">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl grid gap-4 md:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = service.icon

            return (
              <motion.section
                key={service.title}
                variants={itemVariants}
                className="section-card overflow-hidden"
                whileHover={shouldReduceMotion ? undefined : { y: -1 }}
              >
                <div className="section-header">
                  <div className="flex items-center gap-3">
                    <div className="icon-accent">
                      <Icon className="w-4 h-4 text-blue-700" />
                    </div>
                    <h2 className="section-title">{service.title}</h2>
                  </div>
                </div>

                <div className="section-card-content space-y-4">
                  <p className="text-sm text-slate-700 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span className="text-blue-700 mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
