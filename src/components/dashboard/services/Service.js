import React from 'react'

const Service = ({service}) => {
  return(
    <li className="collection-item">
      {service.serviceName}
    </li>
  )
}

export default Service