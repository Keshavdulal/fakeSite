import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

import heroImage from '_public/assets/hero-image.png'

const Hero = () => {
  return (
    <section
      className={clsx(
        ' py-96',
        // 'flex flex-col items-center justify-center',
        'relative'
      )}>
      <Image
        src={heroImage}
        alt='Fake Site Logo'
        width='1600'
        height='900'
        layout='fill'
        className='absolute top-0 -z-10 '
      />

      <div className='flex flex-col items-center justify-center '>
        <h1 className='text-6xl text-secondary mb-20 text-white'>The world's greatest fake site</h1>

        <p className='text-secondary text-4xl mb-20 text-white'>
          Create the world's greatest fake site and enjoy the breeze of fresh air when you complete
          it.
        </p>

        <button className='bg-primary text-white h-20 text-4xl px-10 rounded-full cursor-pointer z-10'>
          Do something awesome
        </button>
      </div>
    </section>
  )
}

export default Hero
