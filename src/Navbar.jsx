import React from 'react'
import { Input,Logo,Result } from './components';
import LogoImage from "../public/vite.svg"

const Navbar = ({children}) => {
  return (
    <div className='nav-bar'>

      <Logo logo={LogoImage} alt={'Image logo'} />
      {children}
      
    </div>
  )
}

export default Navbar;
