import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services", dropdown: true, items: [
    { name: "Gastroenterology", path: "/services/gastroenterology" },
    { name: "Hepatology", path: "/services/hepatology" },
    { name: "Endoscopy", path: "/services/endoscopy" },
    { name: "Colonoscopy", path: "/services/colonoscopy" },
    { name: "ERCP", path: "/services/ercp" },
    { name: "Fibroscan", path: "/services/fibroscan" },
  ]},
  { name: "Our Doctor", path: "/doctor" },
  { name: "FAQs", path: "/faqs" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-navy/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br from-navy to-medical-red flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl ${isScrolled ? '' : 'shadow-navy/30'}`}>
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="hidden sm:block">
              <p className={`text-sm font-bold leading-tight transition-colors ${isScrolled ? 'text-navy' : 'text-white'}`}>
                Pokhara Gastro
              </p>
              <p className={`text-[11px] leading-tight transition-colors ${isScrolled ? 'text-slate-500' : 'text-white/70'}`}>
                Liver Center
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <button
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                      isScrolled
                        ? "text-slate-700 hover:text-navy hover:bg-navy/5"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                    <svg className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 block ${
                      location.pathname === link.path
                        ? isScrolled ? "text-navy bg-navy/5" : "text-white bg-white/10"
                        : isScrolled
                          ? "text-slate-700 hover:text-navy hover:bg-navy/5"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl shadow-navy/10 border border-slate-100 overflow-hidden"
                      >
                        {link.items?.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-3 text-sm text-slate-700 hover:text-navy hover:bg-navy/5 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <Link to="/appointment" className="ml-3 btn-primary !py-2.5 !px-5 text-sm">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-lg"
            aria-label="Toggle menu"
          >
            <svg className={`w-7 h-7 ${isScrolled ? 'text-navy' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:text-navy hover:bg-navy/5 transition-colors"
                      >
                        {link.name}
                        <svg className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 space-y-1 overflow-hidden"
                          >
                            {link.items?.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="block px-4 py-2.5 rounded-lg text-sm text-slate-600 hover:text-navy hover:bg-navy/5 transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        location.pathname === link.path
                          ? "text-navy bg-navy/5"
                          : "text-slate-700 hover:text-navy hover:bg-navy/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/appointment"
                className="btn-primary w-full justify-center mt-4"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
