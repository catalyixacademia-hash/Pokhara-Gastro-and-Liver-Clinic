import { motion } from "framer-motion";
import LocationSection from "../components/LocationSection";
import CTASection from "../components/CTASection";

export default function Contact() {
  return (
    <>
      <section className="relative pt-32 pb-20 gradient-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm mb-6">Get in Touch</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-heading">Contact Us</h1>
            <p className="mt-6 text-lg text-white/60 max-w-3xl mx-auto">
              We're here to help with all your digestive health needs. Reach out to us by phone, 
              visit our clinic, or book an appointment online.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none"><path d="M0 80V40C240 10 480 10 720 30C960 50 1200 30 1440 10V80H0Z" fill="white"/></svg>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                ),
                title: "Address",
                lines: ["Pokhara-8, Newroad, Kaski", "Near: Anupam Marg (Street No. 12)"],
                gradient: "from-navy to-navy-light"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                ),
                title: "Phone",
                lines: ["Landline: 061-590978", "Mobile: 9856088019"],
                gradient: "from-medical-red to-medical-red-dark"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                ),
                title: "Clinic Hours",
                lines: ["Sunday - Friday", "Morning: 9 AM - 1 PM", "Evening: 4 PM - 7 PM"],
                gradient: "from-teal-accent to-teal-dark"
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white mb-5`}>
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-navy font-heading mb-3">{card.title}</h3>
                {card.lines.map((line) => (
                  <p key={line} className="text-sm text-slate-600">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LocationSection />
      <CTASection />
    </>
  );
}
