import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'

const MobileMenu = ({ isMobileMenuVisible, hideMobileMenu }) => {
  if (!isMobileMenuVisible) return null

  return (
    <nav
      className={clsx(
        'absolute top-0 left-0 right-0 bottom-0',
        'bg-white text-tertiary w-100vw h-screen z-20',
        'flex justify-center items-center',
        'text-7xl'
      )}>
      <button
        onClick={hideMobileMenu}
        className={clsx(
          'absolute right-0 top-0',
          'm-10 w-16 h-16 p-10',
          'flex items-center justify-center',
          'border-tertiary border-2 rounded-full',
          'cursor-pointer transition-all',
          'hover:text-secondary hover:border-secondary'
        )}>
        X
      </button>

      <ul className={'flex flex-col space-y-10 uppercase text-center cursor-pointer'}>
        <li className='hover:text-secondary transition-all'>
          <Link href='/User'>
            <a>User</a>
          </Link>
        </li>
        <li className='hover:text-secondary transition-all'>
          <Link href='/Account'>
            <a>Account</a>
          </Link>
        </li>
        <li className='hover:text-secondary transition-all'>
          <Link href='/Help'>
            <a>Help</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MobileMenu
