import clsx from 'clsx'
import Image from 'next/image'
import React, { useEffect } from 'react'

import GridContainer from '_components/GridContainer'

const Home = () => {
  useEffect(() => {
    console.log('Hello from index')
  }, [])

  return (
    <main>
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
      <section className='py-10'>
        <GridContainer>
          <div className='col-start-1 bg-purple-300 col-span-5'>
            <h2 className='text-6xl text-secondary mb-20'>Title</h2>
            <p className='text-secondary text-4xl'>Vid Desc</p>
          </div>

          <div className='col-start-7 col-span-4 bg-purple-600'>
            <p className='text-secondary text-4xl'>Image</p>
            {/* <Image /> */}
          </div>
        </GridContainer>
      </section>

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
