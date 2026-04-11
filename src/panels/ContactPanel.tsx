import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion, useReducedMotion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, FileText, Download } from 'lucide-react'
import { Button } from '../components/Button'
import { Input, TextArea } from '../components/Input'

export default function ContactPanel() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Role or Internship Opportunity',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const shouldReduceMotion = useReducedMotion()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

      if (!publicKey || !serviceId || !templateId) {
        throw new Error('EmailJS credentials not configured')
      }

      emailjs.init(publicKey)

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'knvgovind@gmail.com',
      }

      const response = await emailjs.send(serviceId, templateId, templateParams)

      if (response.status === 200) {
        setStatus('success')
        setMessage('Message received. I will respond as soon as possible.')
        setFormData({ name: '', email: '', subject: 'Role or Internship Opportunity', message: '' })

        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 5000)
      }
    } catch (error) {
      setStatus('error')

      let errorDetails = ''
      if (error instanceof Error) {
        errorDetails = error.message
      }

      if (errorDetails.includes('401') || errorDetails.includes('Invalid credentials')) {
        setMessage('Email service configuration is invalid. Please try direct email.')
      } else if (errorDetails.includes('404') || errorDetails.includes('Template not found')) {
        setMessage('Email template is unavailable. Please try direct email.')
      } else {
        setMessage('Message sending failed. Please try again or contact directly by email.')
      }
    }
  }

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

  return (
    <div className="panel-shell">
      <div className="panel-header">
        <div className="panel-header-row">
          <div className="panel-header-icon">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h1 className="panel-title">Contact</h1>
            <p className="panel-subtitle">For security opportunities, project collaboration, or quantum-security discussions, connect through the form or direct channels below.</p>
          </div>
        </div>
      </div>

      <div className="panel-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl grid gap-6 lg:grid-cols-[1.2fr,0.8fr]"
        >
          <motion.section variants={itemVariants} className="section-card overflow-hidden" whileHover={shouldReduceMotion ? undefined : { y: -1 }}>
            <div className="section-header">
              <h2 className="section-title">Send a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="section-card-content space-y-4">
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                label="Name"
                required
                placeholder="Your full name"
              />

              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                label="Email"
                required
                placeholder="your.email@example.com"
              />

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-800 mb-2">
                  Subject <span className="text-red-600 ml-1">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="focus-ring w-full h-11 px-3.5 border border-slate-300 rounded-lg bg-slate-50/95 text-sm text-slate-900 transition-all hover:border-blue-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600"
                >
                  <option value="Role or Internship Opportunity">Role or Internship Opportunity</option>
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="Quantum Security Discussion">Quantum Security Discussion</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                label="Message"
                required
                rows={5}
                placeholder="Please share details about the opportunity, project context, or your question."
              />

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start gap-2.5"
                >
                  <CheckCircle className="w-4.5 h-4.5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-emerald-800">{message}</p>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2.5"
                >
                  <AlertCircle className="w-4.5 h-4.5 text-red-700 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800">{message}</p>
                </motion.div>
              )}

              <Button type="submit" variant="primary" icon={Send} isLoading={status === 'loading'} className="w-full justify-center">
                {status === 'loading' ? 'Sending Message' : 'Send Message'}
              </Button>
            </form>
          </motion.section>

          <motion.section variants={itemVariants} className="section-card overflow-hidden h-fit" whileHover={shouldReduceMotion ? undefined : { y: -1 }}>
            <div className="section-header">
              <h2 className="section-title">Direct Channels</h2>
            </div>

            <div className="section-card-content space-y-3">
              <a
                href="/cv/Govind_V_Kartha_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-3 p-3 rounded-lg border border-slate-200/90 bg-slate-50/75 hover:border-blue-200 hover:bg-white transition-all duration-200"
              >
                <div className="icon-accent">
                  <FileText className="w-4 h-4 text-blue-700" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500">Curriculum Vitae</p>
                  <p className="text-sm font-semibold text-slate-900">View CV (PDF)</p>
                </div>
              </a>

              <a
                href="/cv/Govind_V_Kartha_CV.pdf"
                download="Govind_V_Kartha_CV.pdf"
                className="focus-ring flex items-center gap-3 p-3 rounded-lg border border-slate-200/90 bg-slate-50/75 hover:border-blue-200 hover:bg-white transition-all duration-200"
              >
                <div className="icon-accent">
                  <Download className="w-4 h-4 text-blue-700" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500">Curriculum Vitae</p>
                  <p className="text-sm font-semibold text-slate-900">Download CV</p>
                </div>
              </a>

              <a
                href="mailto:knvgovind@gmail.com"
                className="focus-ring flex items-center gap-3 p-3 rounded-lg border border-slate-200/90 bg-slate-50/75 hover:border-blue-200 hover:bg-white transition-all duration-200"
              >
                <div className="icon-accent">
                  <Mail className="w-4 h-4 text-blue-700" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="text-sm font-semibold text-slate-900">knvgovind@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/Govind-v-kartha"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-3 p-3 rounded-lg border border-slate-200/90 bg-slate-50/75 hover:border-blue-200 hover:bg-white transition-all duration-200"
              >
                <div className="icon-accent">
                  <Github className="w-4 h-4 text-blue-700" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">GitHub</p>
                  <p className="text-sm font-semibold text-slate-900">github.com/Govind-v-kartha</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/govind-v-kartha"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-3 p-3 rounded-lg border border-slate-200/90 bg-slate-50/75 hover:border-blue-200 hover:bg-white transition-all duration-200"
              >
                <div className="icon-accent">
                  <Linkedin className="w-4 h-4 text-blue-700" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">LinkedIn</p>
                  <p className="text-sm font-semibold text-slate-900">linkedin.com/in/govind-v-kartha</p>
                </div>
              </a>
            </div>
          </motion.section>
        </motion.div>
      </div>

    </div>
  )
}
