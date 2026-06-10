import { Link } from "react-router-dom";

const linkStyle = "text-white/60 hover:text-white transition-colors text-sm";
const headingStyle = "text-sm font-semibold uppercase tracking-wider text-white/90 mb-5";

export default function Footer() {
  return (
    <footer className="gradient-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold leading-tight">Pokhara Gastro</p>
                <p className="text-[11px] leading-tight text-white/60">Liver Center</p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A dedicated center for the diagnosis and treatment of digestive and liver diseases. 
              Advanced gastroenterology and hepatology care accessible to patients across Nepal.
            </p>
            <div className="flex gap-3">
              {["facebook", "instagram"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-medical-red transition-colors flex items-center justify-center" aria-label={s}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={headingStyle}>Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Doctor", path: "/doctor" },
                { name: "FAQs", path: "/faqs" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className={linkStyle}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={headingStyle}>Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Gastroenterology", path: "/services/gastroenterology" },
                { name: "Hepatology", path: "/services/hepatology" },
                { name: "Endoscopy", path: "/services/endoscopy" },
                { name: "Colonoscopy", path: "/services/colonoscopy" },
                { name: "ERCP", path: "/services/ercp" },
                { name: "Fibroscan", path: "/services/fibroscan" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className={linkStyle}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={headingStyle}>Contact Info</h3>
            <ul className="space-y-3">
              <li className={linkStyle}>📍 Pokhara-8, Newroad, Kaski</li>
              <li className="text-white/50 text-sm">Near: Anupam Marg (St. No. 12)</li>
              <li><a href="tel:061590978" className={linkStyle}>📞 061-590978</a></li>
              <li><a href="tel:9856088019" className={linkStyle}>📱 9856088019</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Pokhara Gastro Liver Center Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
