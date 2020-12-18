import React, { Component } from 'react'

class CreateChannel extends Component {
  state = {
    channelName: '',
    channelImageURL: ''
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
          <h5 className="grey-text text-darken-3">Create Channel</h5>
          <div className="input-field">
            <label htmlFor="channelName">Channel Name</label>
            <input type="text" id="channelName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="channelImageURL">Channel Image URL</label>
            <input type="text" id="channelImageURL" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn">Add Channel</button>
          </div>

        </form>        
      </div>
    )
  }
}

export default CreateChannel