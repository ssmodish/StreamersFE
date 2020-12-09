import React from 'react'
import { NavLink } from 'react-router-dom'
import AdminLinks from './AdminLinks'

const SignedInLinks = () => {
  return (
    <ul className="right">
      <AdminLinks />
      <li><NavLink to='/'>Logout</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>Admin</NavLink></li>
    </ul>
  )
}

export default SignedInLinks