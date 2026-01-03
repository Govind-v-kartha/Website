export default function Skills() {
  return (
    <section
      id="skills"
      className="animate-fade-in-up bg-white px-4 sm:px-6 lg:px-0 py-12 sm:py-14 border-b border-slate-200"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5 pb-3 border-b border-slate-300">
          Technical Skills
        </h2>

        {/* Security Testing & Attack Analysis */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            Security Testing & Attack Analysis
          </h3>
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
          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            Detection, Monitoring & Investigation
          </h3>
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
          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            Tools & Technologies
          </h3>
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
          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            Programming
          </h3>
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
  )
}
