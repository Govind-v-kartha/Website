import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import Footer from '../components/Footer'

export default function ProfilePanel() {
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
            <User className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Professional Profile</h1>
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
          {/* Overview Section */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-50 border border-slate-200 rounded-xl p-6"
          >
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Overview</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">→</span>
                <span className="text-slate-700">Cybersecurity professional with <strong className="text-slate-900">hands-on experience</strong> in <strong className="text-slate-900">security testing</strong>, <strong className="text-slate-900">threat detection</strong>, and <strong className="text-slate-900">investigation workflows</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">→</span>
                <span className="text-slate-700">Strong understanding of how <strong className="text-slate-900">real-world attacks</strong> are executed and how they manifest in <strong className="text-slate-900">network and host telemetry</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">→</span>
                <span className="text-slate-700">Experience performing <strong className="text-slate-900">attack simulation</strong>, <strong className="text-slate-900">vulnerability exploitation</strong>, and <strong className="text-slate-900">post-exploitation analysis</strong> in controlled lab environments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">→</span>
                <span className="text-slate-700">Practical exposure to <strong className="text-slate-900">network traffic analysis</strong>, <strong className="text-slate-900">alert validation</strong>, and <strong className="text-slate-900">event correlation</strong> using security monitoring tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">→</span>
                <span className="text-slate-700">Built and operated a <strong className="text-slate-900">security testing & analysis lab</strong> integrating <strong className="text-slate-900">offensive techniques</strong> with <strong className="text-slate-900">defensive monitoring</strong> and investigation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">→</span>
                <span className="text-slate-700">Skilled in bridging <strong className="text-slate-900">offensive security actions</strong> with <strong className="text-slate-900">defensive detection outcomes</strong>, enabling <strong className="text-slate-900">end-to-end security analysis</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">→</span>
                <span className="text-slate-700">Solid foundation in <strong className="text-slate-900">network security</strong>, <strong className="text-slate-900">system security</strong>, and <strong className="text-slate-900">applied cybersecurity engineering</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">→</span>
                <span className="text-slate-700">Hands-on experience in <strong className="text-slate-900">quantum computing</strong>, including <strong className="text-slate-900">quantum image encoding</strong>, <strong className="text-slate-900">compression</strong>, and <strong className="text-slate-900">classification workflows</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">→</span>
                <span className="text-slate-700">Worked on <strong className="text-slate-900">quantum representations</strong> (e.g., <span className="bg-blue-100 px-2 py-1 rounded text-blue-900 font-mono text-sm">FRQI</span>, <span className="bg-blue-100 px-2 py-1 rounded text-blue-900 font-mono text-sm">NEQR</span>, <span className="bg-blue-100 px-2 py-1 rounded text-blue-900 font-mono text-sm">MCQI</span>) and <strong className="text-slate-900">quantum ML-based evaluation</strong> under <strong className="text-slate-900">NISQ constraints</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">→</span>
                <span className="text-slate-700"><strong className="text-slate-900">Analytical, engineering-driven</strong> approach to problem solving rather than tool-centric usage</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
