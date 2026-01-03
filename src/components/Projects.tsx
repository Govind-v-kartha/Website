export default function Projects() {
  return (
    <section
      id="projects"
      className="animate-fade-in-up bg-slate-50 px-4 sm:px-6 lg:px-0 py-12 sm:py-14 border-b border-slate-200"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5 pb-3 border-b border-slate-300">
          Projects
        </h2>

        {/* Project 1 */}
        <div className="mb-8 pb-8 border-b border-slate-200 last:border-b-0 last:mb-0 last:pb-0">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Security Testing & Analysis Lab
          </h3>
          <p className="text-slate-700 mb-4">
            Designed and operated a comprehensive security testing and analysis lab to understand how real-world attacks are executed and how they are detected and investigated using security monitoring tools.
          </p>

          <div className="space-y-4">
            <div>
              <p className="font-semibold text-slate-900 mb-2">Key Focus:</p>
              <ul className="space-y-2 ml-6">
                <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                  Attack simulation using Kali Linux
                </li>
                <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                  Vulnerability exploitation against Metasploitable
                </li>
                <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                  Traffic capture and inspection
                </li>
                <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                  Network-based detection using Suricata
                </li>
                <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                  Host-based monitoring using Wazuh
                </li>
                <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                  Correlation of attack activity with alerts and logs
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-slate-900 mb-2">Environment:</p>
              <p className="text-slate-700">
                Kali Linux, Metasploitable, Wazuh, Suricata, Wireshark, VirtualBox
              </p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="mb-8 pb-8 border-b border-slate-200 last:border-b-0 last:mb-0 last:pb-0">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            QMail – Secure Email Communication Prototype
          </h3>
          <p className="text-slate-700 mb-4">
            Developed a secure email communication prototype focused on protecting communication against classical and future quantum threats.
          </p>

          <div className="space-y-4">
            <div>
              <p className="font-semibold text-slate-900 mb-2">Focus Areas:</p>
              <ul className="space-y-2 ml-6">
                <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                  Secure communication
                </li>
                <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                  Post-quantum cryptography concepts
                </li>
                <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                  Simulated Quantum Key Distribution (QKD)
                </li>
              </ul>
            </div>
          </div>

          <a
            href="https://github.com/Govind-v-kartha/Qmail"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition-colors"
          >
            GitHub Repository
          </a>
        </div>

        {/* Project 3 */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            MyShark – Network Traffic Analysis Tool
          </h3>
          <p className="text-slate-700 mb-4">
            Built a Python-based packet capture and traffic analysis tool for inspecting live network traffic and identifying suspicious communication patterns.
          </p>

          <div className="space-y-4">
            <div>
              <p className="font-semibold text-slate-900 mb-2">Focus Areas:</p>
              <ul className="space-y-2 ml-6">
                <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                  Packet capture
                </li>
                <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                  Protocol analysis
                </li>
                <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                  Security investigation support
                </li>
              </ul>
            </div>
          </div>

          <a
            href="https://github.com/Govind-v-kartha/MyShark"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition-colors"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </section>
  )
}
