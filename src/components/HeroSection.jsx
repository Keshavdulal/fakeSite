import clsx from 'clsx'
// import Image from 'next/image'
import React from 'react'

// import heroImage from '_public/assets/hero-image.png'

const HeroSection = () => {
  return (
    <section className='relative mb-16'>
      <img
        // src={heroImage}
        src='/assets/hero-image.png'
        alt='Fake Site Logo'
        width='1440'
        height='720'
        layout='responsive'
        className='w-full h-[50vh] md:h-[80vh] object-cover'
      />

      <div
        className={clsx(
          'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
          'flex flex-col items-center justify-center text-center',
          'w-full md:w-auto'
        )}>
        <h1 className={clsx('text-5xl md:text-size-h1 text-white font-normal', 'mb-10')}>
          The world's greatest fake site
        </h1>

        <p className={clsx('w-7/12', 'text-2xl md:text-size-reg mb-10 text-white font-light')}>
          Create the world's greatest fake site and enjoy the breeze of fresh air when you complete
          it.
        </p>

        <button
          className={clsx(
            'bg-primary h-16 md:h-20 px-10 ',
            'rounded-full cursor-pointer',
            'text-white text-opacity-80 text-2xl md:text-size-reg font-light',
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
