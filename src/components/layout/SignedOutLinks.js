import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/'>Signup</NavLink></li>
      <li><NavLink to='/'>SignIn</NavLink></li>
    </ul>
  )
}

export default SignedInLinks