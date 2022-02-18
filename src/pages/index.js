import React, { useEffect } from 'react'

import Hero from '_components/Hero'
import VideoSection from '_components/VideoSection'
import GridContainer from '_components/GridContainer'

const Home = () => {
  useEffect(() => {
    console.log('Hello from index')
  }, [])

  return (
    <main className='font-sourceSansPro'>
      {/* Hero Section */}
      <Hero />

      {/* Videos Section */}
      {/* TODO Fetch Videos here */}
      <VideoSection />

      {/* Third Section */}
      <section>
        <GridContainer>
          <div className='col-span-7 col-start-2.5 text-center py-10'>
            <h2 className='text-6xl text-secondary mb-20'>
              Ready to have your cake and eat it too?
            </h2>
            <p className='text-secondary text-4xl px-10'>
              Start by designing the experience you have in mind. We'll guide you through each step.
              if your experience meets the quality standards, you'll hear more about what's next.
            </p>
          </div>
        </GridContainer>
      </section>
    </main>
  )
}

export default Home
