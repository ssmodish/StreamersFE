import React, { Component } from 'react'

class CreateService extends Component {
  state = {
    serviceName: '',
    serviceImageURL: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Service</h5>
          <div className="input-field">
            <label htmlFor="serviceName">Service Name</label>
            <input type="text" id="serviceName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="serviceImageURL">Service Image URL</label>
            <input type="text" id="serviceImageURL" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn">Add Service</button>
          </div>

        </form>        
      </div>
    )
  }
}

export default CreateService