import React, { Component } from 'react'
import './CustomStyle.css'

export default class CustomStyle extends Component {
    CustomStyle={
        color:'white',
        background:'orange',
        border: '10px solid black',
        borderRadius:'20px'
    }
  render() {
    return (
      <div>
        <h1 style={this.CustomStyle} className='head'>Hello World</h1>
      </div>
    )
  }
}
