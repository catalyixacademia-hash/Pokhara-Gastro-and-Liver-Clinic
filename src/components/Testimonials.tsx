import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rajesh P.",
    location: "Pokhara",
    text: "Dr. Shankar Baral diagnosed my chronic stomach issue that other doctors couldn't figure out for years. His endoscopy procedure was quick and painless. Highly recommended!",
    rating: 5,
    condition: "Chronic Gastritis",
  },
  {
    name: "Sunita M.",
    location: "Syangja",
    text: "I traveled from Syangja for my liver treatment. The Fibroscan test was completely painless and gave me clear answers about my fatty liver condition. Excellent care.",
    rating: 5,
    condition: "Fatty Liver Disease",
  },
  {
    name: "Gopal T.",
    location: "Kaski",
    text: "My colonoscopy experience at Pokhara Gastro Liver Center was very professional. The staff explained everything clearly and Dr. Shankar made me feel comfortable throughout.",
    rating: 5,
    condition: "Colon Cancer Screening",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-medical-red/10 text-medical-red text-sm font-semibold mb-4">
            Patient Testimonials
          </span>
          <h2 className="section-title">
            What Our Patients Say
          </h2>
          <p className="section-subtitle">
            Real stories from real patients who trusted us with their digestive health.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-50 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 text-5xl text-navy/10 font-serif leading-none">"</div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy to-medical-red flex items-center justify-center text-white text-sm font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.location} • {t.condition}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
