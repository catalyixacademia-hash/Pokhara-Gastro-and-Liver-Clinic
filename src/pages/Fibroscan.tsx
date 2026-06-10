import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CTASection from "../components/CTASection";

export default function Fibroscan() {
  return (
    <>
      <section className="relative pt-32 pb-20 gradient-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm mb-6">Advanced Technology</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-heading">Fibroscan</h1>
            <p className="mt-4 text-xl text-teal-light font-semibold">Non-Invasive Liver Assessment</p>
            <p className="mt-6 text-lg text-white/60 max-w-3xl mx-auto">
              Advanced transient elastography technology for painless, rapid assessment 
              of liver fibrosis and steatosis — no needles, no biopsy required.
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
              <h2 className="text-3xl font-bold text-navy font-heading">What is Fibroscan?</h2>
              <p className="mt-6 text-slate-600 leading-relaxed">
                Fibroscan is a specialized ultrasound-based technology that measures liver stiffness 
                (fibrosis) and liver fat content (steatosis) without any needles or invasive procedures. 
                It uses a technique called transient elastography to assess the health of your liver 
                in just a few minutes.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                The procedure is completely painless, takes only 5-10 minutes, and provides immediate 
                results. It can often replace the need for a traditional liver biopsy for assessing 
                fibrosis stage and fatty liver disease.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-gradient-to-br from-teal-accent to-teal-dark rounded-2xl p-10 text-white">
                <h3 className="text-2xl font-bold font-heading mb-6">Key Advantages</h3>
                <div className="space-y-4">
                  {[
                    { icon: "✅", text: "Completely non-invasive and painless" },
                    { icon: "⏱️", text: "Quick: results in 5-10 minutes" },
                    { icon: "📊", text: "Immediate fibrosis and steatosis scores" },
                    { icon: "💉", text: "No needles, no sedation, no biopsy" },
                    { icon: "🔄", text: "Repeatable for monitoring disease progression" },
                    { icon: "🏥", text: "Performed right in our clinic" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm">{item.text}</span>
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
            <h2 className="section-title">Who Should Get a Fibroscan?</h2>
            <p className="section-subtitle">Fibroscan is recommended for patients with or at risk for liver disease.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Patients with fatty liver disease (NAFLD/NASH)",
              "Chronic hepatitis B or C patients",
              "People with diabetes or metabolic syndrome",
              "Those with elevated liver enzymes",
              "Heavy alcohol users for liver monitoring",
              "Patients with cirrhosis for follow-up",
              "Individuals with obesity considering liver health",
              "Anyone on long-term hepatotoxic medications",
              "Patients with autoimmune liver diseases",
            ].map((item) => (
              <motion.div key={item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-start gap-3">
                <svg className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                <span className="text-sm text-slate-700">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/appointment" className="btn-teal inline-flex text-base px-8 py-4">Schedule Your Fibroscan Today</Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
