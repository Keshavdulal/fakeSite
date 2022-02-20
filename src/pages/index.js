import React, { useEffect } from 'react'

import Hero from '_components/Hero'
import { VideoSection } from '_components/VideoSection'
import ThirdSection from '_components/ThirdSection'

const Home = () => {
  useEffect(() => {
    console.log('Hello from index')
  }, [])

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Videos Section */}
      <VideoSection />

      {/* Third Section */}
      <ThirdSection />
    </main>
  )
}

export default Home
