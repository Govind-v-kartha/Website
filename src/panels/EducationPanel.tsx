import { motion, useReducedMotion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Star, CalendarDays } from 'lucide-react'

const EDUCATION = [
  {
    title: 'MSc Computer Science (Cybersecurity)',
    institution: 'Digital University Kerala',
    period: 'Current',
    icon: GraduationCap,
  },
  {
    title: 'BSc Applied Physics',
    institution: 'University of Calicut',
    period: 'Completed',
    icon: BookOpen,
  },
]

const CERTIFICATIONS = [
  {
    title: 'Google Cloud Career Launchpad – Cybersecurity Track',
    issuer: 'Google Cloud',
    icon: Star,
  },
  {
    title: 'Google IT Support – Technical Support Fundamentals',
    issuer: 'Google',
    icon: Star,
  },
  {
    title: 'Cisco Networking Academy – Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    icon: Star,
  },
]

const ACHIEVEMENTS = [
  {
    title: 'Runners-up, DUK InnoFest 2025',
    context: 'Academic innovation event recognition',
    icon: Award,
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

export default function EducationPanel() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="panel-shell">
      <div className="panel-header">
        <div className="panel-header-row">
          <div className="panel-header-icon">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h1 className="panel-title">Education & Credentials</h1>
            <p className="panel-subtitle">Academic and certification pathway supporting offensive security practice, detection analysis, and quantum-security foundations.</p>
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
          <motion.section variants={itemVariants} className="section-card overflow-hidden" whileHover={shouldReduceMotion ? undefined : { y: -1 }}>
            <div className="section-header">
              <h2 className="section-title">Education</h2>
            </div>
            <div className="section-card-content space-y-4">
              {EDUCATION.map((edu) => {
                const Icon = edu.icon
                return (
                  <div key={edu.title} className="flex items-start gap-4 pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                    <div className="icon-accent">
                      <Icon className="w-4 h-4 text-blue-700" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">{edu.title}</p>
                      <p className="text-sm text-slate-600 mt-1">{edu.institution}</p>
                    </div>
                    <span className="meta-chip">{edu.period}</span>
                  </div>
                )
              })}
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="section-card overflow-hidden" whileHover={shouldReduceMotion ? undefined : { y: -1 }}>
            <div className="section-header">
              <h2 className="section-title">Achievements</h2>
            </div>
            <div className="section-card-content space-y-4">
              {ACHIEVEMENTS.map((achievement) => {
                const Icon = achievement.icon
                return (
                  <div key={achievement.title} className="flex items-start gap-4">
                    <div className="icon-accent">
                      <Icon className="w-4 h-4 text-blue-700" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">{achievement.title}</p>
                      <p className="text-sm text-slate-600 mt-1">{achievement.context}</p>
                    </div>
                    <span className="meta-chip">
                      <CalendarDays className="w-3.5 h-3.5 mr-1" />
                      2025
                    </span>
                  </div>
                )
              })}
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="section-card overflow-hidden" whileHover={shouldReduceMotion ? undefined : { y: -1 }}>
            <div className="section-header">
              <h2 className="section-title">Certificates</h2>
            </div>
            <div className="section-card-content space-y-4">
              {CERTIFICATIONS.map((cert) => {
                const Icon = cert.icon
                return (
                  <div key={cert.title} className="flex items-start gap-4 pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                    <div className="icon-accent">
                      <Icon className="w-4 h-4 text-blue-700" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{cert.title}</p>
                      <p className="text-sm text-slate-700 mt-1">Issued by {cert.issuer}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.section>
        </motion.div>
      </div>

    </div>
  )
}
