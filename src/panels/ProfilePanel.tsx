import { Award, CheckCircle2, Mail, MapPin, Shield, User } from 'lucide-react'
import { useState } from 'react'

const FOCUS_AREAS = [
  'Web Application Security Testing',
  'Network Traffic Analysis and Triage',
  'Vulnerability Assessment and Reporting',
  'Detection-Aware Security Investigation',
  'Quantum Computing and Qiskit Fundamentals',
  'Post-Quantum Cryptography and QKD Concepts',
]

const CORE_FACTS = [
  { label: 'Current Program', value: 'MSc Computer Science (Cybersecurity)' },
  { label: 'Location', value: 'Kerala, India' },
  { label: 'Availability', value: 'Open to Internship / Entry-Level Roles' },
  { label: 'Work Style', value: 'Structured, evidence-driven, documentation-focused' },
]

const HIGHLIGHT_METRICS = [
  { label: 'Security Projects', value: '6+' },
  { label: 'Certificates', value: '4' },
  { label: 'Academic Degrees', value: '2' },
]

export default function ProfilePanel() {
  const [imageVisible, setImageVisible] = useState(true)

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
              <p className="panel-subtitle">Entry-level cybersecurity candidate with practical project experience and a strong learning trajectory.</p>
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
              <div>
                <h2 className="text-2xl font-semibold text-white">Cybersecurity Graduate &amp; Quantum Computing Enthusiast</h2>
                <p className="mt-3 text-slate-300 leading-relaxed">
                  I focus on practical security work — identifying vulnerabilities, validating findings with evidence,
                  and communicating remediation clearly — while actively building skills in quantum computing,
                  Qiskit, and post-quantum cryptography. My interest sits at the intersection of classical
                  cybersecurity and the quantum-era threat landscape, and I am open to roles in security analysis,
                  secure engineering, and applied quantum-security research.
                </p>
              </div>

              <div>
                <p className="section-label mb-2">Focus Areas</p>
                <div className="grid gap-2">
                  {FOCUS_AREAS.map((area) => (
                    <p key={area} className="text-sm text-slate-300 inline-flex items-start gap-2">
                      <Shield className="w-4 h-4 text-[var(--accent)] mt-0.5" />
                      <span>{area}</span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-2 text-sm text-slate-300">
                {CORE_FACTS.map((fact) => (
                  <p key={fact.label}>
                    <span className="text-slate-400">{fact.label}:</span> {fact.value}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="panel-shell">
        <div className="panel-content">
          <div className="grid gap-3 sm:grid-cols-3">
            {HIGHLIGHT_METRICS.map((metric) => (
              <div key={metric.label} className="section-card section-card-content text-center space-y-2">
                <div className="mx-auto icon-accent w-fit">
                  {metric.label === 'Certificates' ? (
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
                  ) : metric.label === 'Academic Degrees' ? (
                    <Award className="w-4 h-4 text-[var(--accent)]" />
                  ) : (
                    <Shield className="w-4 h-4 text-[var(--accent)]" />
                  )}
                </div>
                <p className="text-2xl font-semibold text-white">{metric.value}</p>
                <p className="text-sm text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
