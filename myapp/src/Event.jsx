import React, { Component } from 'react'

export default class EventClass extends Component {
    click(){
        alert("Click Event from Click Class Component")
    }
  render() {
    return (
      <div>
       <button onClick={this.click}>Click Here - Class Component</button> 
      </div>
    )
  }
}


export function EventFunction() {
    function click(){
        alert("Click Event from Click Function Component")

    }
  return (
    <div>
       <button onClick={click}>Click Here - Function Component</button> 
    </div>
  )
}
