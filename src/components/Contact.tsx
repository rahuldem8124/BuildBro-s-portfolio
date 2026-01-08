export default function Contact() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#020617] to-blue-900/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-6">Let's Build Something Intelligent.</h2>
        <p className="text-gray-300 text-xl mb-10">Currently accepting new projects for Q1 2026. Get a response within 24 hours.</p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a href="mailto:your-agency@email.com" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold transition">
            Book a Free Consultation
          </a>
          <a href="https://wa.me/yournumber" className="w-full md:w-auto border border-slate-700 text-white px-10 py-4 rounded-full font-bold hover:bg-slate-800 transition">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}