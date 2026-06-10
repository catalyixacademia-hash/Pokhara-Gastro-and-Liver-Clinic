import { HashRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Lazy loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const DoctorProfile = lazy(() => import("./pages/DoctorProfile"));
const Services = lazy(() => import("./pages/Services"));
const Gastroenterology = lazy(() => import("./pages/Gastroenterology"));
const Hepatology = lazy(() => import("./pages/Hepatology"));
const Endoscopy = lazy(() => import("./pages/Endoscopy"));
const Colonoscopy = lazy(() => import("./pages/Colonoscopy"));
const ERCP = lazy(() => import("./pages/ERCP"));
const Fibroscan = lazy(() => import("./pages/Fibroscan"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const Appointment = lazy(() => import("./pages/Appointment"));

function LoadingSpinner() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-navy/20 border-t-medical-red rounded-full animate-spin"></div>
        <p className="text-sm text-slate-400">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/doctor" element={<DoctorProfile />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/gastroenterology" element={<Gastroenterology />} />
              <Route path="/services/hepatology" element={<Hepatology />} />
              <Route path="/services/endoscopy" element={<Endoscopy />} />
              <Route path="/services/colonoscopy" element={<Colonoscopy />} />
              <Route path="/services/ercp" element={<ERCP />} />
              <Route path="/services/fibroscan" element={<Fibroscan />} />
              <Route path="/faqs" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/appointment" element={<Appointment />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
