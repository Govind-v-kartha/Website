import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  User,
  Zap,
  FolderGit2,
  GraduationCap,
  Mail,
  Menu,
  X,
  Github,
  Linkedin,
  ExternalLink
} from 'lucide-react';

interface SidebarProps {
  activePanel: 'home' | 'profile' | 'skills' | 'projects' | 'education' | 'contact';
  onPanelChange: (panel: 'home' | 'profile' | 'skills' | 'projects' | 'education' | 'contact') => void;
}

const navigationItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'skills', label: 'Skills', icon: Zap },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'contact', label: 'Contact', icon: Mail }
];

export default function Sidebar({ activePanel, onPanelChange }: SidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="fixed top-4 right-4 z-50 lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {sidebarOpen ? (
          <X size={24} className="text-slate-900" />
        ) : (
          <Menu size={24} className="text-slate-900" />
        )}
      </motion.button>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      {/* Sidebar */}
      <motion.div
        className={`
          fixed left-0 top-16 bottom-0 w-72 bg-gradient-to-b from-slate-50 to-white
          border-r border-slate-200 overflow-y-auto z-40
          lg:translate-x-0 transform transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        initial={false}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Profile Section - CLICKABLE */}
          <motion.div
            className="mb-8 p-4 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl border border-blue-200/50 cursor-pointer hover:border-blue-300 hover:shadow-md transition-all"
            onClick={() => {
              onPanelChange('home' as const);
              setSidebarOpen(false);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            whileHover={{ translateY: -2 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/profile.jpg"
                alt="Govind V Kartha"
                className="w-14 h-14 rounded-xl object-cover shadow-md hover:shadow-lg hover:scale-105 transition-all"
              />
              <div className="flex-1">
                <p className="font-bold text-slate-900 text-sm leading-tight">Govind V Kartha</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              <span className="font-semibold text-slate-700">Expert in</span> offensive security testing, defensive threat analysis, and quantum computing
            </p>
          </motion.div>

          {/* Navigation Items */}
          <nav className="space-y-2 mb-8">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activePanel === item.id;

              return (
                <motion.button
                  key={item.id}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm
                    transition-all duration-200
                    ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'text-slate-600 hover:bg-slate-100'
                    }
                  `}
                  onClick={() => {
                    onPanelChange(item.id as 'home' | 'profile' | 'skills' | 'projects' | 'education' | 'contact');
                    setSidebarOpen(false);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + index * 0.05 }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon size={18} className="flex-shrink-0" />
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      className="ml-auto w-2 h-2 rounded-full bg-blue-400"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Bottom Social Links - WORKING */}
          <motion.div
            className="mt-auto border-t border-slate-200 pt-6 space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="https://github.com/Govind-v-kartha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors group"
            >
              <Github size={16} />
              <span>GitHub</span>
              <ExternalLink size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://www.linkedin.com/in/govind-v-kartha-3816a2322"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors group"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
              <ExternalLink size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="mailto:knvgovind@gmail.com"
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors group"
            >
              <Mail size={16} />
              <span>Email</span>
              <ExternalLink size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </div>
      </motion.div>

    </>
  );
}
