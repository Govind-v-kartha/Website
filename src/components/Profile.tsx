export default function Profile() {
  const profilePoints = [
    "Cybersecurity professional with hands-on experience in security testing, threat detection, and investigation workflows",
    "Strong understanding of how real-world attacks are executed and how they manifest in network and host telemetry",
    "Experience performing attack simulation, vulnerability exploitation, and post-exploitation analysis in controlled lab environments",
    "Practical exposure to network traffic analysis, alert validation, and event correlation using security monitoring tools",
    "Built and operated a security testing & analysis lab integrating offensive techniques with defensive monitoring and investigation",
    "Skilled in bridging offensive security actions with defensive detection outcomes, enabling end-to-end security analysis",
    "Solid foundation in network security, system security, and applied cybersecurity engineering",
    "Hands-on experience in quantum computing, including quantum image encoding, compression, and classification workflows",
    "Worked on quantum representations (e.g., FRQI / NEQR / MCQI) and quantum ML-based evaluation under NISQ constraints",
    "Analytical, engineering-driven approach to problem solving rather than tool-centric usage"
  ]

  return (
    <section
      id="about"
      className="animate-fade-in-up bg-slate-50 px-4 sm:px-6 lg:px-0 py-12 sm:py-14 border-b border-slate-200"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-300">
          Professional Profile
        </h2>
        <div className="space-y-3">
          {profilePoints.map((point, index) => (
            <div key={index} className="flex gap-3 text-slate-700 leading-relaxed">
              <span className="text-blue-600 font-semibold mt-0.5">•</span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
