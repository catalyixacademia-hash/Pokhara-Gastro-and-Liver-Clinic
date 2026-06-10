import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-navy">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-60"></div>
        <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] rounded-full bg-medical-red/20 blur-[120px]"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-[600px] h-[600px] rounded-full bg-teal-accent/10 blur-[100px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-medical-red animate-pulse"></span>
              Western Nepal's Premier GI Center
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance"
            >
              Advanced{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-red-light to-teal-light">
                Gastro & Liver
              </span>{" "}
              Care in Pokhara
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 text-lg text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Expert diagnosis and treatment of stomach, liver, and digestive diseases 
              with advanced endoscopy and hepatology services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/appointment" className="btn-primary text-base px-8 py-4 animate-pulse-glow">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment
              </Link>
              <a href="tel:9856088019" className="btn-secondary text-base px-8 py-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-white/50 text-sm"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                NMC Registered
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                10+ Years Experience
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
                Advanced Technology
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Animated circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[350px] h-[350px] rounded-full border border-white/10 animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[280px] h-[280px] rounded-full border border-white/5 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              </div>
              
              {/* Central visual */}
              <div className="relative w-72 h-72 glass-card flex items-center justify-center animate-float">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-medical-red to-navy flex items-center justify-center shadow-2xl">
                    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      {/* Stomach/liver icon */}
                      <path d="M12 2a4 4 0 014 4c0 3-4 6-4 6s-4-3-4-6a4 4 0 014-4z" strokeLinecap="round"/>
                      <path d="M8 12c0 0 0 8 4 8s4-8 4-8" strokeLinecap="round"/>
                      <circle cx="12" cy="6" r="1.5" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3 className="mt-6 text-white font-heading font-bold text-xl">Digestive Health</h3>
                  <p className="mt-2 text-white/60 text-sm">Advanced GI &amp; Liver Care</p>
                  
                  {/* Small service badges */}
                  <div className="mt-6 flex flex-wrap gap-2 justify-center">
                    {["Endoscopy", "Colonoscopy", "ERCP", "Fibroscan"].map((s) => (
                      <span key={s} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs border border-white/10">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120V60C240 0 480 0 720 30C960 60 1200 60 1440 30V120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
