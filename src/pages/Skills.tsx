export default function Skills() {
  return (
    <div className="animate-fade-in-up">
      <section className="bg-white px-4 sm:px-6 lg:px-0 py-12 sm:py-14 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Technical Skills
          </h1>

          {/* Security Testing & Attack Analysis */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              Security Testing & Attack Analysis
            </h2>
            <ul className="space-y-2 ml-6">
              <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                Network reconnaissance and service enumeration
              </li>
              <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                Vulnerability discovery and exploitation testing
              </li>
              <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                Web and service-level attack simulation
              </li>
              <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                Credential and service abuse scenarios
              </li>
              <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                Post-exploitation behavior analysis
              </li>
            </ul>
          </div>

          {/* Detection, Monitoring & Investigation */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              Detection, Monitoring & Investigation
            </h2>
            <ul className="space-y-2 ml-6">
              <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                Network traffic inspection and protocol analysis
              </li>
              <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                Host-based and network-based threat detection
              </li>
              <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                Alert validation and event correlation
              </li>
              <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                Distinguishing malicious vs benign activity
              </li>
              <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                Investigation workflows based on observed indicators
              </li>
            </ul>
          </div>

          {/* Tools & Technologies */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              Tools & Technologies
            </h2>
            <div className="space-y-2">
              <p className="text-slate-700">
                <strong>Testing:</strong> Nmap, Metasploit, Burp Suite, OWASP ZAP, Hydra, Nikto, Gobuster, SQLMap
              </p>
              <p className="text-slate-700">
                <strong>Detection:</strong> Wazuh, Suricata
              </p>
              <p className="text-slate-700">
                <strong>Traffic Analysis:</strong> Wireshark, Scapy
              </p>
              <p className="text-slate-700">
                <strong>Platforms:</strong> Kali Linux, VirtualBox
              </p>
            </div>
          </div>

          {/* Programming */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              Programming
            </h2>
            <ul className="space-y-2 ml-6">
              <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                Python (security tooling, packet analysis, automation)
              </li>
              <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                Bash (basic)
              </li>
              <li className="text-slate-700 relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-slate-500 before:font-bold">
                SQL (basic)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
