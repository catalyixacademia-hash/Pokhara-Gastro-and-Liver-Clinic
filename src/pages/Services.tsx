import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CTASection from "../components/CTASection";

const services = [
  {
    title: "Gastroenterology",
    desc: "Comprehensive diagnosis and treatment of all digestive system disorders including gastritis, ulcers, IBS, IBD, and GI bleeding.",
    path: "/services/gastroenterology",
    gradient: "from-navy to-navy-light",
    icon: "🩺",
  },
  {
    title: "Hepatology",
    desc: "Specialized care for liver diseases — fatty liver, hepatitis B & C, cirrhosis, portal hypertension, and liver failure management.",
    path: "/services/hepatology",
    gradient: "from-medical-red to-medical-red-dark",
    icon: "🫁",
  },
  {
    title: "Upper GI Endoscopy",
    desc: "Advanced endoscopic examination of the esophagus, stomach, and duodenum under sedation for accurate diagnosis.",
    path: "/services/endoscopy",
    gradient: "from-teal-accent to-teal-dark",
    icon: "🔍",
  },
  {
    title: "Colonoscopy",
    desc: "Gold-standard screening for colon cancer with polyp detection and removal. Recommended starting at age 45.",
    path: "/services/colonoscopy",
    gradient: "from-purple-600 to-indigo-700",
    icon: "🩻",
  },
  {
    title: "ERCP",
    desc: "Endoscopic Retrograde Cholangiopancreatography — advanced therapeutic procedure for bile duct and pancreatic disorders.",
    path: "/services/ercp",
    gradient: "from-amber-500 to-orange-600",
    icon: "⚡",
  },
  {
    title: "Fibroscan",
    desc: "Non-invasive liver fibrosis and steatosis assessment using transient elastography — painless, no needles, immediate results.",
    path: "/services/fibroscan",
    gradient: "from-emerald-500 to-green-700",
    icon: "📊",
  },
];

export default function Services() {
  return (
    <>
      <section className="relative pt-32 pb-20 gradient-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm mb-6">What We Offer</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-heading">Our Services</h1>
            <p className="mt-6 text-lg text-white/60 max-w-3xl mx-auto">
              Comprehensive gastroenterology and hepatology services — from routine consultations 
              to the most advanced therapeutic endoscopic procedures.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none"><path d="M0 80V40C240 10 480 10 720 30C960 50 1200 30 1440 10V80H0Z" fill="white"/></svg>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, idx) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Link
                  to={svc.path}
                  className="group block p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-transparent transition-all duration-500 h-full"
                >
                  <span className="text-4xl mb-4 block">{svc.icon}</span>
                  <h3 className="text-xl font-bold text-navy font-heading mb-3 group-hover:text-medical-red transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{svc.desc}</p>
                  <span className="inline-flex items-center gap-2 text-navy text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
