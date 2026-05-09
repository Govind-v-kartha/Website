import { Atom, GraduationCap, Mail, MapPin, Shield, User } from 'lucide-react'
import { useState } from 'react'

const CYBER_FOCUS = [
  'Web Application Penetration Testing (VAPT)',
  'Network Traffic Analysis & SOC Investigation',
  'Vulnerability Assessment & Remediation',
  'Digital Forensics & Incident Response',
]

const QUANTUM_FOCUS = [
  'Quantum Algorithm Design (Grover, QFT)',
  'Qiskit Circuit Engineering & AerSimulator',
  'Quantum Image Encoding (NEQR) & Scrambling',
  'Post-Quantum Cryptography (Kyber, Dilithium)',
]

const CORE_FACTS = [
  { label: 'Studying', value: 'MSc Computer Science (Cybersecurity)' },
  { label: 'Based in', value: 'Kerala, India' },
  { label: 'Looking for', value: 'Internships & entry-level roles' },
  { label: 'How I work', value: 'Document everything. Verify before claiming.' },
]

export default function ProfilePanel() {
  const [imageVisible, setImageVisible] = useState(true)

  return (
    <div className="panel-shell">
      <div className="panel-header">
        <div className="panel-header-row">
          <div className="panel-header-icon">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h1 className="panel-title">About Me</h1>
            <p className="panel-subtitle">Two interests, one mindset: build it, break it, understand it.</p>
          </div>
        </div>
      </div>

      <div className="panel-content space-y-6">
        <div className="grid gap-6 lg:grid-cols-[0.85fr,1.15fr] items-start">
          {/* Photo + facts */}
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

            <div className="space-y-2.5 text-sm text-slate-300 pt-1">
              <p className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--accent)]" /> Kerala, India
              </p>
              <p className="inline-flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--accent)]" /> knvgovind@gmail.com
              </p>
              <p className="inline-flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[var(--accent)]" /> MSc Computer Science (Cybersecurity)
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="stat-tile text-center">
                <p className="stat-value text-xl">6+</p>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">Projects</p>
              </div>
              <div className="stat-tile text-center">
                <p className="stat-value text-xl">4</p>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">Certificates</p>
              </div>
            </div>
          </div>

          {/* Bio + dual-focus */}
          <div className="space-y-5">
            <div className="section-card section-card-content space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                <span className="text-white">Cybersecurity Analyst &amp; </span>
                <span className="gradient-text">Quantum Computing Engineer</span>
              </h2>
              <p className="text-slate-300 leading-relaxed">
                I started in cybersecurity — web pentesting, network analysis, SOC work — and
                kept getting pulled toward what comes next: quantum computing and the
                cryptography that survives it. So I learned both. I write Qiskit circuits the
                same week I write Burp Suite reports.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Two projects make this concrete:{' '}
                <span className="text-white font-semibold">QuantMail</span>, a quantum-secure
                email client running live on Vercel, and the{' '}
                <span className="text-white font-semibold">Hybrid AI-Quantum Image Encryption</span>{' '}
                system, which uses a Vision Transformer to pick what matters in an image and
                NEQR quantum circuits to encrypt it. Both are real, both work, both are on GitHub.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Cyber focus */}
              <div className="section-card section-card-content space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="badge-cyber !rounded-md !py-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    Cybersecurity
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  {CYBER_FOCUS.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-[var(--accent)] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantum focus */}
              <div className="section-card section-card-content space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="badge-quantum !rounded-md !py-1.5">
                    <Atom className="w-3.5 h-3.5" />
                    Quantum Computing
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  {QUANTUM_FOCUS.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-[var(--accent-2)] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="section-card section-card-content">
              <p className="section-label mb-3">Quick Facts</p>
              <div className="grid gap-3 sm:grid-cols-2 text-sm text-slate-300">
                {CORE_FACTS.map((fact) => (
                  <div key={fact.label} className="space-y-0.5">
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{fact.label}</p>
                    <p>{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
