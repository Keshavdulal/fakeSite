import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

import heroImage from '_public/assets/hero-image.png'

const HeroSection = () => {
  return (
    <section className='relative mb-16 h-[50vh] md:h-auto bg-purple-500'>
      {/* <div className='aspect-w-9 aspect-h-16 md:aspect-w-16 md:aspect-h-9 '> */}
      {/* <img src={heroImage} alt='Fake Site Logo' width='1440' height='720' layout='responsive' /> */}
      <img
        src='/assets/hero-image.png'
        alt='Fake Site Logo'
        width='1440'
        height='720'
        layout='responsive'
        className='w-full h-[50vh] object-cover'
      />
      {/* </div> */}

      <div
        className={clsx(
          'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
          'flex flex-col items-center justify-center text-center',
          'w-full md:w-auto'
        )}>
        {/* <GridContainer> */}

        <h1 className={clsx('text-5xl md:text-size-h1 text-white font-normal', 'mb-10 md:mb-20')}>
          The world's greatest fake site
        </h1>

        <p
          className={clsx(
            'w-7/12',
            'text-2xl md:text-size-reg mb-10 md:mb-20 text-white font-light'
          )}>
          Create the world's greatest fake site and enjoy the breeze of fresh air when you complete
          it.
        </p>

        <button
          className={clsx(
            'bg-primary h-16 md:h-20 px-10 ',
            'rounded-full cursor-pointer',
            'text-white text-2xl md:text-size-reg font-light',
            'border-2 border-primary',
            'hover:bg-tertiary transition-all'
          )}>
          Do something awesome
        </button>
      </div>
    </section>
  )
}

export default HeroSection
