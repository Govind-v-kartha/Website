export default function Education() {
  return (
    <div className="animate-fade-in-up">
      <section className="bg-white px-4 sm:px-6 lg:px-0 py-12 sm:py-14 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Education & Certifications
          </h1>

          {/* Education */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              Education
            </h2>
            <div className="space-y-4">
              <p className="text-slate-700">
                <strong className="text-slate-900">MSc Computer Science (Cybersecurity)</strong> — Digital University Kerala
              </p>
              <p className="text-slate-700">
                <strong className="text-slate-900">BSc Applied Physics</strong> — University of Calicut
              </p>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              Certifications & Achievements
            </h2>
            <ul className="space-y-3 ml-6">
              <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                Google Cloud Career Launchpad – Cybersecurity Track
              </li>
              <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                Google IT Support – Technical Support Fundamentals
              </li>
              <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                Cisco Networking Academy – Introduction to Cybersecurity
              </li>
              <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                Runners-up, DUK InnoFest 2025
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
