import React, { Component } from 'react'
import ServiceProviderList from './serviceProviders/ServiceProviderList'
import ServiceList from './services/ServiceList'
import ChannelList from './channels/ChannelList'
import { connect } from "react-redux";

class Dashboard extends Component {

  render() {
    console.log(this.props)

    const { services, channels } = this.props

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m4"><ServiceProviderList services={services} /></div>
          <div className="col s12 m4"><ServiceList services={services} /></div>
          <div className="col s12 m4"><ChannelList channels={channels} /></div>          
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    services: state.service.services,
    channels: state.channel.channels
  }
}

export default connect(mapStateToProps)(Dashboard)  