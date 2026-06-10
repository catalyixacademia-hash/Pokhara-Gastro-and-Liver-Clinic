import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    title: "Gastroenterology",
    desc: "Comprehensive diagnosis and treatment of digestive system disorders including gastritis, ulcers, IBS, and IBD.",
    path: "/services/gastroenterology",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
        <circle cx="8" cy="6" r="1" fill="currentColor"/>
        <circle cx="16" cy="12" r="1" fill="currentColor"/>
        <circle cx="12" cy="18" r="1" fill="currentColor"/>
      </svg>
    ),
    gradient: "from-navy to-navy-light",
  },
  {
    title: "Hepatology",
    desc: "Specialized care for liver diseases including fatty liver, hepatitis B & C, cirrhosis, and liver failure.",
    path: "/services/hepatology",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    gradient: "from-medical-red to-medical-red-dark",
  },
  {
    title: "Upper GI Endoscopy",
    desc: "Advanced endoscopic examination of the upper digestive tract for accurate diagnosis of esophageal and gastric conditions.",
    path: "/services/endoscopy",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    gradient: "from-teal-accent to-teal-dark",
  },
  {
    title: "Colonoscopy",
    desc: "Gold-standard colon cancer screening and diagnostic colonoscopy for detecting polyps and colorectal conditions.",
    path: "/services/colonoscopy",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10H7" />
      </svg>
    ),
    gradient: "from-purple-600 to-indigo-700",
  },
  {
    title: "ERCP",
    desc: "Endoscopic Retrograde Cholangiopancreatography for diagnosing and treating bile duct and pancreatic disorders.",
    path: "/services/ercp",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Fibroscan",
    desc: "Non-invasive, painless liver fibrosis assessment using advanced transient elastography technology.",
    path: "/services/fibroscan",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    gradient: "from-rose-500 to-pink-600",
  },
  {
    title: "EUS",
    desc: "Endoscopic Ultrasound for detailed imaging of the digestive tract and surrounding organs for precise diagnosis.",
    path: "/services/endoscopy",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Digestive Health",
    desc: "Holistic management of chronic digestive conditions with lifestyle counseling, diet planning, and long-term care.",
    path: "/services/gastroenterology",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "from-emerald-500 to-green-700",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-warm-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/10 text-navy text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="section-title">
            Comprehensive GI & Liver Services
          </h2>
          <p className="section-subtitle">
            From routine consultations to advanced therapeutic procedures, we offer
            a complete range of gastroenterology and hepatology services.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={itemVariants}
              className="group relative"
            >
              <Link
                to={svc.path}
                className="block p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:border-transparent transition-all duration-500 h-full"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {svc.icon}
                </div>
                <h3 className="text-base font-bold text-navy mb-2 font-heading group-hover:text-medical-red transition-colors">
                  {svc.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-navy text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
