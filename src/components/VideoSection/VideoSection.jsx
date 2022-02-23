import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import GridContainer from '_components/GridContainer'

import VimeoVideos from '../../../videos.json'
import playBtn from '_public/assets/playbtn.png'

import s from './VideoSection.module.scss'

const VideoSection = () => {
  if (!Array.isArray(VimeoVideos)) return null

  const DESC_LENGTH = 200

  // TODO: extract to util
  const getTrimmedString = longString => {
    return longString.length > DESC_LENGTH
      ? longString.substring(0, DESC_LENGTH - 3) + '...'
      : longString.substring(0, DESC_LENGTH)
  }

  return (
    <section className='mb-16'>
      {VimeoVideos.map((item, index) => (
        <Link href={item?.url} key={item?.id}>
          <a target='_blank'>
            <GridContainer
              className={clsx('py-10', 'cursor-pointer', 'hover:bg-slate-500/20 transition-all')}>
              <div
                className={clsx(
                  'col-start-0 col-span-4', // mobile
                  'md:col-start-1 col-span-5',
                  'mb-16 md:mb-0', // add a margin on mobile
                  'md:pt-28' // add a padding top on desktop
                )}>
                <h2 className='text-size-h2 text-secondary mb-10 md:mb-18'>{item?.title}</h2>
                <p className='text-tertiary font-light text-size-reg'>
                  {getTrimmedString(item?.description)}
                </p>
              </div>

              {/* Thumbnail */}
              {/* TODO: Extract out component */}
              <div
                className={clsx(
                  'col-start-0 col-span-5', // mobile
                  'md:col-start-7 md:col-span-4'
                )}>
                {item?.thumbnail_medium ? (
                  <div className={clsx('relative cursor-pointer', s.thumbnail)}>
                    {/* Thumbnail */}
                    <Image
                      src={item?.thumbnail_medium}
                      alt={item?.title}
                      height='360'
                      width='640'
                      layout='responsive'
                      className='rounded-lg object-cover'
                    />

                    {/* gradient */}
                    <div
                      className={clsx(
                        'absolute top-0 left-0 right-0',
                        'w-full h-full rounded-lg',
                        'bg-gradient-to-b from-[#EE2E1D] to-[#FFB1B5] opacity-80'
                        // 'hover:opacity-60 transition-all ' // isn't smooth
                      )}></div>

                    {/* Play Button */}
                    <div
                      className={clsx(
                        'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
                        'transition-all duration-200',
                        s.playButton
                        // 'hover:scale-110 transition-transform duration-200',
                      )}>
                      <Image src={playBtn} alt='Play Button' height='100' width='100' />
                    </div>
                  </div>
                ) : (
                  <p className='text-secondary text-size-reg'>Image Unavailable</p>
                )}
              </div>
            </GridContainer>
          </a>
        </Link>
      ))}
    </section>
  )
}

export default VideoSection
