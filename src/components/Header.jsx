import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import GridContainer from './GridContainer'

import logo from '_public/assets/logo.png'
import stockImage from '_public/assets/stockimage.png'

const Header = () => {
  return (
    <header className='absolute left-0 right-0 top-0 py-10'>
      <GridContainer>
        <nav className='grid col-span-10 col-start-1'>
          <ul className='flex flex-1 space-x-28 text-4xl items-center text-white'>
            <li className='flex-1'>
              <Link href='/'>
                <a>
                  <Image src={logo} alt='Fake Site Logo' width='40' height='40' />
                </a>
              </Link>
            </li>
            <li>Account</li>
            <li>Help</li>
            <li>
              <Link href='/user'>
                <a>
                  <Image
                    src={stockImage}
                    alt='User Logo'
                    width='40'
                    height='40'
                    className='border-2 border-white rounded-full'
                  />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </GridContainer>
    </header>
  )
}

export default Header
