import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";

const faqs = [
  {
    q: "When should I see a gastroenterologist?",
    a: "You should consult a gastroenterologist if you experience persistent digestive symptoms such as abdominal pain, chronic heartburn, difficulty swallowing, changes in bowel habits, unexplained weight loss, or blood in your stool. Additionally, routine screening like colonoscopy starting at age 45 is recommended even without symptoms."
  },
  {
    q: "What is an endoscopy and is it painful?",
    a: "An upper GI endoscopy (gastroscopy) is a procedure where a thin, flexible tube with a camera is used to examine your esophagus, stomach, and duodenum. The procedure is performed under sedation, so you will be comfortable and relaxed throughout. Most patients report no pain or discomfort during the procedure."
  },
  {
    q: "Is colonoscopy painful?",
    a: "Colonoscopy is performed under IV sedation, which means you will be asleep and comfortable during the entire procedure. Most patients have no memory of the procedure and report no pain. The bowel preparation the day before is typically the most challenging part, not the procedure itself."
  },
  {
    q: "How should I prepare for endoscopy?",
    a: "For upper GI endoscopy, you need to fast (no food or drink) for at least 6-8 hours before the procedure. Your doctor will provide specific instructions regarding any medications you take. Generally, the preparation is straightforward and less involved than colonoscopy preparation."
  },
  {
    q: "What causes fatty liver disease?",
    a: "Fatty liver disease occurs when excess fat accumulates in liver cells. Common causes include obesity, type 2 diabetes, high cholesterol, excessive alcohol consumption, and metabolic syndrome. Non-alcoholic fatty liver disease (NAFLD) is increasingly common and can be assessed non-invasively with Fibroscan technology."
  },
  {
    q: "What is the difference between a Gastroenterologist and a Hepatologist?",
    a: "A gastroenterologist treats all digestive system disorders including the esophagus, stomach, intestines, colon, pancreas, and liver. A hepatologist specifically focuses on liver diseases. Dr. Shankar Baral is trained in both — he is a Consultant Gastroenterologist & Hepatologist."
  },
  {
    q: "Do I need a referral to see Dr. Shankar Baral?",
    a: "No, you do not need a referral. You can book an appointment directly with our clinic. However, if you have been referred by another doctor, please bring any relevant medical records, test results, or referral notes to your consultation."
  },
  {
    q: "What should I bring to my first appointment?",
    a: "Please bring any previous medical records, test results, imaging reports (CT scans, ultrasounds), a list of current medications, and your insurance information if applicable. It's also helpful to write down your symptoms, their duration, and any questions you have for the doctor."
  },
  {
    q: "Is Fibroscan safe? Can it replace a liver biopsy?",
    a: "Fibroscan is completely safe, non-invasive, and painless. It uses ultrasound-based technology with no radiation. For many patients, Fibroscan can provide sufficient information about liver fibrosis and steatosis to guide treatment decisions, potentially avoiding the need for a traditional liver biopsy."
  },
  {
    q: "How much do procedures cost?",
    a: "Procedure costs vary depending on the specific test or treatment required. We strive to provide affordable, transparent pricing for all our services. Please contact our clinic directly at 061-590978 or 9856088019 for current pricing, or discuss during your consultation."
  },
  {
    q: "Where exactly is the clinic located in Pokhara?",
    a: "We are located at Pokhara-8, Newroad, Kaski, near Anupam Marg (Street No. 12). We are centrally located and easily accessible from all parts of Pokhara and surrounding districts. You can call us for detailed directions."
  },
  {
    q: "What is ERCP and when is it needed?",
    a: "ERCP (Endoscopic Retrograde Cholangiopancreatography) is an advanced therapeutic procedure that combines endoscopy and X-ray to diagnose and treat conditions of the bile ducts and pancreas. It's typically needed for bile duct stones, strictures, certain types of jaundice, and pancreatic duct problems."
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      <section className="relative pt-32 pb-20 gradient-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm mb-6">Patient Resources</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-heading">Frequently Asked Questions</h1>
            <p className="mt-6 text-lg text-white/60 max-w-3xl mx-auto">
              Find answers to common questions about gastroenterology, liver care, and our procedures.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none"><path d="M0 80V40C240 10 480 10 720 30C960 50 1200 30 1440 10V80H0Z" fill="white"/></svg>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-navy pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-navy to-navy-dark text-white"
          >
            <h3 className="text-2xl font-bold font-heading">Still Have Questions?</h3>
            <p className="mt-2 text-white/60">We're here to help. Contact us directly or book a consultation.</p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <Link to="/appointment" className="btn-primary">Book Appointment</Link>
              <a href="tel:9856088019" className="btn-secondary">Call: 9856088019</a>
            </div>
          </motion.div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
