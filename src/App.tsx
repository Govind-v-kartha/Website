import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Sidebar from './components/Sidebar'
import { TopBar } from './components/TopBar'

import HomePanel from './panels/HomePanel'
import ProfilePanel from './panels/ProfilePanel'
import SkillsPanel from './panels/SkillsPanel'
import ProjectsPanel from './panels/ProjectsPanel'
import EducationPanel from './panels/EducationPanel'
import ContactPanel from './panels/ContactPanel'

type PanelType = 'home' | 'profile' | 'skills' | 'projects' | 'education' | 'contact'

const panelComponents: Record<PanelType, React.ComponentType<{ onPanelChange: (panel: PanelType) => void }>> = {
  home: HomePanel,
  profile: ProfilePanel,
  skills: SkillsPanel,
  projects: ProjectsPanel,
  education: EducationPanel,
  contact: ContactPanel,
}

export default function App() {
  const [activePanel, setActivePanel] = useState<PanelType>('home')
  const shouldReduceMotion = useReducedMotion()

  const ActivePanel = panelComponents[activePanel]

  return (
    <div className="h-screen flex flex-col">
      <TopBar activePanel={activePanel} onPanelChange={setActivePanel} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar activePanel={activePanel} onPanelChange={setActivePanel} />

        <main className="flex-1 overflow-hidden pt-16 pl-0 lg:pl-72">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePanel}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: shouldReduceMotion ? 0.15 : 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <ActivePanel onPanelChange={setActivePanel} />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
