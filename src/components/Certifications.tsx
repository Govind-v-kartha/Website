export default function Certifications() {
  return (
    <>
      {/* Achievements Section */}
      <section
        id="achievements"
        className="animate-fade-in-up bg-emerald-50 px-4 sm:px-6 lg:px-0 py-12 sm:py-14 border-b border-slate-200"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5 pb-3 border-b border-emerald-300">
            Achievements
          </h2>
          <ul className="space-y-3 ml-6">
            <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-emerald-500 before:font-bold">
              Runners-up, DUK InnoFest 2025
            </li>
          </ul>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="animate-fade-in-up bg-purple-50 px-4 sm:px-6 lg:px-0 py-12 sm:py-14 border-b border-slate-200"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5 pb-3 border-b border-purple-300">
            Certifications
          </h2>
          <ul className="space-y-3 ml-6">
            <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-purple-500 before:font-bold">
              Google Cloud Career Launchpad – Cybersecurity Track
            </li>
            <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-purple-500 before:font-bold">
              Google IT Support – Technical Support Fundamentals
            </li>
            <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-purple-500 before:font-bold">
              Cisco Networking Academy – Introduction to Cybersecurity
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
