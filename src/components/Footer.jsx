import clsx from 'clsx'
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

  const ArrayList = ({ arr }) => (
    <ul>
      {Array.isArray(arr)
        ? arr.map(i => (
            <li
              className={clsx('text-tertiary', 'hover:text-secondary transition-all')}
              key={i?.title}>
              <Link href={i?.link}>
                <a>{i?.title}</a>
              </Link>
            </li>
          ))
        : null}
    </ul>
  )

  return (
    <footer className='py-10'>
      <GridContainer className='pb-48'>
        {/* First Column - FakeSite */}
        <nav className={clsx('grid col-span-1  col-start-0', 'md:col-start-1', 'text-size-reg')}>
          <h4 className='font-semibold text-primary pb-5'>Fakesite</h4>

          <ArrayList arr={COL_A} />
        </nav>

        {/* Second Column - Account */}
        <nav
          className={clsx(
            'grid col-span-2 col-start-1',
            'md:col-start-3',
            'text-size-reg text-tertiary'
          )}>
          <h4 className='font-semibold text-primary pb-5'>Account</h4>

          <ArrayList arr={COL_B} />
        </nav>
      </GridContainer>

      <GridContainer>
        <nav
          className={clsx(
            'grid col-span-4 col-start-0 py-10',
            'md:col-span-10 md:col-start-1',
            'border-t-2 border-[#E8E8E8]' // separator
          )}>
          <ul className='flex flex-col md:flex-row md:space-x-28 text-size-reg items-center text-tertiary'>
            <li className='md:flex-1 mb-10 md:mb-0'>
              <Link href='/'>
                <a>
                  <Image src={logo} alt='Fake Site Logo' width='90' height='69' />
                </a>
              </Link>
            </li>

            <li className=' hover:text-secondary transition-all cursor-pointer'>Terms</li>
            <li className=' hover:text-secondary transition-all cursor-pointer'>Privacy</li>
            <li className=' hover:text-secondary transition-all cursor-pointer'>Site Map</li>
          </ul>
        </nav>
      </GridContainer>
    </footer>
  )
}

export default Footer
