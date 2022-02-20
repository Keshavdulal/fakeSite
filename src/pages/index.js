import React, { useEffect } from 'react'

import HeroSection from '_components/HeroSection'
import { VideoSection } from '_components/VideoSection'
import ThirdSection from '_components/ThirdSection'

const Home = () => {
  useEffect(() => {
    console.log('Hello from index')
  }, [])

  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Videos Section */}
      <VideoSection />

      {/* Third Section */}
      <ThirdSection />
    </main>
  )
}

export default Home
