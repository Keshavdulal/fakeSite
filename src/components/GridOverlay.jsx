import { useState, useEffect } from 'react'

// import useKeyPress from '../../hooks/useKeyPress'

// Grid Overlay for toggling grid system
const GridOverlay = () => {
  const [isGridActive, setGridStatus] = useState(true)

  // Track multi-key press
  // const ctrlPress = useKeyPress('control') // key - ctrl
  // const gPress = useKeyPress('g') // key - g

  // useEffect(() => {
  //   if (ctrlPress && gPress) setGridStatus(!isGridActive)
  // }, [ctrlPress, gPress])

  return (
    <div id='grid-overlay' className='relative flex justify-center'>
      {isGridActive && (
        <div className='container fixed z-50 mx-auto h-screen text-center text-white opacity-10 pointer-events-none'>
          <div className='grid gap-4 grid-cols-8 h-screen md:gap-8 md:grid-cols-12'>
            <div className='col-span-1 bg-gray-500'>1</div>
            <div className='col-span-1 bg-gray-500'>2</div>
            <div className='col-span-1 bg-gray-500'>3</div>
            <div className='col-span-1 bg-gray-500'>4</div>
            <div className='hidden col-span-1 bg-gray-500 md:block'>5</div>
            <div className='hidden col-span-1 bg-gray-500 md:block'>6</div>
            <div className='hidden col-span-1 bg-gray-500 md:block'>7</div>
            <div className='hidden col-span-1 bg-gray-500 md:block'>8</div>
            <div className='hidden col-span-1 bg-gray-500 md:block'>9</div>
            <div className='hidden col-span-1 bg-gray-500 md:block'>10</div>
            <div className='hidden col-span-1 bg-gray-500 md:block'>11</div>
            <div className='hidden col-span-1 bg-gray-500 md:block'>12</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GridOverlay
