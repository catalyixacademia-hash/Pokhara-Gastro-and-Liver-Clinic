import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CTASection from "../components/CTASection";

export default function Endoscopy() {
  return (
    <>
      <section className="relative pt-32 pb-20 gradient-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm mb-6">Our Services</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-heading">Upper GI Endoscopy</h1>
            <p className="mt-6 text-lg text-white/60 max-w-3xl mx-auto">
              Advanced endoscopic examination of the esophagus, stomach, and duodenum for accurate diagnosis and treatment.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none"><path d="M0 80V40C240 10 480 10 720 30C960 50 1200 30 1440 10V80H0Z" fill="white"/></svg>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-navy font-heading">What is Upper GI Endoscopy?</h2>
              <p className="mt-6 text-slate-600 leading-relaxed">
                Upper GI endoscopy (also called gastroscopy) is a procedure that uses a thin, flexible tube 
                with a camera (endoscope) to examine the upper digestive tract — the esophagus, stomach, 
                and the first part of the small intestine (duodenum).
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                This procedure allows Dr. Shankar Baral to directly visualize the lining of your upper 
                digestive tract, identify abnormalities, take biopsies if needed, and perform therapeutic 
                interventions — all in a single session.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-warm-gray rounded-2xl p-8">
                <h3 className="text-xl font-bold text-navy font-heading mb-4">When is Endoscopy Recommended?</h3>
                <ul className="space-y-3">
                  {["Persistent heartburn or acid reflux", "Difficulty swallowing (dysphagia)", "Unexplained abdominal pain", "Nausea and vomiting", "GI bleeding", "Unexplained weight loss", "Suspected ulcers or tumors", "Follow-up of known conditions"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-warm-gray to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="section-title">What to Expect</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "Before", items: ["Fasting for 6-8 hours", "Medication adjustments if needed", "Sedation discussion", "Consent process"] },
              { step: "During", items: ["IV sedation for comfort", "Procedure: 15-30 minutes", "Continuous monitoring", "Painless examination"] },
              { step: "After", items: ["Brief recovery period", "Results discussion", "Resume diet gradually", "Same-day discharge"] },
            ].map((phase) => (
              <motion.div key={phase.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg">
                <h3 className="text-xl font-bold text-navy font-heading mb-4">{phase.step} the Procedure</h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/appointment" className="btn-primary inline-flex">Schedule Your Endoscopy</Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
