import React, { useEffect } from 'react'

import Header from '_components/Header'
import Footer from '_components/Footer'
import GridOverlay from '_components/GridOverlay'

import '_styles/app.scss'

export default function MainApp({ Component, pageProps }) {
  useEffect(() => {
    console.log('Hello from _app')
  }, [])

  return (
    <div className='relative'>
      <Header />

      <div
        id='main-content'
        className='flex flex-col flex-grow flex-shrink-0 min-h-screen overflow-hidden'>
        {/* Use Ctrl + G to toggle grid */}
        <GridOverlay />

        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}
