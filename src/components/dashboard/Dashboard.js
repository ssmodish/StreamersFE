import React, { Component } from 'react'
import ServiceProviderList from './serviceProviders/ServiceProviderList'
import ServiceList from './services/ServiceList'
import ChannelList from './channels/ChannelList'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m4"><ServiceProviderList /></div>
          <div className="col s12 m4"><ServiceList /></div>
          <div className="col s12 m4"><ChannelList /></div>          
        </div>
      </div>
    )
  }
}

export default Dashboard  