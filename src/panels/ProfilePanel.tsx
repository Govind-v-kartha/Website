import { useEffect, useRef, useState } from 'react'
import { MapPin, Mail, CheckCircle2, User, Award, Shield, Bug } from 'lucide-react'

const COUNTERS = [
  { value: 6, suffix: '+', label: 'Security Projects', icon: Shield },
  { value: 3, suffix: '+', label: 'Certificates', icon: CheckCircle2 },
  { value: 2, suffix: '', label: 'Academic Degrees', icon: Award },
  { value: 1, suffix: '+', label: 'Major Academic Recognition', icon: Bug },
]

const INTERESTS = ['Offensive Security', 'Detection Analysis', 'Digital Forensics', 'Quantum Security', 'Open Source Security']
const HOBBIES = ['Music', 'Travel', 'Sports', 'Movies']

export default function ProfilePanel() {
  const [imageVisible, setImageVisible] = useState(true)
  const [counts, setCounts] = useState(COUNTERS.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!counterRef.current || hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return

        setHasAnimated(true)
        const start = performance.now()
        const duration = 1200

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          setCounts(COUNTERS.map((counter) => Math.floor(counter.value * progress)))
          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.3 }
    )

    observer.observe(counterRef.current)
    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <div className="space-y-6">
      <div className="panel-shell">
        <div className="panel-header">
          <div className="panel-header-row">
            <div className="panel-header-icon">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h1 className="panel-title">Professional Profile</h1>
              <p className="panel-subtitle">Applied cybersecurity learning path across offensive testing, detection analysis, and quantum foundations.</p>
            </div>
          </div>
        </div>

        <div className="panel-content">
          <div className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr] items-start">
            <div className="section-card section-card-content space-y-4">
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] aspect-square">
                {imageVisible ? (
                  <img
                    src="/profile.jpg"
                    alt="Govind V Kartha"
                    className="h-full w-full object-cover"
                    onError={() => setImageVisible(false)}
                  />
                ) : (
                  <div className="placeholder-gradient h-full w-full flex items-center justify-center text-sm text-slate-300">
                    Profile image unavailable
                  </div>
                )}
              </div>

              <div className="grid gap-2 text-sm text-slate-300">
                <p className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--accent)]" /> Kerala, India
                </p>
                <p className="inline-flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[var(--accent)]" /> knvgovind@gmail.com
                </p>
              </div>
            </div>

            <div className="section-card section-card-content space-y-5">
              <div className="inline-flex items-center gap-2 pb-1 border-b border-[var(--accent-soft-border)]">
                <h2 className="text-2xl font-semibold text-white">Cybersecurity Graduate (Entry-Level)</h2>
              </div>

              <p className="text-slate-300 leading-relaxed text-balance">
                Cybersecurity fresher focused on offensive security practice, web application testing, and detection-aware
                investigation workflows, with growing project-backed depth in quantum-security concepts.
              </p>

              <p className="text-slate-400 leading-relaxed">
                I prioritize reproducible testing, evidence-driven reporting, and practical remediation alignment. My current
                trajectory is to contribute in internship and entry-level roles where I can support secure engineering and
                security operations outcomes.
              </p>

              <div className="grid gap-2 text-sm text-slate-300">
                <p><span className="text-slate-400">Name:</span> Govind V Kartha</p>
                <p><span className="text-slate-400">Location:</span> Kerala, India</p>
                <p><span className="text-slate-400">Email:</span> knvgovind@gmail.com</p>
                <p><span className="text-slate-400">Availability:</span> <span className="text-emerald-400">Open to Work</span></p>
              </div>

              <div>
                <p className="section-label mb-2">Interests</p>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map((interest) => (
                    <span key={interest} className="meta-chip">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="section-label mb-2">Hobbies</p>
                <div className="flex flex-wrap gap-2">
                  {HOBBIES.map((hobby) => (
                    <span key={hobby} className="meta-chip">
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={counterRef} className="panel-shell">
        <div className="panel-content">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {COUNTERS.map((counter, index) => {
              const Icon = counter.icon
              return (
                <div key={counter.label} className="section-card section-card-content text-center space-y-2">
                  <div className="mx-auto icon-accent w-fit">
                    <Icon className="w-4 h-4 text-[var(--accent)]" />
                  </div>
                  <p className="text-2xl font-semibold text-white">
                    {counts[index]}
                    {counter.suffix}
                  </p>
                  <p className="text-sm text-slate-400">{counter.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
