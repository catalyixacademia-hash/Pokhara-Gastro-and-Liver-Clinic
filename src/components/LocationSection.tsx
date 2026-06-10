import { motion } from "framer-motion";

export default function LocationSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-accent/10 text-teal-accent text-sm font-semibold mb-4">
            Visit Us
          </span>
          <h2 className="section-title">
            Our Location
          </h2>
          <p className="section-subtitle">
            Conveniently located in the heart of Pokhara with easy access for patients across Western Nepal.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-200 min-h-[350px] relative"
          >
            {/* Simulated map with clinic marker */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-medical-red flex items-center justify-center mx-auto shadow-lg animate-pulse-glow">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="mt-4 text-navy font-bold text-lg">Pokhara Gastro Liver Center</p>
                <p className="text-slate-500 text-sm">Pokhara-8, Newroad, Kaski</p>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow text-sm text-navy font-medium">
                  <svg className="w-4 h-4 text-medical-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  View on Google Maps
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-navy font-heading">Get in Touch</h3>
              <p className="text-slate-600 mt-2">
                We're here to help with all your digestive health needs.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-warm-gray hover:bg-slate-100 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-white shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy">Address</p>
                  <p className="text-sm text-slate-600">Pokhara-8, Newroad, Kaski</p>
                  <p className="text-sm text-slate-500">Near: Anupam Marg (Street No. 12)</p>
                </div>
              </div>

              <a href="tel:061590978" className="flex items-start gap-4 p-4 rounded-xl bg-warm-gray hover:bg-slate-100 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-medical-red flex items-center justify-center text-white shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy group-hover:text-medical-red transition-colors">Phone</p>
                  <p className="text-sm text-slate-600">061-590978</p>
                </div>
              </a>

              <a href="tel:9856088019" className="flex items-start gap-4 p-4 rounded-xl bg-warm-gray hover:bg-slate-100 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-teal-accent flex items-center justify-center text-white shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy group-hover:text-teal-accent transition-colors">Mobile / WhatsApp</p>
                  <p className="text-sm text-slate-600">9856088019</p>
                </div>
              </a>
            </div>

            <div className="flex gap-3 pt-2">
              <a href="https://wa.me/9779856088019" target="_blank" rel="noopener noreferrer" className="btn-teal">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a href="https://maps.google.com/?q=Pokhara+Gastro+Liver+Center+Pokhara-8+Newroad+Kaski" target="_blank" rel="noopener noreferrer" className="btn-outline-navy">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
