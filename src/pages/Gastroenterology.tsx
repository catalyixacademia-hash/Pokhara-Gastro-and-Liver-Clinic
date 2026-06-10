import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CTASection from "../components/CTASection";

const conditions = [
  { name: "Gastritis", desc: "Inflammation of the stomach lining causing pain, indigestion, and discomfort. We offer endoscopic evaluation and targeted treatment." },
  { name: "Acid Reflux (GERD)", desc: "Chronic acid reflux causing heartburn and regurgitation. Comprehensive management including lifestyle modification and medical therapy." },
  { name: "Peptic Ulcer Disease", desc: "Open sores in the stomach or duodenal lining. Endoscopic diagnosis and H. pylori eradication therapy." },
  { name: "Irritable Bowel Syndrome (IBS)", desc: "Functional bowel disorder causing abdominal pain, bloating, and altered bowel habits. Personalized dietary and medical management." },
  { name: "Inflammatory Bowel Disease (IBD)", desc: "Chronic inflammatory conditions including Crohn's disease and ulcerative colitis. Long-term management with advanced therapies." },
  { name: "GI Bleeding", desc: "Acute or chronic bleeding from the digestive tract. Emergency endoscopic intervention and management." },
  { name: "Celiac Disease", desc: "Autoimmune reaction to gluten causing intestinal damage. Accurate serological and endoscopic diagnosis with dietary guidance." },
  { name: "Pancreatitis", desc: "Inflammation of the pancreas requiring expert diagnosis and comprehensive management." },
];

export default function Gastroenterology() {
  return (
    <>
      <section className="relative pt-32 pb-20 gradient-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm mb-6">Our Services</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-heading">Gastroenterology</h1>
            <p className="mt-6 text-lg text-white/60 max-w-3xl mx-auto">
              Comprehensive diagnosis and treatment of all digestive system disorders 
              using the latest evidence-based approaches and advanced technology.
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
            <h2 className="section-title">Conditions We Treat</h2>
            <p className="section-subtitle">
              Expert care for a wide range of digestive conditions affecting the esophagus, stomach, small intestine, and colon.
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="section-title">When to See a Gastroenterologist</h2>
            <div className="mt-10 grid sm:grid-cols-3 gap-6 text-left">
              {[
                { title: "Persistent Symptoms", desc: "Chronic abdominal pain, bloating, heartburn, nausea, or changes in bowel habits lasting more than a few days." },
                { title: "Warning Signs", desc: "Unexplained weight loss, blood in stool, difficulty swallowing, or persistent vomiting requires immediate evaluation." },
                { title: "Screening", desc: "Regular colon cancer screening starting at age 45, or earlier if you have risk factors or family history." },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-md">
                  <h3 className="font-bold text-navy font-heading">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link to="/appointment" className="btn-primary mt-10 inline-flex">
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
