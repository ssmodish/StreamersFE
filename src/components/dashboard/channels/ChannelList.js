import React from "react";
import Channel from './Channel'

const ChannelList = () => {
  return (
      <ul className="collection with-header">
        <li className="collection-header"><h4>Channels</h4></li>

        <Channel />
        <Channel />
        <Channel />


        
      </ul>
  );
};

export default ChannelList;
