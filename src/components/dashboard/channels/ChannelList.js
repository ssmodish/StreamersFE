import React from "react";
import Channel from './Channel'

const ChannelList = ({channels}) => {
  return (
      <ul className="collection with-header">
        <li className="collection-header"><h4>Channels</h4></li>

        { channels && channels.map(channel => {
        return (
          <Channel key={channel.id} channel={channel} />
        )
      })}
        
      </ul>
  );
};

export default ChannelList;
