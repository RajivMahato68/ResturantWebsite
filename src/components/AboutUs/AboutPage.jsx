import React from 'react'
import { Layout } from "../index";
import FirstSection from './FirstSection';
import WeAre from './WeAre';
import ChooseUs from './ChooseUs';
import Gallery from './Gallery';
import OurTeam from './OurTeam';
function AboutPage() {
  return (
    <Layout>
   <FirstSection />
   <WeAre />
   <ChooseUs />
   <Gallery />
   <OurTeam />
  </Layout>
  )
}

export default AboutPage
