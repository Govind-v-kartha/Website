import { motion } from 'framer-motion'
import { Zap, Shield, Code, Server } from 'lucide-react'
import Footer from '../components/Footer'

const SKILL_CARDS = [
  {
    title: 'Security Testing & Attack Analysis',
    icon: Shield,
    color: 'from-red-50 to-orange-50',
    accentColor: 'text-red-600',
    bgAccent: 'bg-red-50',
    items: [
      'Network reconnaissance and service enumeration',
      'Vulnerability discovery and exploitation testing',
      'Web and service-level attack simulation',
      'Credential and service abuse scenarios',
      'Post-exploitation behavior analysis',
    ],
  },
  {
    title: 'Detection, Monitoring & Investigation',
    icon: Zap,
    color: 'from-amber-50 to-yellow-50',
    accentColor: 'text-amber-600',
    bgAccent: 'bg-amber-50',
    items: [
      'Network traffic inspection and protocol analysis',
      'Host-based and network-based threat detection',
      'Alert validation and event correlation',
      'Distinguishing malicious vs benign activity',
      'Investigation workflows based on observed indicators',
    ],
  },
]

export default function SkillsPanel() {
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
            <Code className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Technical Skills</h1>
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
          {/* Main Skill Cards */}
          {SKILL_CARDS.map((skillCard, idx) => {
            const Icon = skillCard.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${skillCard.color} px-6 py-5 border-b border-slate-200`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 ${skillCard.bgAccent} rounded-lg`}>
                      <Icon className={`w-5 h-5 ${skillCard.accentColor}`} />
                    </div>
                    <h2 className="text-lg font-semibold text-slate-900">{skillCard.title}</h2>
                  </div>
                </div>

                {/* Card Content */}
                <div className="px-6 py-5">
                  <ul className="space-y-3">
                    {skillCard.items.map((item, itemIdx) => (
                      <motion.li
                        key={itemIdx}
                        variants={itemVariants}
                        className="flex items-start gap-3 text-slate-700"
                      >
                        <span className="text-blue-600 font-bold mt-0.5">→</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}

          {/* Tools & Technologies Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-5 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-purple-50 rounded-lg">
                  <Server className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-lg font-semibold text-slate-900">Tools & Technologies</h2>
              </div>
            </div>

            <div className="px-6 py-5 space-y-6">
              {/* Testing Tools */}
              <div>
                <p className="font-semibold text-slate-900 mb-3 text-sm">Testing:</p>
                <div className="flex flex-wrap gap-2">
                  {['Nmap', 'Metasploit', 'Burp Suite', 'OWASP ZAP', 'Hydra', 'Nikto', 'Gobuster', 'SQLMap'].map((tool, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Detection Tools */}
              <div>
                <p className="font-semibold text-slate-900 mb-3 text-sm">Detection:</p>
                <div className="flex flex-wrap gap-2">
                  {['Wazuh', 'Suricata'].map((tool, idx) => (
                    <span key={idx} className="bg-amber-50 text-amber-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-amber-100 transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Traffic Analysis Tools */}
              <div>
                <p className="font-semibold text-slate-900 mb-3 text-sm">Traffic Analysis:</p>
                <div className="flex flex-wrap gap-2">
                  {['Wireshark', 'Scapy'].map((tool, idx) => (
                    <span key={idx} className="bg-purple-50 text-purple-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Platforms */}
              <div>
                <p className="font-semibold text-slate-900 mb-3 text-sm">Platforms:</p>
                <div className="flex flex-wrap gap-2">
                  {['Kali Linux', 'VirtualBox'].map((tool, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Programming Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-6 py-5 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-50 rounded-lg">
                  <Code className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-lg font-semibold text-slate-900">Programming</h2>
              </div>
            </div>

            <div className="px-6 py-5">
              <ul className="space-y-3">
                {[
                  'Python (security tooling, packet analysis, automation)',
                  'Bash (basic)',
                  'SQL (basic)',
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <span className="text-blue-600 font-bold mt-0.5">→</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
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
