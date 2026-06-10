import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CTASection from "../components/CTASection";

const conditions = [
  { name: "Fatty Liver Disease", desc: "Accumulation of fat in liver cells, often associated with obesity and diabetes. Non-invasive Fibroscan assessment and comprehensive management including lifestyle modification." },
  { name: "Hepatitis B", desc: "Viral infection causing liver inflammation. Expert antiviral treatment and long-term monitoring to prevent cirrhosis and liver cancer." },
  { name: "Hepatitis C", desc: "Chronic viral infection now curable with direct-acting antiviral medications. Screening, diagnosis, and treatment available." },
  { name: "Cirrhosis", desc: "Advanced scarring of the liver from various causes. Comprehensive management including complication screening with endoscopy and Fibroscan." },
  { name: "Liver Failure", desc: "Acute or chronic deterioration of liver function requiring specialized intensive management and urgent evaluation." },
  { name: "Portal Hypertension", desc: "Increased pressure in the portal vein system, often a complication of cirrhosis. Expert endoscopic and medical management." },
  { name: "Alcoholic Liver Disease", desc: "Liver damage from excessive alcohol consumption. Comprehensive care including counseling, medical management, and liver assessment." },
  { name: "Autoimmune Hepatitis", desc: "Immune-mediated liver inflammation requiring specialized immunosuppressive therapy and long-term monitoring." },
];

export default function Hepatology() {
  return (
    <>
      <section className="relative pt-32 pb-20 gradient-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm mb-6">Our Services</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-heading">Hepatology</h1>
            <p className="mt-6 text-lg text-white/60 max-w-3xl mx-auto">
              Specialized diagnosis and treatment of liver diseases with advanced non-invasive 
              assessment tools including Fibroscan technology.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none"><path d="M0 80V40C240 10 480 10 720 30C960 50 1200 30 1440 10V80H0Z" fill="white"/></svg>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Liver Conditions We Treat</h2>
            <p className="section-subtitle">
              Expert hepatology care covering the full spectrum of liver diseases with advanced diagnostic and treatment options.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {conditions.map((c, idx) => (
              <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-navy font-heading mb-2">{c.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-warm-gray to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-navy font-heading">Advanced Liver Assessment</h2>
              <p className="mt-6 text-slate-600 leading-relaxed">
                We use Fibroscan® technology — a non-invasive, painless method to assess liver 
                fibrosis and steatosis without the need for a liver biopsy. This advanced tool 
                provides immediate results, allowing for rapid diagnosis and treatment planning.
              </p>
              <ul className="mt-6 space-y-3">
                {["Painless and non-invasive", "Immediate results", "No sedation required", "Accurate fibrosis staging", "Fatty liver quantification"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-teal-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/appointment" className="btn-primary mt-8 inline-flex">Book a Liver Assessment</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-medical-red to-medical-red-dark rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-bold font-heading mb-4">Liver Health Warning Signs</h3>
              <div className="space-y-3 text-white/80 text-sm">
                {["Unexplained fatigue", "Jaundice (yellowing of skin/eyes)", "Abdominal swelling", "Dark urine", "Loss of appetite", "Easy bruising or bleeding"].map((s) => (
                  <div key={s} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>{s}</div>
                ))}
              </div>
              <p className="mt-6 text-white/60 text-sm">If you experience any of these symptoms, seek expert evaluation promptly.</p>
            </motion.div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
