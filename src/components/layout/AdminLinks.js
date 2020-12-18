import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/create-service-provider'>Add ServiceProvider</NavLink></li>
      <li><NavLink to='/create-service'>Add Service</NavLink></li>
      <li><NavLink to='/create-channel'>Add Channel</NavLink></li>
    </ul>
  )
}

export default AdminLinks