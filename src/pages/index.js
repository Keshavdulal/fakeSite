import React, { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    console.log('Hello from index')
  }, [])

  return (
    <main className='bg-red-500 text-9xl'>
      Fake Site
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
    </main>
  )
}

export default Home
