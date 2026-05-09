import { useState } from 'react'

type Certificate = {
  name: string
  issuer: string
  year: string
  url: string
  acronym: string
  logoSrc?: string | null
  logoAlt?: string
}

const EDUCATION = [
  {
    title: 'MSc Computer Science (Cybersecurity)',
    institution: 'Digital University Kerala',
    period: 'Current',
  },
  {
    title: 'BSc Applied Physics',
    institution: 'University of Calicut',
    period: 'Completed',
  },
]

const CERTIFICATES: Certificate[] = [
  {
    name: 'Google Cloud Cybersecurity Certificate',
    issuer: 'Google Cloud / Credly',
    year: '2025',
    url: 'https://www.credly.com/badges/f9fc0a01-62ab-4b5c-8eb9-3a7296031004/public_url',
    acronym: 'GCC',
    logoSrc: '/images/certifications/google-cloud.svg',
    logoAlt: 'Google Cloud logo',
  },
  {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco / Credly',
    year: '2024',
    url: 'https://www.credly.com/badges/358c0350-ae0c-4962-9ad1-37f0ef0b4821/public_url',
    acronym: 'ICS',
    logoSrc: '/images/certifications/cisco.svg',
    logoAlt: 'Cisco logo',
  },
  {
    name: 'Coursera Certificate',
    issuer: 'Coursera',
    year: '2024',
    url: 'https://www.coursera.org/account/accomplishments/records/C2DTBASQCKEB',
    acronym: 'CRS',
    logoSrc: '/images/certifications/coursera.svg',
    logoAlt: 'Coursera logo',
  },
  {
    name: 'Runners-up, DUK InnoFest 2025',
    issuer: 'Digital University Kerala',
    year: '2025',
    url: '/images/certifications/Nova_Govind%20V%20Kartha.pdf',
    acronym: 'DUK',
    logoSrc: '/images/certifications/duk.svg',
    logoAlt: 'Digital University Kerala mark',
  },
]

export default function Certifications() {
  const [hiddenLogos, setHiddenLogos] = useState<Record<string, boolean>>({})

  return (
    <div className="panel-shell">
      <div className="panel-header">
        <div className="panel-header-row">
          <div>
            <h1 className="panel-title">Education & Certificates</h1>
            <p className="panel-subtitle">Where I studied and what I've earned along the way. All links are verifiable.</p>
          </div>
        </div>
      </div>

      <div className="panel-content space-y-5">
        <div className="grid gap-4 md:grid-cols-2">
          {EDUCATION.map((entry) => (
            <article key={entry.title} className="section-card section-card-content">
              <p className="text-sm text-slate-400">{entry.period}</p>
              <h2 className="section-title mt-1">{entry.title}</h2>
              <p className="text-sm text-slate-400 mt-1">{entry.institution}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {CERTIFICATES.map((certificate) => {
            const showLogo = certificate.logoSrc && !hiddenLogos[certificate.name]

            return (
              <article key={`${certificate.name}-${certificate.year}`} className="section-card overflow-hidden">
                <div className="h-28 border-b border-[var(--border)]">
                  {showLogo ? (
                    <div className="h-full w-full bg-[color-mix(in_srgb,var(--bg-elevated)_94%,transparent)] px-5 flex items-center justify-center">
                      <img
                        src={certificate.logoSrc || ''}
                        alt={certificate.logoAlt ?? `${certificate.issuer} logo`}
                        className="h-12 w-full object-contain"
                        onError={() => setHiddenLogos((prev) => ({ ...prev, [certificate.name]: true }))}
                      />
                    </div>
                  ) : (
                    <div className="placeholder-gradient h-full w-full flex items-center justify-center text-[var(--accent)] font-semibold tracking-wide">
                      {certificate.acronym}
                    </div>
                  )}
                </div>

                <div className="section-card-content space-y-1.5">
                  <h2 className="text-sm font-semibold text-white leading-snug">{certificate.name}</h2>
                  <p className="text-xs text-slate-400">{certificate.issuer}</p>
                  <p className="text-xs text-[var(--accent)]">{certificate.year}</p>
                  {certificate.url !== '#' && (
                    <a
                      href={certificate.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex mt-2 text-xs text-[var(--accent)] hover:text-white transition-colors duration-300"
                    >
                      View Certificate →
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
