import React from 'react'

import GridContainer from './GridContainer'

const Header = () => {
  return (
    <header>
      <GridContainer>
        <nav className='grid col-span-10 col-start-1'>
          <ul className='flex flex-1 bg-pink-300 space-x-28'>
            <li className='flex-1'>Fox</li>
            <li>Account</li>
            <li>Help</li>
            <li>User</li>
          </ul>
        </nav>
      </GridContainer>
    </header>
  )
}

export default Header
