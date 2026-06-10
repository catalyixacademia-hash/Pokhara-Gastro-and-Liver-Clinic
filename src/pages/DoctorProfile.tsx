import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CTASection from "../components/CTASection";
import drPhoto from "../assets/dr-shankar-baral.png";

export default function DoctorProfile() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 gradient-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm mb-6">
                Consultant Gastroenterologist &amp; Hepatologist
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-heading">
                Dr. Shankar Baral
              </h1>
              <p className="mt-3 text-xl text-teal-light font-semibold">DM Gastroenterology</p>
              <p className="mt-1 text-white/50 text-sm">NMC Registration: 10280</p>
              <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl">
                Dedicated Gastroenterologist with special interest in Interventional 
                Gastroenterology and Hepatology, possessing more than a decade of 
                clinical experience and extensive expertise in advanced endoscopic procedures.
              </p>
              <Link to="/appointment" className="btn-primary mt-6 inline-flex">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Consultation with Dr. Shankar Baral
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-72 md:w-80 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src={drPhoto}
                  alt="Dr. Shankar Baral - Consultant Gastroenterologist and Hepatologist"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80V40C240 10 480 10 720 30C960 50 1200 30 1440 10V80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Qualifications & Experience */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Qualifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-navy font-heading mb-6">Qualifications</h2>
              <div className="space-y-4">
                {[
                  { degree: "DM Gastroenterology", school: "National Academy of Medical Sciences (NAMS), Bir Hospital" },
                  { degree: "MD Internal Medicine", school: "Manipal College of Medical Sciences" },
                  { degree: "MBBS", school: "Manipal College of Medical Sciences" },
                ].map((q) => (
                  <div key={q.degree} className="flex gap-4 p-4 rounded-xl bg-warm-gray">
                    <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-navy">{q.degree}</p>
                      <p className="text-sm text-slate-500">{q.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Professional Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-navy font-heading mb-6">Professional Experience</h2>
              <div className="space-y-3">
                {[
                  "Assistant Professor, Pokhara Academy of Health Sciences",
                  "Lecturer, Gandaki Medical College",
                  "Consultant Physician",
                  "Emergency Department Incharge, Manipal Teaching Hospital",
                ].map((exp) => (
                  <div key={exp} className="flex items-start gap-3 p-3 rounded-lg hover:bg-warm-gray transition-colors">
                    <svg className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700 text-sm">{exp}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinical Expertise */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-warm-gray to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-medical-red/10 text-medical-red text-sm font-semibold mb-4">
              Clinical Expertise
            </span>
            <h2 className="section-title">Advanced Procedural Skills</h2>
            <p className="section-subtitle">
              Extensive expertise in a wide range of diagnostic and therapeutic GI procedures.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "Upper GI Endoscopy", desc: "Diagnostic & therapeutic" },
              { name: "Colonoscopy", desc: "Screening & polypectomy" },
              { name: "ERCP", desc: "Bile duct & pancreatic" },
              { name: "EUS", desc: "Endoscopic ultrasound" },
              { name: "Fibroscan", desc: "Liver fibrosis assessment" },
              { name: "Manometry", desc: "Esophageal & anorectal" },
              { name: "Interventional Endoscopy", desc: "Advanced therapeutic" },
              { name: "Therapeutic Colonoscopy", desc: "Advanced polypectomy" },
            ].map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="p-6 rounded-xl bg-white border border-slate-100 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-navy to-navy-light flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-navy text-sm">{item.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-navy font-heading">Professional Memberships</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Nepal Medical Council",
              "Nepal Medical Association",
              "Society of Internal Medicine of Nepal",
              "Society of Gastroenterologists of Nepal",
            ].map((org) => (
              <motion.div
                key={org}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-warm-gray text-center hover:bg-navy hover:text-white transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-navy/10 group-hover:bg-white/20 flex items-center justify-center mb-3 transition-colors">
                  <svg className="w-6 h-6 text-navy group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="font-semibold text-sm">{org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-warm-gray to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/10 text-navy text-sm font-semibold mb-4">
              Research &amp; Publications
            </span>
            <h2 className="section-title">Academic Contributions</h2>
            <p className="section-subtitle">
              Published research in peer-reviewed medical journals advancing the field of gastroenterology.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white border border-slate-100 shadow-md"
            >
              <p className="text-sm text-slate-800 leading-relaxed">
                Research publications in national and international peer-reviewed journals on topics 
                in gastroenterology, hepatology, and advanced endoscopic procedures. Full publication 
                list with DOI references available upon request during consultation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
