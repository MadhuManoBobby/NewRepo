import React, { Component } from 'react'

export default class StuData extends Component {
    
  render() {
    const{name,dept} = this.props
    return (
      <div>
        <h1>Hai {name} You are assigned to {dept}</h1>
      </div>
    )
  }
}
