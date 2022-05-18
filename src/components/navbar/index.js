import React from 'react'
import { MdHome, MdFavoriteBorder, MdOutlinePersonOutline } from 'react-icons/md'

import { Nav, Link } from './styles'

const iconSize = '32px'

export const Navbar = () => {
  return (
    <Nav>
      <Link to='/'><MdHome size={iconSize} /></Link>
      <Link to='/favs'><MdFavoriteBorder size={iconSize}/></Link>
      <Link to='/user'><MdOutlinePersonOutline size={iconSize} /></Link>
    </Nav>
  )
}