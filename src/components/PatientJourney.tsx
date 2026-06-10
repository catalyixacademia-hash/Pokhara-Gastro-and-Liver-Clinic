import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Book Appointment", desc: "Schedule your consultation easily online or by phone.", icon: "📅" },
  { step: "02", title: "Consultation", desc: "Meet Dr. Shankar Baral for a thorough evaluation of your condition.", icon: "🩺" },
  { step: "03", title: "Investigation", desc: "Advanced diagnostic tests including endoscopy, colonoscopy, and Fibroscan.", icon: "🔬" },
  { step: "04", title: "Diagnosis", desc: "Accurate diagnosis based on clinical evidence and international guidelines.", icon: "📋" },
  { step: "05", title: "Treatment", desc: "Personalized treatment plan with the latest therapeutic procedures.", icon: "💊" },
  { step: "06", title: "Follow-up Care", desc: "Ongoing monitoring and support for long-term digestive health.", icon: "❤️" },
];

export default function PatientJourney() {
  return (
    <section className="py-20 lg:py-28 gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMzUiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      <div className="absolute -top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-medical-red/15 blur-[120px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-4 border border-white/10">
            Your Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading">
            Your Path to Digestive Wellness
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            A structured, patient-centered approach from your first contact to complete recovery.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="glass-card p-8 h-full hover:bg-white/15 transition-all duration-500">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-5xl font-bold text-white/15 font-heading">{item.step}</span>
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
              {/* Connector line (desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/20"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
