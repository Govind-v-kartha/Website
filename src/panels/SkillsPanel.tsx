import { useEffect, useRef, useState } from 'react'
import { Code2, Shield, Radar, TerminalSquare } from 'lucide-react'

type SkillItem = {
  label: string
  value: number
}

const SKILL_COLUMNS: Array<{ title: string; icon: typeof Shield; items: SkillItem[] }> = [
  {
    title: 'Offensive & Defensive Capability',
    icon: Shield,
    items: [
      { label: 'Network Security', value: 88 },
      { label: 'Penetration Testing', value: 84 },
      { label: 'Detection Analysis', value: 81 },
      { label: 'SIEM & SOC Workflows', value: 78 },
      { label: 'Digital Forensics Basics', value: 72 },
      { label: 'Vulnerability Assessment', value: 86 },
    ],
  },
  {
    title: 'Tools & Programming',
    icon: TerminalSquare,
    items: [
      { label: 'Kali Linux', value: 90 },
      { label: 'Wireshark', value: 86 },
      { label: 'Metasploit', value: 79 },
      { label: 'Python', value: 85 },
      { label: 'Burp Suite', value: 82 },
      { label: 'Nmap', value: 90 },
    ],
  },
]

const SKILL_RING_RADIUS = 28
const SKILL_RING_CIRCUMFERENCE = 2 * Math.PI * SKILL_RING_RADIUS

export default function SkillsPanel() {
  const [animated, setAnimated] = useState(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className="panel-shell">
      <div className="panel-header">
        <div className="panel-header-row">
          <div className="panel-header-icon">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="panel-title">Technical Competencies</h1>
            <p className="panel-subtitle">Applied capabilities across offensive security testing, detection analysis, and practical tooling.</p>
          </div>
        </div>
      </div>

      <div className="panel-content space-y-6">
        <div className="section-card section-card-content">
          <p className="text-slate-300 text-sm sm:text-base">
            Skills that support entry-level contribution in cybersecurity roles through hands-on labs, project outcomes,
            and reproducible security workflows.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {SKILL_COLUMNS.map((column) => {
            const Icon = column.icon

            return (
              <section key={column.title} className="section-card overflow-hidden">
                <div className="section-header">
                  <div className="flex items-center gap-3">
                    <div className="icon-accent">
                      <Icon className="w-4 h-4 text-[#38BDF8]" />
                    </div>
                    <h2 className="section-title">{column.title}</h2>
                  </div>
                </div>

                <div className="section-card-content">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {column.items.map((item) => {
                      const progress = animated ? item.value : 0
                      const strokeDashoffset = SKILL_RING_CIRCUMFERENCE * (1 - progress / 100)

                      return (
                        <article key={item.label} className="rounded-lg border border-[#1E293B] bg-[#0B1020]/80 p-3 flex flex-col items-center gap-2">
                          <div className="relative h-20 w-20 sm:h-24 sm:w-24">
                            <svg viewBox="0 0 72 72" className="h-full w-full -rotate-90">
                              <circle cx="36" cy="36" r={SKILL_RING_RADIUS} fill="none" stroke="#1E293B" strokeWidth="7" />
                              <circle
                                cx="36"
                                cy="36"
                                r={SKILL_RING_RADIUS}
                                fill="none"
                                stroke="#38BDF8"
                                strokeWidth="7"
                                strokeLinecap="round"
                                strokeDasharray={SKILL_RING_CIRCUMFERENCE}
                                strokeDashoffset={strokeDashoffset}
                                className="transition-all duration-700"
                              />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-semibold text-[#38BDF8]">
                              {item.value}%
                            </span>
                          </div>
                          <p className="text-xs text-slate-300 text-center leading-snug">{item.label}</p>
                        </article>
                      )
                    })}
                  </div>
                </div>
              </section>
            )
          })}
        </div>

        <div className="section-card section-card-content">
          <div className="flex items-center gap-2 text-slate-300 text-sm">
            <Radar className="w-4 h-4 text-[#38BDF8]" />
            Capability depth is demonstrated through practical project outcomes, lab reproducibility, and clear reporting.
          </div>
        </div>
      </div>
    </div>
  )
}
