export default function Contact() {
  return (
    <div className="animate-fade-in-up">
      <section className="bg-white px-4 sm:px-6 lg:px-0 py-12 sm:py-14 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Contact
          </h1>
          <div className="space-y-4">
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
    </div>
  )
}
