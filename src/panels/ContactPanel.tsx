import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import Footer from '../components/Footer'

export default function ContactPanel() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Query',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

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

      console.log('EmailJS Config:', { publicKey, serviceId, templateId })

      if (!publicKey || !serviceId || !templateId) {
        throw new Error('EmailJS credentials not configured')
      }

      emailjs.init(publicKey)

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'knvgovind@gmail.com'
      }

      console.log('Sending email with params:', templateParams)

      const response = await emailjs.send(serviceId, templateId, templateParams)

      console.log('EmailJS Response:', response)

      if (response.status === 200) {
        setStatus('success')
        setMessage('Thank you for reaching out! I will get back to you soon.')
        setFormData({ name: '', email: '', subject: 'General Query', message: '' })

        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 5000)
      }
    } catch (error) {
      setStatus('error')
      console.error('Full EmailJS error:', error)
      
      let errorDetails = ''
      if (error instanceof Error) {
        errorDetails = error.message
        console.error('Error message:', error.message)
        console.error('Error stack:', error.stack)
      }
      
      // Check for specific EmailJS errors
      if (errorDetails.includes('401') || errorDetails.includes('Invalid credentials')) {
        setMessage('EmailJS credentials are invalid. Please check your environment variables.')
      } else if (errorDetails.includes('404') || errorDetails.includes('Template not found')) {
        setMessage('Email template not found. Please configure EmailJS correctly.')
      } else {
        setMessage('Failed to send message. Please try again or email directly.')
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
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
            <Mail className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Contact</h1>
        </div>
      </div>

      {/* Panel Content */}
      <div className="flex-1 overflow-y-auto px-8 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl space-y-8"
        >
          {/* Contact Form Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-6 py-5 border-b border-slate-200">
              <h2 className="text-lg font-semibold text-slate-900">Send me a message</h2>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Name */}
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 hover:border-slate-300"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 hover:border-slate-300"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              {/* Subject */}
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 hover:border-slate-300"
                >
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="General Query">General Query</option>
                </select>
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 hover:border-slate-300 resize-none"
                  placeholder="Your message..."
                />
              </motion.div>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-emerald-800 text-sm">{message}</p>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-800 text-sm">{message}</p>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Direct Contact Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-6 py-5 border-b border-slate-200">
              <h2 className="text-lg font-semibold text-slate-900">Or reach out directly</h2>
            </div>

            <div className="p-6 space-y-4">
              <motion.a
                href="mailto:knvgovind@gmail.com"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer group"
              >
                <div className="p-2.5 bg-blue-600 rounded-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Email</p>
                  <p className="font-semibold text-blue-600 group-hover:text-blue-700">
                    knvgovind@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/Govind-v-kartha"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer group"
              >
                <div className="p-2.5 bg-slate-700 rounded-lg">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">GitHub</p>
                  <p className="font-semibold text-slate-900 group-hover:text-slate-700">
                    github.com/Govind-v-kartha
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/govind-v-kartha"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer group"
              >
                <div className="p-2.5 bg-blue-600 rounded-lg">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">LinkedIn</p>
                  <p className="font-semibold text-blue-600 group-hover:text-blue-700">
                    linkedin.com/in/govind-v-kartha
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
