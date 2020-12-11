import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/'>Add ServiceProvider</NavLink></li>
      <li><NavLink to='/'>Add Service</NavLink></li>
      <li><NavLink to='/'>Add Channel</NavLink></li>
    </ul>
  )
}

export default AdminLinks