import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import drPhoto from "../assets/dr-shankar-baral.png";

export default function DoctorCard() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src={drPhoto}
                alt="Dr. Shankar Baral - Consultant Gastroenterologist and Hepatologist"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 via-navy/70 to-transparent p-8 pt-24 text-center">
                <h3 className="text-2xl font-bold text-white font-heading">Dr. Shankar Baral</h3>
                <p className="text-teal-light text-sm mt-1">DM Gastroenterology</p>
              </div>
            </div>
            {/* Decorative element behind */}
            <div className="absolute -bottom-6 -left-6 w-full h-full rounded-2xl bg-gradient-to-br from-medical-red/20 to-teal-accent/20 -z-0"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-medical-red/10 animate-float"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-accent/10 text-teal-accent text-sm font-semibold mb-4">
              Meet the Specialist
            </span>
            <h2 className="section-title">
              Dr. Shankar Baral
            </h2>
            <p className="text-lg text-medical-red font-semibold mt-1">
              Consultant Gastroenterologist &amp; Hepatologist
            </p>
            <p className="text-sm text-slate-500 mt-1">NMC Registration: 10280</p>

            <p className="mt-6 text-slate-600 leading-relaxed">
              A dedicated Gastroenterologist with special interest in Interventional 
              Gastroenterology and Hepatology, possessing more than a decade of clinical 
              experience and extensive expertise in advanced endoscopic procedures.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                "DM Gastroenterology – NAMS, Bir Hospital",
                "MD Internal Medicine – Manipal COM",
                "MBBS – Manipal College of Medical Sciences",
                "10+ Years Clinical Experience",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-slate-600">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/doctor" className="btn-outline-navy">
                View Full Profile
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/appointment" className="btn-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
