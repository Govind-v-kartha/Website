import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../components/Button';
import Footer from '../components/Footer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

export default function HomePanel() {
  return (
    <div className="flex flex-col h-full bg-white overflow-y-auto">
      {/* Hero Section */}
      <motion.div
        className="flex-1 px-8 lg:px-16 py-12 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl">
          {/* Profile Photo */}
          <motion.div
            className="mb-8"
            variants={itemVariants}
          >
            <motion.img
              src="/profile.jpg"
              alt="Govind V Kartha"
              className="w-32 h-32 rounded-2xl object-cover shadow-lg border-2 border-slate-200"
              whileHover={{ scale: 1.05, borderColor: '#3b82f6' }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-slate-900 mb-2 leading-tight tracking-tight"
            variants={itemVariants}
          >
            Govind V Kartha
          </motion.h1>

          {/* Title/Role - HIGHLIGHTED in blue box */}
          <motion.div
            className="mb-4 inline-block"
            variants={itemVariants}
          >
            <span className="text-2xl font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-lg inline-block">
              Cybersecurity Professional
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-lg text-slate-700 mb-6 leading-relaxed max-w-xl font-medium"
            variants={itemVariants}
          >
            <strong>Security Testing • Detection • Threat Analysis</strong>
          </motion.p>

          {/* Location & Email */}
          <motion.div
            className="flex flex-col gap-2 mb-10 text-slate-600"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">📍</span>
              <span>Thrissur, Kerala, India</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">✉️</span>
              <a href="mailto:knvgovind@gmail.com" className="hover:text-blue-600 transition-colors">
                knvgovind@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Intro Paragraphs - SHOWN FIRST */}
          <motion.div
            className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8"
            variants={itemVariants}
          >
            <p className="text-slate-700 leading-relaxed mb-4">
              Passionate about identifying vulnerabilities and building secure systems. With expertise in <strong>security testing</strong>, <strong>detection engineering</strong>, and <strong>threat analysis</strong>, I help organizations strengthen their <strong>cybersecurity posture</strong>.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Explore my work through the navigation above to learn more about my <strong>projects</strong>, <strong>skills</strong>, and <strong>experience</strong> in the cybersecurity field.
            </p>
          </motion.div>

          {/* CTA Buttons - BELOW paragraphs */}
          <motion.div
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <Button
              variant="primary"
              size="lg"
              icon={Github}
              onClick={() => window.open('https://github.com/Govind-v-kartha', '_blank')}
            >
              GitHub Profile
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={Linkedin}
              onClick={() => window.open('https://linkedin.com/in/govind-v-kartha', '_blank')}
            >
              LinkedIn Profile
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={Mail}
              onClick={() => document.getElementById('contact')?.scrollIntoView()}
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
