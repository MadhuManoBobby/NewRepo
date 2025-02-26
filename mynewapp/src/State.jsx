import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:"Bye Bye Java Script..!!!",
            name:"Madhu"
        }
    }
    
    message(){
        this.setState({
            message:"Welcome to ReactJs...!!!"
        },() => console.log(this.state.message))

        // console.log(this.state.message);
        
    }
    
  render() {
    return (
      <div>
        <h1>Hai {this.state.name}... {this.state.message}</h1>
        <button onClick={() =>  this.message()}>Change Message</button>
      </div>
    )
  }
}
