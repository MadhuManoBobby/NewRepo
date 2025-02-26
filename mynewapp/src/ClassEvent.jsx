import React, { Component } from 'react'

export default class ClassEventComponent extends Component {
    message(){
        alert("Click Event from Class Component")
    }
  render() {
    return (
      <div>
        <button onClick={this.message}>Click Event - Class Component</button>
      </div>
    )
  }
}

export function FunctionEventComponent() {
    function message(){
        alert("Click Event from Function Component")
    }
  return (
    <div>
        <button onClick={message}>Click Event - Function Component</button>
    </div>
  )
}


