import { useCallback, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePanel from './panels/HomePanel'
import ProfilePanel from './panels/ProfilePanel'
import SkillsPanel from './panels/SkillsPanel'
import ServicesPanel from './panels/ServicesPanel'
import ProjectsPanel from './panels/ProjectsPanel'
import ContactPanel from './panels/ContactPanel'
import Certifications from './components/Certifications'

type SectionId = 'home' | 'about' | 'skills' | 'services' | 'projects' | 'certificates' | 'contact'

const SECTION_IDS: SectionId[] = ['home', 'about', 'skills', 'services', 'projects', 'certificates', 'contact']

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home')

  const navigateToSection = useCallback((section: SectionId) => {
    const sectionElement = document.getElementById(section)
    if (!sectionElement) return

    sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveSection(section)
    window.history.replaceState(null, '', `#${section}`)
  }, [])

  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as SectionId
    if (SECTION_IDS.includes(hash)) {
      requestAnimationFrame(() => navigateToSection(hash))
    }
  }, [navigateToSection])

  useEffect(() => {
    const activeObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveSection(visible[0].target.id as SectionId)
        }
      },
      {
        rootMargin: '-42% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.5],
      }
    )

    SECTION_IDS.forEach((id) => {
      const sectionElement = document.getElementById(id)
      if (sectionElement) activeObserver.observe(sectionElement)
    })

    return () => activeObserver.disconnect()
  }, [])

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 }
    )

    const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    revealElements.forEach((element) => revealObserver.observe(element))

    return () => revealObserver.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} onNavigate={navigateToSection} />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <section id="home" className="scroll-mt-24" data-reveal>
            <HomePanel onNavigate={navigateToSection} />
          </section>

          <section id="about" className="scroll-mt-24" data-reveal>
            <ProfilePanel />
          </section>

          <section id="skills" className="scroll-mt-24" data-reveal>
            <SkillsPanel />
          </section>

          <section id="services" className="scroll-mt-24" data-reveal>
            <ServicesPanel />
          </section>

          <section id="projects" className="scroll-mt-24" data-reveal>
            <ProjectsPanel />
          </section>

          <section id="certificates" className="scroll-mt-24" data-reveal>
            <Certifications />
          </section>

          <section id="contact" className="scroll-mt-24" data-reveal>
            <ContactPanel />
          </section>
        </div>
      </main>

      <Footer onNavigate={navigateToSection} />
    </div>
  )
}
