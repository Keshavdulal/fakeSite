import React from 'react'
import Image from 'next/image'

import GridContainer from '_components/GridContainer'

import VimeoVideos from '../../videos.json'
import playBtn from '_public/assets/playbtn.png'

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
              <div className='relative cursor-pointer'>
                <Image
                  src={item?.thumbnail_medium}
                  alt={item?.title}
                  height='360'
                  width='640'
                  className='rounded-lg'
                />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
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
