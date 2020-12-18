import React from 'react'
import ServiceProvider from './ServiceProvider'

const ServiceProviderList = ({services}) => {
  return (
    <ul className="collection with-header">
      <li className="collection-header"><h4>Service Providers</h4></li>
      { services && services.map(service => {
        return (
          <ServiceProvider key={service.id} service={service} />
        )
      })}
    </ul>
  )
}

export default ServiceProviderList