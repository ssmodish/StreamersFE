import React from 'react'
import Service from './Service'

const ServiceList = ({services}) => {
  return (
    <ul className="collection with-header">
      <li className="collection-header"><h4>Services</h4></li>
      { services && services.map(service => {
        return (
          <Service key={service.id} service={service} />
        )
      })}
    </ul>
  )
}

export default ServiceList