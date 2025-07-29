'use client'

import Navbar from '@/components/ui/navbar'
import SimpleCentered from '@/components/blocks/heros/simple-centered'
import ProofOfRealDeviceSection from '@/components/blocks/feature-sections/proof-of-real-device'
import ProofOfRealImageSection from '@/components/blocks/feature-sections/proof-of-real-image'
import VerificationProcess from '@/components/blocks/feature-sections/verification-process'
import TechnologySection from '@/components/blocks/feature-sections/technology-section'  
import TestimonialsSection from '@/components/blocks/feature-sections/testimonial'
import TeamSection from '@/components/blocks/team/team-section'
import { SimpleFooterWithFourGrids } from '@/components/blocks/footers/simple-footer-with-four-grids'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-white via-blue-50 via-blue-100 to-blue-200">
      <Navbar />
      <SimpleCentered />
      <main className="flex-grow">
        <ProofOfRealDeviceSection/>
        <ProofOfRealImageSection/>
        <VerificationProcess/>
        <TechnologySection/>
        <TestimonialsSection/>
        <TeamSection/>
      </main>
      <SimpleFooterWithFourGrids/>
    </div>
  )
}