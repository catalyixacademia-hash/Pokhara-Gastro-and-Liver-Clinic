import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CTASection from "../components/CTASection";

export default function ERCP() {
  return (
    <>
      <section className="relative pt-32 pb-20 gradient-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm mb-6">Advanced Procedure</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-heading">ERCP</h1>
            <p className="mt-4 text-xl text-teal-light font-semibold">Endoscopic Retrograde Cholangiopancreatography</p>
            <p className="mt-6 text-lg text-white/60 max-w-3xl mx-auto">
              An advanced therapeutic endoscopic procedure for diagnosing and treating 
              disorders of the bile ducts, gallbladder, and pancreas.
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
              <h2 className="text-3xl font-bold text-navy font-heading">What is ERCP?</h2>
              <p className="mt-6 text-slate-600 leading-relaxed">
                ERCP combines endoscopy and X-ray imaging to examine and treat problems of the 
                bile and pancreatic ducts. Using a specialized endoscope, Dr. Shankar Baral can 
                access these ducts to diagnose and treat conditions such as stones, strictures, 
                and blockages.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                This minimally invasive procedure can often replace the need for traditional 
                open surgery, resulting in faster recovery and fewer complications.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-warm-gray rounded-2xl p-8">
                <h3 className="text-xl font-bold text-navy font-heading mb-4">When is ERCP Needed?</h3>
                <div className="space-y-3">
                  {[
                    "Bile duct stones (choledocholithiasis)",
                    "Bile duct strictures or blockages",
                    "Pancreatic duct stones or strictures",
                    "Unexplained jaundice",
                    "Suspected bile duct or pancreatic tumors",
                    "Bile leaks after surgery",
                    "Chronic pancreatitis management",
                    "Sphincter of Oddi dysfunction",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-medical-red shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-warm-gray to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="section-title">Benefits of ERCP</h2>
            <p className="section-subtitle">Advanced therapeutic intervention without open surgery.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Minimally Invasive", desc: "No surgical incisions required — performed entirely through the endoscope" },
              { title: "Diagnostic & Therapeutic", desc: "Both diagnoses and treats conditions in a single procedure" },
              { title: "Shorter Recovery", desc: "Less pain and faster return to normal activities compared to surgery" },
              { title: "Lower Risk", desc: "Fewer complications than traditional surgical alternatives" },
            ].map((b) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-lg text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 className="font-bold text-navy font-heading">{b.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{b.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/appointment" className="btn-primary inline-flex">Discuss ERCP with Dr. Shankar Baral</Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
