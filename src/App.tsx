import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar'
import { TopBar } from './components/TopBar'

// Import panel components
import HomePanel from './panels/HomePanel'
import ProfilePanel from './panels/ProfilePanel'
import SkillsPanel from './panels/SkillsPanel'
import ProjectsPanel from './panels/ProjectsPanel'
import EducationPanel from './panels/EducationPanel'
import ContactPanel from './panels/ContactPanel'

type PanelType = 'home' | 'profile' | 'skills' | 'projects' | 'education' | 'contact'

const panelComponents: Record<PanelType, React.ComponentType> = {
  home: HomePanel,
  profile: ProfilePanel,
  skills: SkillsPanel,
  projects: ProjectsPanel,
  education: EducationPanel,
  contact: ContactPanel,
}

export default function App() {
  const [activePanel, setActivePanel] = useState<PanelType>('home')

  const ActivePanel = panelComponents[activePanel]

  return (
    <div className="h-screen bg-white flex flex-col">
      {/* Top Bar */}
      <TopBar activePanel={activePanel} />

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar activePanel={activePanel} onPanelChange={setActivePanel} />

  

        {/* Main Content Area */}
        <main className="flex-1 overflow-hidden pt-16 pl-0 lg:pl-72">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePanel}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="h-full"
            >
              <ActivePanel />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
