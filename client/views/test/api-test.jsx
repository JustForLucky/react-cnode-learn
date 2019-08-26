import React, { Component } from 'react'
import axios from 'axios';

/* eslint-disable */
export default class TestApi extends Component {
  getTopics() {
    axios.get('/api/topics')
    .then(resp => {
      console.log(resp)
    }).catch(error => {
      console.warn(error)
    })
  }
  login() {
    axios.post('/api/user/login', {
      accessToken: 'b82a58a4-e823-45ef-872e-2f20a19384f6'
    })
    .then(resp => {
      console.log(resp)
    }).catch(error => {
      console.warn(error)
    })
  }
  markAll() {
    axios.post('/api/message/mark_all?needAccessToken=true')
    .then(resp => {
      console.log(resp)
    }).catch(error => {
      console.warn(error)
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.getTopics}>topics</button>
        <button onClick={this.login}>login</button>
        <button onClick={this.markAll}>markAll</button>
      </div>
    )
  }
}
/* eslint-enable */
