import { useEffect, useMemo, useRef, useState } from 'react'
import { Code2, Shield, Radar, TerminalSquare } from 'lucide-react'

type SkillItem = {
  label: string
  value: number
}

type FlattenedSkill = SkillItem & {
  domain: string
  shortLabel: string
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

const toSlug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const abbreviateLabel = (label: string) => {
  const words = label.split(/[\s&/-]+/).filter(Boolean)
  if (words.length <= 1) return label.slice(0, 3).toUpperCase()
  return words.slice(0, 3).map((word) => word[0]).join('').toUpperCase()
}

export default function SkillsPanel() {
  const [animated, setAnimated] = useState(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  const analytics = useMemo(() => {
    const allItems: FlattenedSkill[] = SKILL_COLUMNS.flatMap((column) =>
      column.items.map((item) => ({
        ...item,
        domain: column.title,
        shortLabel: abbreviateLabel(item.label),
      }))
    )

    const averageScore = Math.round(allItems.reduce((sum, item) => sum + item.value, 0) / allItems.length)
    const advancedCount = allItems.filter((item) => item.value >= 85).length
    const domainAverages = SKILL_COLUMNS.map((column) => Math.round(column.items.reduce((sum, item) => sum + item.value, 0) / column.items.length))
    const advancedRatio = Math.round((advancedCount / allItems.length) * 100)

    return {
      averageScore,
      advancedCount,
      totalItems: allItems.length,
      domains: SKILL_COLUMNS.length,
      barItems: allItems,
      topStrengths: [...allItems].sort((a, b) => b.value - a.value).slice(0, 4),
      shortformIndex: allItems.map((item) => ({
        shortLabel: item.shortLabel,
        label: item.label,
      })),
      circularStats: [
        {
          label: 'Offensive Avg',
          value: domainAverages[0],
          hint: SKILL_COLUMNS[0].title,
          start: '#5EEAD4',
          end: '#14B8A6',
        },
        {
          label: 'Tools Avg',
          value: domainAverages[1],
          hint: SKILL_COLUMNS[1].title,
          start: '#99F6E4',
          end: '#0F766E',
        },
        {
          label: 'Overall Avg',
          value: averageScore,
          hint: 'Across all competency items',
          start: '#2DD4BF',
          end: '#0F9D8E',
        },
        {
          label: 'Advanced Ratio',
          value: advancedRatio,
          hint: `${advancedCount} of ${allItems.length} skills at advanced level`,
          start: '#5EEAD4',
          end: '#0B8E82',
        },
      ],
    }
  }, [])

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

  const animatedValue = (value: number) => (animated ? value : 0)

  return (
    <div ref={sectionRef} className="panel-shell">
      <div className="panel-header">
        <div className="panel-header-row">
          <div className="panel-header-icon">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="panel-title">Technical Competencies</h1>
            <p className="panel-subtitle">Dashboard view of applied cybersecurity capability across practical tooling, analysis workflows, and testing domains.</p>
          </div>
        </div>
      </div>

      <div className="panel-content space-y-6">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <article className="section-card section-card-content">
            <p className="section-label">Average Score</p>
            <p className="mt-1 text-2xl font-semibold text-white">{animatedValue(analytics.averageScore)}%</p>
            <p className="mt-1 text-xs text-slate-400">Across all tracked competencies</p>
          </article>

          <article className="section-card section-card-content">
            <p className="section-label">Advanced Skills</p>
            <p className="mt-1 text-2xl font-semibold text-white">{animatedValue(analytics.advancedCount)}</p>
            <p className="mt-1 text-xs text-slate-400">Competencies currently at advanced level</p>
          </article>

          <article className="section-card section-card-content">
            <p className="section-label">Total Competencies</p>
            <p className="mt-1 text-2xl font-semibold text-white">{animatedValue(analytics.totalItems)}</p>
            <p className="mt-1 text-xs text-slate-400">Skills mapped across both domains</p>
          </article>

          <article className="section-card section-card-content">
            <p className="section-label">Domains Covered</p>
            <p className="mt-1 text-2xl font-semibold text-white">{analytics.domains}</p>
            <p className="mt-1 text-xs text-slate-400">Capability tracks represented</p>
          </article>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.45fr,0.95fr]">
          <section className="section-card overflow-hidden">
            <div className="section-header">
              <div className="flex items-center justify-between gap-3">
                <h2 className="section-title">Competency Distribution</h2>
                <span className="meta-chip">Bars</span>
              </div>
            </div>

            <div className="section-card-content">
              <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 sm:gap-3 items-end h-56">
                {analytics.barItems.map((item) => {
                  const value = animatedValue(item.value)
                  const isCapability = item.domain === SKILL_COLUMNS[0].title

                  return (
                    <div key={item.label} className="flex flex-col items-center gap-2">
                      <div className="relative h-40 w-4 sm:w-5 rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_72%,transparent)] overflow-hidden">
                        <div
                          className="absolute bottom-0 left-0 right-0 rounded-full transition-all duration-700"
                          style={{
                            height: `${value}%`,
                            background: isCapability
                              ? 'linear-gradient(180deg, #5EEAD4 0%, #14B8A6 100%)'
                              : 'linear-gradient(180deg, #99F6E4 0%, #0F766E 100%)',
                          }}
                        />
                      </div>
                      <span className="text-[10px] text-slate-400" title={item.label}>
                        {item.shortLabel}
                      </span>
                    </div>
                  )
                })}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#14B8A6]" />
                  Offensive & Defensive Capability
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#0F766E]" />
                  Tools & Programming
                </span>
              </div>

              <div className="mt-4 rounded-lg border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg-elevated)_86%,transparent)] p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Shortform Index</p>
                <div className="mt-2 grid gap-1.5 sm:grid-cols-2 text-xs">
                  {analytics.shortformIndex.map((entry) => (
                    <div key={`${entry.shortLabel}-${entry.label}`} className="flex items-center gap-2 min-w-0">
                      <span className="inline-flex h-5 min-w-8 items-center justify-center rounded-md border border-[var(--accent-soft-border)] bg-[var(--accent-soft)] px-1 text-[10px] font-semibold text-[#D7FFFA]">
                        {entry.shortLabel}
                      </span>
                      <span className="text-slate-300 truncate" title={entry.label}>
                        {entry.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section-card overflow-hidden">
            <div className="section-header">
              <div className="flex items-center justify-between gap-3">
                <h2 className="section-title">Key Ratios</h2>
                <span className="meta-chip">Circles</span>
              </div>
            </div>

            <div className="section-card-content">
              <div className="grid grid-cols-2 gap-4">
                {analytics.circularStats.map((stat) => {
                  const progress = animatedValue(stat.value)
                  const strokeDashoffset = SKILL_RING_CIRCUMFERENCE * (1 - progress / 100)
                  const gradientId = `stat-ring-${toSlug(stat.label)}`

                  return (
                    <article key={stat.label} className="rounded-xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg-elevated)_90%,transparent)] p-3 text-center space-y-2">
                      <div className="mx-auto relative h-20 w-20">
                        <svg viewBox="0 0 72 72" className="h-full w-full -rotate-90">
                          <defs>
                            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor={stat.start} />
                              <stop offset="100%" stopColor={stat.end} />
                            </linearGradient>
                          </defs>
                          <circle cx="36" cy="36" r={SKILL_RING_RADIUS} fill="none" stroke="rgba(159,176,189,0.24)" strokeWidth="7" />
                          <circle
                            cx="36"
                            cy="36"
                            r={SKILL_RING_RADIUS}
                            fill="none"
                            stroke={`url(#${gradientId})`}
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeDasharray={SKILL_RING_CIRCUMFERENCE}
                            strokeDashoffset={strokeDashoffset}
                            className="transition-all duration-700 drop-shadow-[0_0_10px_rgba(20,184,166,0.35)]"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-[#5EEAD4]">{progress}%</div>
                      </div>
                      <p className="text-xs font-semibold text-slate-200">{stat.label}</p>
                      <p className="text-[10px] text-slate-400 leading-relaxed">{stat.hint}</p>
                    </article>
                  )
                })}
              </div>
            </div>
          </section>
        </div>

        <section className="section-card section-card-content">
          <div className="flex items-center justify-between gap-3">
            <h2 className="section-title">Top Strengths Snapshot</h2>
            <span className="meta-chip">Highlights</span>
          </div>

          <div className="mt-4 space-y-2.5">
            {analytics.topStrengths.map((item, index) => {
              const value = animatedValue(item.value)

              return (
                <article
                  key={`${item.label}-${item.domain}`}
                  className="rounded-lg border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg-elevated)_86%,transparent)] px-3 py-2.5 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="inline-flex items-center justify-center h-5 min-w-5 px-1 rounded-md text-[10px] font-semibold bg-[var(--accent-soft)] border border-[var(--accent-soft-border)] text-[#D7FFFA]">
                      #{index + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm text-white truncate">{item.label}</p>
                      <p className="text-[11px] text-slate-400 truncate">{item.domain}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-sm font-semibold text-[var(--accent)]">{value}%</span>
                    <div className="h-1.5 w-16 rounded-full bg-[color-mix(in_srgb,var(--surface)_72%,transparent)] overflow-hidden">
                      <div className="h-full rounded-full bg-[var(--accent)] transition-all duration-700" style={{ width: `${value}%` }} />
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <div className="section-card section-card-content">
          <div className="flex items-center gap-2 text-slate-300 text-sm">
            <Radar className="w-4 h-4 text-[var(--accent)]" />
            Capability depth is demonstrated through practical project outcomes, reproducible lab workflows, and reporting clarity.
          </div>
        </div>
      </div>
    </div>
  )
}
