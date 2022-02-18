import clsx from 'clsx'
import Image from 'next/image'
import React, { useEffect } from 'react'

import GridContainer from '_components/GridContainer'
import VideoSection from '_components/VideoSection'

const Home = () => {
  useEffect(() => {
    console.log('Hello from index')
  }, [])

  return (
    <main className='font-sourceSansPro'>
      {/* Hero Section */}
      <section className={clsx('bg-blue-100 py-96', 'flex flex-col items-center justify-center')}>
        <h1 className='text-6xl text-secondary mb-20'>The world's greatest fake site</h1>

        <p className='text-secondary text-4xl mb-20'>
          Create the world's greatest fake site and enjoy the breeze of fresh air when you complete
          it.
        </p>

        <button className='bg-primary text-white h-20 text-4xl px-10 rounded-full'>
          Do something awesome
        </button>
      </section>

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
