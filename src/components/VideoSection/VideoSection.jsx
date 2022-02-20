import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'

import GridContainer from '_components/GridContainer'

import VimeoVideos from '../../../videos.json'
import playBtn from '_public/assets/playbtn.png'

import s from './VideoSection.module.scss'

const VideoSection = () => {
  if (!Array.isArray(VimeoVideos)) return null

  const DESC_LENGTH = 300

  // TODO: extract to util
  const getTrimmedString = longString => {
    return longString.length > DESC_LENGTH
      ? longString.substring(0, DESC_LENGTH - 3) + '...'
      : longString.substring(0, DESC_LENGTH)
  }

  return (
    <section className='py-10'>
      {VimeoVideos.map((item, index) => (
        <GridContainer key={item?.id} className='pb-20'>
          <div className='col-start-1 col-span-5'>
            <h2 className='text-6xl text-secondary mb-20'>{item?.title}</h2>
            <p className='text-secondary text-4xl'>{getTrimmedString(item?.description)}</p>
          </div>

          <div className='col-start-7 col-span-4'>
            {item?.thumbnail_medium ? (
              <div className={clsx('relative cursor-pointer', s.thumbnail)}>
                {/* Thumbnail */}
                <Image
                  src={item?.thumbnail_medium}
                  alt={item?.title}
                  height='360'
                  width='640'
                  className='rounded-lg'
                />

                {/* gradient */}
                <div
                  className={clsx(
                    'absolute top-0 left-0',
                    'w-full h-full',
                    'bg-gradient-to-b from-red-700 to-red-200 opacity-90'
                    // 'hover:opacity-0 transition-all duration-250'
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
              <p className='text-secondary text-4xl'>Image Unavailable</p>
            )}
          </div>
        </GridContainer>
      ))}
    </section>
  )
}

export default VideoSection
