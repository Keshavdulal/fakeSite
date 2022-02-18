import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import GridContainer from './GridContainer'

import logo from '_public/assets/logo.png'

const Footer = () => {
  const COL_A = [
    { title: 'About US', link: '/about-us' },
    { title: 'Press', link: '/press' },
    { title: 'Policies', link: '/policies' },
    { title: 'Help', link: '/help' },
  ]

  const COL_B = [
    { title: 'Edit Profile', link: '/edit-profile' },
    { title: 'Friends', link: '/friends' },
    { title: 'Social', link: '/social' },
    { title: 'Delete Profile', link: '/delete-profile' },
  ]

  return (
    <footer className='py-10'>
      <GridContainer className='pb-48'>
        <nav className='grid col-span-1 col-start-1 text-4xl text-tertiary'>
          <h4 className='text-5xl text-primary pb-5'>Fakesite</h4>
          <ul>
            {Array.isArray(COL_A) ? COL_A.map(i => <li className='pb-2'>{i?.title}</li>) : null}
          </ul>
        </nav>

        <nav className='grid col-span-2 col-start-3 text-4xl text-tertiary'>
          <h4 className='text-5xl text-primary pb-5'>Account</h4>
          <ul>
            {Array.isArray(COL_B) ? COL_B.map(i => <li className='pb-2'>{i?.title}</li>) : null}
          </ul>
        </nav>
      </GridContainer>

      <GridContainer>
        <nav className='grid col-span-10 col-start-1 border-t-2 border-tertiary/50 py-10'>
          <ul className='flex flex-1 space-x-28 text-4xl items-center text-tertiary'>
            <li className='flex-1'>
              <Link href='#'>
                <Image src={logo} alt='Fake Site Logo' width='40' height='40' />
              </Link>
            </li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Site Map</li>
          </ul>
        </nav>
      </GridContainer>
    </footer>
  )
}

export default Footer
