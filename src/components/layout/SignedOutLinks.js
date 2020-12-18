import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/signup'>Signup</NavLink></li>
      <li><NavLink to='/signin'>SignIn</NavLink></li>
    </ul>
  )
}

export default SignedInLinks