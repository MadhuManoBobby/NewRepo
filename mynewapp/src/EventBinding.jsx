import React, { Component } from 'react'

//Normal Binding => this.message.bind(this)
//Constructor => this.message = this.message.bind(this)
//CallBack => () => this.message() 
//Arrow function => this.message
export default class EventBinding extends Component {
    constructor(props){
        super(props);
        this.state = {
            message:"Bye Bye Java Script..!!!",
            name:"Madhu"
        }
        this.message = this.message.bind(this)
    }
    message(){
        this.setState({
            message:"Welcome to ReactJs"
        }, () => console.log(this.state.count))
    }

        message1 = () => {
            this.setState({
                message:"Welcome to ReactJs"
            }, () => console.log(this.state.count))
        }
        
        render() {
    return (
      <div>
         <h1>Hai {this.state.name}... {this.state.message}</h1>
         <button onClick={this.message.bind(this)}>Normal - Change Message</button>
         <button onClick={this.message}>Constructor - Change Message</button>
         <button onClick={()=>this.message()}>CallBack Arrow - Change Message</button>
         <button onClick={this.message1}>Arrow Function- Change Message</button>
      </div>
    )
  }
}
