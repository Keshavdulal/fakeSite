import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import GridContainer from './GridContainer'

import logo from '_public/assets/logo.png'
import avatar from '_public/assets/avatar.jpg'

const Header = ({ showMobileMenu }) => {
  return (
    <header className='absolute left-0 right-0 top-0 py-10 z-10'>
      <GridContainer>
        <nav className={clsx('grid col-span-4 col-start-0', 'md:col-span-10 md:col-start-1')}>
          <ul className='flex flex-1 space-x-28 text-size-reg items-center text-white'>
            <li className='flex-1'>
              <Link href='/'>
                <a>
                  <Image src={logo} alt='Fake Site Logo' width='40' height='40' />
                </a>
              </Link>
            </li>

            {/* Hide These on Mobile View */}
            <li className='hidden md:block'>Account</li>
            <li className='hidden md:block'>Help</li>

            <li className='hidden md:block'>
              <Link href='/user'>
                <a>
                  <img
                    // src={avatar}
                    src='/assets/avatar.jpg'
                    alt='User Logo'
                    width='40'
                    height='40'
                    className='border-2 border-white rounded-full object-cover w-20 h-20'
                  />
                </a>
              </Link>
            </li>

            <li className='md:hidden block cursor-pointer ' onClick={showMobileMenu}>
              MENU
            </li>
          </ul>
        </nav>
      </GridContainer>
    </header>
  )
}

export default Header
