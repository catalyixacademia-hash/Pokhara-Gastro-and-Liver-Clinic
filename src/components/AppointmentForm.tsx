import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    symptoms: "",
    preferredDate: "",
    preferredTime: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, send to backend
  };

  if (submitted) {
    return (
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 rounded-2xl bg-gradient-to-br from-navy to-navy-dark text-white"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-teal-accent/20 flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold font-heading">Appointment Requested!</h2>
            <p className="mt-4 text-white/70">
              Thank you, {formData.name}. We have received your appointment request. 
              Our team will contact you shortly at {formData.phone} to confirm your appointment.
            </p>
            <p className="mt-2 text-white/50 text-sm">
              For urgent inquiries, please call us at 061-590978 or 9856088019
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-warm-gray to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-medical-red/10 text-medical-red text-sm font-semibold mb-4">
            Book an Appointment
          </span>
          <h2 className="section-title">Schedule Your Visit</h2>
          <p className="section-subtitle">
            Fill in the form below and we'll get back to you to confirm your appointment with Dr. Shankar Baral.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-10 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition-all text-sm"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition-all text-sm"
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition-all text-sm"
                placeholder="Your email address"
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-semibold text-navy mb-2">
                Age
              </label>
              <input
                type="number"
                id="age"
                min="1"
                max="120"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition-all text-sm"
                placeholder="Your age"
              />
            </div>
          </div>

          <div>
            <label htmlFor="symptoms" className="block text-sm font-semibold text-navy mb-2">
              Symptoms / Reason for Visit *
            </label>
            <textarea
              id="symptoms"
              required
              rows={4}
              value={formData.symptoms}
              onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition-all text-sm resize-none"
              placeholder="Briefly describe your symptoms or reason for consultation..."
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-sm font-semibold text-navy mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition-all text-sm"
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-semibold text-navy mb-2">
                Preferred Time
              </label>
              <select
                id="time"
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition-all text-sm bg-white"
              >
                <option value="">Select a time</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                <option value="evening">Evening (3 PM - 6 PM)</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn-primary w-full justify-center text-base py-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Submit Appointment Request
          </button>

          <p className="text-center text-slate-400 text-xs">
            By submitting, you agree to be contacted by our clinic regarding your appointment. 
            Your information is kept confidential.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
