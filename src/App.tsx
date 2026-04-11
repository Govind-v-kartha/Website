import { useCallback, useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import Sidebar from './components/Sidebar'
import { TopBar } from './components/TopBar'
import Footer from './components/Footer'

import HomePanel from './panels/HomePanel'
import ProfilePanel from './panels/ProfilePanel'
import SkillsPanel from './panels/SkillsPanel'
import ServicesPanel from './panels/ServicesPanel'
import ProjectsPanel from './panels/ProjectsPanel'
import EducationPanel from './panels/EducationPanel'
import ContactPanel from './panels/ContactPanel'

type SectionId = 'home' | 'profile' | 'skills' | 'services' | 'projects' | 'education' | 'contact'

const SECTION_IDS: SectionId[] = ['home', 'profile', 'skills', 'services', 'projects', 'education', 'contact']

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home')
  const shouldReduceMotion = useReducedMotion()

  const navigateToSection = useCallback(
    (section: SectionId) => {
      const target = document.getElementById(section)
      if (!target) return

      setActiveSection(section)
      target.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth', block: 'start' })
      window.history.replaceState(null, '', `#${section}`)
    },
    [shouldReduceMotion]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id as SectionId)
        }
      },
      {
        rootMargin: '-32% 0px -46% 0px',
        threshold: [0.2, 0.4, 0.6],
      }
    )

    SECTION_IDS.forEach((id) => {
      const sectionElement = document.getElementById(id)
      if (sectionElement) observer.observe(sectionElement)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as SectionId
    if (SECTION_IDS.includes(hash)) {
      requestAnimationFrame(() => navigateToSection(hash))
    }
  }, [navigateToSection])

  return (
    <div className="min-h-screen">
      <TopBar activeSection={activeSection} onNavigate={navigateToSection} />
      <Sidebar activeSection={activeSection} onNavigate={navigateToSection} />

      <main className="pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <section id="home" className="scroll-mt-24 surface-section">
            <HomePanel onNavigate={navigateToSection} />
          </section>

          <section id="profile" className="scroll-mt-24 surface-section">
            <ProfilePanel />
          </section>

          <section id="skills" className="scroll-mt-24 surface-section">
            <SkillsPanel />
          </section>

          <section id="services" className="scroll-mt-24 surface-section">
            <ServicesPanel />
          </section>

          <section id="projects" className="scroll-mt-24 surface-section">
            <ProjectsPanel />
          </section>

          <section id="education" className="scroll-mt-24 surface-section">
            <EducationPanel />
          </section>

          <section id="contact" className="scroll-mt-24 surface-section">
            <ContactPanel />
          </section>
        </div>
      </main>

      <Footer onNavigate={navigateToSection} />
    </div>
  )
}
