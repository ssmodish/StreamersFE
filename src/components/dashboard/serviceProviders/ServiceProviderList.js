import React from 'react'
import ServiceProvider from './ServiceProvider'

const ServiceProviderList = () => {
  return (
    <ul className="collection with-header">
      <li className="collection-header"><h4>Service Providers</h4></li>

      <ServiceProvider />
      <ServiceProvider />
      <ServiceProvider />

    </ul>
  )
}

export default ServiceProviderList