import React from 'react'
import { NavLink } from 'react-router-dom'
import AdminLinks from './AdminLinks'

const SignedInLinks = () => {
  return (
    <ul className="right">
      <div className="row">
        <div className="col">
          <AdminLinks />
        </div>
        <div className="col">
          <li><NavLink to='/'>Logout</NavLink></li>
          <li><NavLink to='/' className='btn btn-floating pink lighten-1'>Admin</NavLink></li>
        </div>
      </div>
    </ul>
  )
}

export default SignedInLinks