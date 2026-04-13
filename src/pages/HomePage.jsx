// section import

import Footer from "../components/Footer"
import CTASection from "../sections/CTASection"
import EventTypeSection from "../sections/EventTypeSection"
import HeroSection from "../sections/HeroSection"
import ServiceSection from "../sections/ServiceSection"

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <EventTypeSection />

      {/* Captivating CTA: 3D Experience */}
      <CTASection />
      <Footer />
    </div>
  )
}

export default HomePage
