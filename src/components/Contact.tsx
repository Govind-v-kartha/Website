export default function Contact() {
  return (
    <section
      id="contact"
      className="animate-fade-in-up bg-white px-4 sm:px-6 lg:px-0 py-12 sm:py-14 border-b border-slate-200"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5 pb-3 border-b border-slate-300">
          Contact
        </h2>
        <div className="space-y-2">
          <p className="text-slate-900">
            <strong>Govind V Kartha</strong>
          </p>
          <p className="text-slate-700">
            Email:{' '}
            <a href="mailto:knvgovind@gmail.com" className="text-blue-600 hover:text-blue-700">
              knvgovind@gmail.com
            </a>
          </p>
          <p className="text-slate-700">
            GitHub:{' '}
            <a
              href="https://github.com/Govind-v-kartha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              github.com/Govind-v-kartha
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
