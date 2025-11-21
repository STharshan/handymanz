import React from 'react'
import AboutSection from "../components/About"
import FindUs from "../components/Findus"
import HandymanHero from "../components/Home"
import OurNumbers from "../components/Number"
import PartnersSection from "../components/Partner"
import ProjectShowcase from "../components/Project"
import ServicesSection from "../components/Service"
import TestimonialsSection from '../components/Testimonial'

const Home = () => {
    return (
        <div>
            <HandymanHero />
            {/* <PartnersSection /> */}
            <AboutSection />
            <ServicesSection />
            <OurNumbers />
            <ProjectShowcase />
            <TestimonialsSection />
            <FindUs />
        </div>
    )
}

export default Home
