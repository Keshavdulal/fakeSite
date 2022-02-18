import React, { useEffect } from 'react'
import '_styles/app.css'

export default function MainApp({ Component, pageProps }) {
  useEffect(() => {
    console.log('Hello from _app')
  }, [])

  return <Component {...pageProps} />
}
