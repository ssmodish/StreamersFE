import React, { Component } from 'react'

class CreateServiceProvider extends Component {
  state = {
    serviceProviderName: '',
    serviceProviderImageURL: ''
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
          <h5 className="grey-text text-darken-3">Create Service Provider</h5>
          <div className="input-field">
            <label htmlFor="serviceProviderName">Service Provider Name</label>
            <input type="text" id="serviceProviderName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="serviceProviderImageURL">Service Provider Image URL</label>
            <input type="text" id="serviceProviderImageURL" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn">Add Service Provider</button>
          </div>

        </form>        
      </div>
    )
  }
}

export default CreateServiceProvider