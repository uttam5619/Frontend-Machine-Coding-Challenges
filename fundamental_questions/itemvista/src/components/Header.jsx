import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div class='header'>
        <NavLink 
            to='/'
            className={({isActive})=>isActive?'text-orange-700': 'text-gray-700'}
        >
            Home
        </NavLink>

        <NavLink
            to='/about'
            className={({isActive})=>isActive?'text-orange-700': 'text-gray-700'}
        >
            About
        </NavLink>

        <NavLink
            to='/contact'
            className={({isActive})=>isActive?'text-orange-700': 'text-gray-700'}
        >
            Contact
        </NavLink>
    </div>
  )
}

export default Header