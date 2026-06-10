import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDR2OEg0VjRoMzJ6bTAgMTJ2OEg0di04aDMyem0wIDEydjhINFYyOGgzMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-medical-red/20 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal-accent/10 blur-[80px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight">
            Ready to Take Control of Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-light to-medical-red-light">
              Digestive Health
            </span>
            ?
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Don't let digestive problems affect your quality of life. Schedule a consultation 
            with Dr. Shankar Baral and get the expert care you deserve.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment" className="btn-primary text-base px-8 py-4 animate-pulse-glow">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Your Appointment
            </Link>
            <a href="tel:9856088019" className="btn-secondary text-base px-8 py-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: 9856088019
            </a>
          </div>

          {/* Trust bar */}
          <div className="mt-12 flex flex-wrap items-center gap-8 justify-center text-white/40 text-sm">
            <span>✓ NMC Registered Clinic</span>
            <span>✓ 10+ Years Experience</span>
            <span>✓ Advanced Technology</span>
            <span>✓ Patient-Centered Care</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
