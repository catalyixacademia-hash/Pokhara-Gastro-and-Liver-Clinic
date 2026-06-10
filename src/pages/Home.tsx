import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ServicesOverview from "../components/ServicesOverview";
import DoctorCard from "../components/DoctorCard";
import PatientJourney from "../components/PatientJourney";
import Testimonials from "../components/Testimonials";
import LocationSection from "../components/LocationSection";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ServicesOverview />
      <DoctorCard />
      <PatientJourney />
      <Testimonials />
      <CTASection />
      <LocationSection />
    </>
  );
}
