import { motion } from "framer-motion";
import CTASection from "../components/CTASection";

const values = [
  {
    title: "Excellence",
    desc: "We strive for the highest standards in every aspect of patient care, from diagnosis to treatment and follow-up.",
    icon: "⭐",
  },
  {
    title: "Compassion",
    desc: "We treat every patient with empathy, dignity, and respect, understanding the physical and emotional aspects of digestive health.",
    icon: "💙",
  },
  {
    title: "Innovation",
    desc: "We embrace advanced technology and evidence-based practices to provide the most effective treatments available.",
    icon: "🔬",
  },
  {
    title: "Integrity",
    desc: "We maintain the highest ethical standards with transparent communication and honest medical advice.",
    icon: "🛡️",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 gradient-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm mb-6">
              About Our Center
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-heading">
              About Pokhara Gastro Liver Center
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-3xl mx-auto">
              Western Nepal's premier destination for advanced gastroenterology, 
              hepatology, and digestive health services.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80V40C240 10 480 10 720 30C960 50 1200 30 1440 10V80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/10 text-navy text-sm font-semibold mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-heading leading-tight">
                Dedicated to Digestive Health Excellence
              </h2>
              <p className="mt-6 text-slate-600 leading-relaxed">
                Pokhara Gastro Liver Center Pvt. Ltd. is a specialized medical facility dedicated 
                exclusively to the diagnosis and treatment of digestive and liver diseases. Founded 
                with the vision of bringing world-class gastroenterology care to Western Nepal, 
                our center combines advanced technology with compassionate, patient-centered care.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Under the expert leadership of Dr. Shankar Baral, a DM Gastroenterologist with over 
                a decade of experience, we offer comprehensive services ranging from routine 
                consultations to advanced therapeutic endoscopic procedures.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-10 text-white"
            >
              <h3 className="text-2xl font-bold font-heading mb-6">Our Mission</h3>
              <p className="text-white/70 leading-relaxed mb-8">
                To provide advanced gastroenterology and hepatology care that is accessible, 
                affordable, and of the highest quality to patients across Nepal.
              </p>
              <h3 className="text-2xl font-bold font-heading mb-6">Our Vision</h3>
              <p className="text-white/70 leading-relaxed">
                To become the most trusted digestive health center in Western Nepal, 
                recognized for clinical excellence, patient satisfaction, and innovation 
                in gastrointestinal care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-warm-gray to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-accent/10 text-teal-accent text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="section-title">What Drives Us</h2>
            <p className="section-subtitle">
              These core principles guide every aspect of our patient care and clinical practice.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-shadow text-center"
              >
                <span className="text-4xl">{v.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-navy font-heading">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 gradient-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "5000+", label: "Procedures Performed" },
              { number: "10000+", label: "Patients Treated" },
              { number: "4", label: "Advanced Procedures" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-bold text-white font-heading">{stat.number}</p>
                <p className="mt-2 text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
