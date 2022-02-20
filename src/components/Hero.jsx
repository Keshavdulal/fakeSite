import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

import heroImage from '_public/assets/hero-image.png'

const Hero = () => {
  return (
    <section className='relative mb-10'>
      <Image
        src={heroImage}
        alt='Fake Site Logo'
        width='1440'
        height='720'
        layout='responsive'
        className='-z-10'
      />

      <div
        className={clsx(
          'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
          'flex flex-col items-center justify-center '
          // 'bg-red-300'
        )}>
        <h1 className='text-6xl text-secondary mb-20 text-white font-sans'>
          The world's greatest fake site
        </h1>

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
