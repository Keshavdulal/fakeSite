import React, { useState, useEffect } from 'react'
import Head from 'next/head'

import Header from '_components/Header'
import Footer from '_components/Footer'
import GridOverlay from '_components/GridOverlay'
import MobileMenu from '_components/MobileMenu'

import '_styles/app.scss'
import '_styles/fonts.scss'

export default function MainApp({ Component, pageProps }) {
  const [isMobileMenuVisible, setMobileMenuState] = useState(false)

  // const showMobileMenu = () => setMobileMenuState(true)
  const showMobileMenu = () => {
    console.log('@showMobileMenu')
    setMobileMenuState(true)
  }
  const hideMobileMenu = () => setMobileMenuState(false)

  useEffect(() => {
    console.log('Hello from _app')
  }, [])

  return (
    <div className='relative'>
      {/* META */}
      <Head>
        <title>FakeSite</title>
        <meta name='description' content='This is a demo site.' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='shortcut icon' href='/assets/logo.png' />
      </Head>

      <MobileMenu isMobileMenuVisible={isMobileMenuVisible} hideMobileMenu={hideMobileMenu} />
      <Header isMobileMenuVisible={isMobileMenuVisible} showMobileMenu={showMobileMenu} />

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
