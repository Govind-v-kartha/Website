export default function Home() {
  return (
    <div className="animate-fade-in-up">
      <section className="bg-white px-4 sm:px-6 lg:px-0 py-12 sm:py-14 border-b border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">
            Govind V Kartha
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mb-2 font-medium leading-relaxed">
            Cybersecurity Professional<br />
            Security Testing • Detection • Threat Analysis
          </p>
          <p className="text-sm text-slate-600 mb-1">Thrissur, Kerala, India</p>
          <p className="text-sm text-slate-600 mb-5">knvgovind@gmail.com</p>

          {/* Buttons */}
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="https://github.com/Govind-v-kartha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition-colors"
            >
              GitHub Profile
            </a>
            <a
              href="#"
              className="inline-block px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
