import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Star } from 'lucide-react'
import Footer from '../components/Footer'

const EDUCATION = [
  {
    title: 'MSc Computer Science (Cybersecurity)',
    institution: 'Digital University Kerala',
    icon: GraduationCap,
  },
  {
    title: 'BSc Applied Physics',
    institution: 'University of Calicut',
    icon: BookOpen,
  },
]

const CERTIFICATIONS = [
  {
    title: 'Google Cloud Career Launchpad – Cybersecurity Track',
    icon: Star,
  },
  {
    title: 'Google IT Support – Technical Support Fundamentals',
    icon: Star,
  },
  {
    title: 'Cisco Networking Academy – Introduction to Cybersecurity',
    icon: Star,
  },
]

const ACHIEVEMENTS = [
  {
    title: 'Runners-up, DUK InnoFest 2025',
    icon: Award,
  },
]

export default function EducationPanel() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
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
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Education & Certifications</h1>
        </div>
      </div>

      {/* Panel Content */}
      <div className="flex-1 overflow-y-auto px-8 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl space-y-8"
        >
          {/* Education Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-6 py-5 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-100 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-slate-900">Education</h2>
              </div>
            </div>

            <div className="px-6 py-6 space-y-5">
              {EDUCATION.map((edu, idx) => {
                const Icon = edu.icon
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-4 pb-5 border-b border-slate-100 last:border-b-0 last:pb-0"
                  >
                    <div className="p-2.5 bg-blue-50 rounded-lg flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">{edu.title}</p>
                      <p className="text-sm text-slate-600 mt-1">{edu.institution}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-5 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-100 rounded-lg">
                  <Award className="w-5 h-5 text-emerald-600" />
                </div>
                <h2 className="text-xl font-semibold text-slate-900">Achievements</h2>
              </div>
            </div>

            <div className="px-6 py-6">
              <ul className="space-y-4">
                {ACHIEVEMENTS.map((achievement, idx) => {
                  const Icon = achievement.icon
                  return (
                    <motion.li
                      key={idx}
                      variants={itemVariants}
                      className="flex items-start gap-3"
                    >
                      <div className="p-2 bg-emerald-50 rounded-lg flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-slate-700 pt-0.5">{achievement.title}</span>
                    </motion.li>
                  )
                })}
              </ul>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 px-6 py-5 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-purple-100 rounded-lg">
                  <Star className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-slate-900">Certifications</h2>
              </div>
            </div>

            <div className="px-6 py-6">
              <ul className="space-y-4">
                {CERTIFICATIONS.map((cert, idx) => {
                  const Icon = cert.icon
                  return (
                    <motion.li
                      key={idx}
                      variants={itemVariants}
                      className="flex items-start gap-3"
                    >
                      <div className="p-2 bg-purple-50 rounded-lg flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-slate-700 pt-0.5">{cert.title}</span>
                    </motion.li>
                  )
                })}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
