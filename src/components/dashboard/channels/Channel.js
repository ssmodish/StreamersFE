import React from 'react'

const Channel = ({channel}) => {
  return(
    <li className="collection-item avatar">
      {channel.channelName}
    </li>
  )
}

export default Channel