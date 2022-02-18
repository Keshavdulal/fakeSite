import React, { useEffect } from 'react'

import Header from '_components/Header'
import Footer from '_components/Footer'
import GridOverlay from '_components/GridOverlay'

import '_styles/app.css'

export default function MainApp({ Component, pageProps }) {
  useEffect(() => {
    console.log('Hello from _app')
  }, [])

  return (
    <>
      <Header />

      <div
        id='main-content'
        className='flex flex-col flex-grow flex-shrink-0 min-h-screen overflow-hidden'>
        <GridOverlay />
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}
