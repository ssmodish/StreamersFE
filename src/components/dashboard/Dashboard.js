import React, { Component } from 'react'
import ServiceProviderList from './serviceProviders/ServiceProviderList'
import ServiceList from './services/ServiceList'
import ChannelList from './channels/ChannelList'
import { connect } from "react-redux";

class Dashboard extends Component {

  render() {
    // console.log(this.props)

    const { services } = this.props

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m4"><ServiceProviderList /></div>
          <div className="col s12 m4"><ServiceList services={services} /></div>
          <div className="col s12 m4"><ChannelList /></div>          
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    services: state.service.services
  }
}

export default connect(mapStateToProps)(Dashboard)  