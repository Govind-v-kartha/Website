import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <Sidebar activePanel="home" onPanelChange={() => {}} />

      {/* Main Container */}
      <div className="flex-1 flex flex-col">
        {/* Main Content */}
        <main className="flex-1 lg:ml-60 ml-0">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
