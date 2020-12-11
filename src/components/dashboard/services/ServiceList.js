import React from 'react'
import Service from './Service'

const ServiceList = () => {
  return (
    <ul className="collection with-header">
      <li className="collection-header"><h4>Services</h4></li>

      <Service />
      <Service />
      <Service />

    </ul>
  )
}

export default ServiceList