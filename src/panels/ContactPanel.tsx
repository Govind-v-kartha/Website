import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, MapPin, Github, Linkedin, CheckCircle, AlertCircle, Send } from 'lucide-react'
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        setMessage("Message received. I'll respond as soon as possible.")
        setFormData({ name: '', email: '', subject: 'Role or Internship Opportunity', message: '' })

        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 5000)
      }
    } catch (error) {
      setStatus('error')
      const details = error instanceof Error ? error.message : ''

      if (details.includes('401') || details.includes('Invalid credentials')) {
        setMessage('Email service configuration is invalid. Please use direct email.')
      } else if (details.includes('404') || details.includes('Template not found')) {
        setMessage('Email template is unavailable. Please use direct email.')
      } else {
        setMessage('Message sending failed. Please try again or contact directly by email.')
      }
    }
  }

  return (
    <div className="panel-shell">
      <div className="panel-header">
        <div className="panel-header-row">
          <div className="panel-header-icon">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h1 className="panel-title">Contact & Collaboration</h1>
            <p className="panel-subtitle">Interested in internships, project collaboration, or security-learning discussions? Reach out through direct channels or the form.</p>
          </div>
        </div>
      </div>

      <div className="panel-content">
        <div className="grid gap-5 lg:grid-cols-2">
          <section className="section-card section-card-content space-y-3">
            <h2 className="section-title">Contact Information</h2>

            <div className="space-y-2.5 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#38BDF8]" />
                <span>Kerala, India</span>
              </div>
              <a href="mailto:knvgovind@gmail.com" className="focus-ring flex items-center gap-2.5 hover:text-white transition-colors duration-300">
                <Mail className="w-4 h-4 text-[#38BDF8]" />
                <span>knvgovind@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/govind-v-kartha"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-2.5 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4 text-[#38BDF8]" />
                <span>linkedin.com/in/govind-v-kartha</span>
              </a>
              <a
                href="https://github.com/Govind-v-kartha"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-2.5 hover:text-white transition-colors duration-300"
              >
                <Github className="w-4 h-4 text-[#38BDF8]" />
                <span>github.com/Govind-v-kartha</span>
              </a>
            </div>

            <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-200">
              <CheckCircle className="w-4 h-4" />
              Open to internships and collaborations
            </div>
          </section>

          <section className="section-card overflow-hidden">
            <div className="section-header">
              <h2 className="section-title">Send a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="section-card-content space-y-4">
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                label="Full Name"
                required
                placeholder="Your full name"
              />

              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                label="Email"
                required
                placeholder="your.email@example.com"
              />

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-200 mb-2">
                  Subject <span className="text-red-400 ml-1">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="focus-ring w-full h-11 px-3.5 border border-[#1E293B] rounded-lg bg-[#0B1020]/90 text-sm text-slate-100 transition-all hover:border-[#38BDF866] focus:outline-none"
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
                placeholder="Please share your requirement or collaboration details."
              />

              {status === 'success' && (
                <div className="p-3.5 bg-emerald-500/10 border border-emerald-400/30 rounded-lg flex items-start gap-2.5">
                  <CheckCircle className="w-4.5 h-4.5 text-emerald-300 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-emerald-200">{message}</p>
                </div>
              )}

              {status === 'error' && (
                <div className="p-3.5 bg-red-500/10 border border-red-400/30 rounded-lg flex items-start gap-2.5">
                  <AlertCircle className="w-4.5 h-4.5 text-red-300 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-200">{message}</p>
                </div>
              )}

              <Button type="submit" variant="primary" icon={Send} isLoading={status === 'loading'} className="w-full justify-center">
                {status === 'loading' ? 'Sending Message' : 'Send Message'}
              </Button>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}
