import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CTASection from "../components/CTASection";

export default function Colonoscopy() {
  return (
    <>
      <section className="relative pt-32 pb-20 gradient-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm mb-6">Our Services</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-heading">Colonoscopy</h1>
            <p className="mt-6 text-lg text-white/60 max-w-3xl mx-auto">
              The gold standard for colon cancer screening and diagnosis of colorectal conditions.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none"><path d="M0 80V40C240 10 480 10 720 30C960 50 1200 30 1440 10V80H0Z" fill="white"/></svg>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-navy font-heading">Why Colonoscopy Matters</h2>
              <p className="mt-6 text-slate-600 leading-relaxed">
                Colonoscopy is the most effective method for detecting colorectal cancer early, when it is 
                most treatable. It also allows for the detection and removal of precancerous polyps before 
                they become cancerous — effectively preventing colon cancer.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Recommended Age", value: "45+ Years" },
                  { label: "Screening Interval", value: "Every 10 Years" },
                  { label: "Procedure Time", value: "30-60 Minutes" },
                  { label: "Recovery Time", value: "Same Day" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-warm-gray text-center">
                    <p className="text-2xl font-bold text-navy font-heading">{stat.value}</p>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-10 text-white">
                <h3 className="text-2xl font-bold font-heading mb-6">Colonoscopy Can Detect:</h3>
                <div className="space-y-4">
                  {[
                    { title: "Colorectal Cancer", desc: "Early detection dramatically improves survival rates" },
                    { title: "Polyps", desc: "Precancerous growths that can be removed during the procedure" },
                    { title: "Inflammatory Bowel Disease", desc: "Ulcerative colitis and Crohn's disease assessment" },
                    { title: "Diverticulosis", desc: "Small pouches in the colon wall" },
                    { title: "GI Bleeding Source", desc: "Identify and treat sources of bleeding" },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <svg className="w-5 h-5 text-teal-light shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4"/></svg>
                      <div><p className="font-semibold text-sm">{item.title}</p><p className="text-white/60 text-xs">{item.desc}</p></div>
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
            <h2 className="section-title">Preparing for Your Colonoscopy</h2>
            <p className="section-subtitle">Proper preparation is essential for a successful examination.</p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { day: "3 Days Before", items: ["Stop high-fiber foods", "Avoid seeds, nuts, corn", "Begin low-residue diet"] },
              { day: "1 Day Before", items: ["Clear liquid diet only", "Drink bowel prep solution", "Stay well hydrated"] },
              { day: "Day of Procedure", items: ["Complete fasting", "No oral intake", "Arrange transportation"] },
            ].map((phase) => (
              <motion.div key={phase.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-lg">
                <h3 className="text-lg font-bold text-navy font-heading mb-3">{phase.day}</h3>
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
            <Link to="/appointment" className="btn-primary inline-flex">Schedule Your Colonoscopy</Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
