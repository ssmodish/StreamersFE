import React from 'react'

const ServiceProvider = ({service}) => {
  return(
    <li className="collection-item">
      {service.serviceProvider}
    </li>
  )
}

export default ServiceProvider