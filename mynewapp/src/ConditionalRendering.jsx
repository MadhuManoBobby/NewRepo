import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : false,
            name: "Madhu"
        }
    }
    
  render() {

    return  (this.state.isLoggedIn) && <h1>Welcome {this.state.name}</h1>
//    return (this.state.isLoggedIn)?<h1>Welcome {this.state.name}</h1>:<h1>Welcome Ghost</h1>;
    
}
}
// let msg;
// if(this.state.isLoggedIn){
//  msg =  <h1>Welcome {this.state.name}</h1>
// }else{
//  msg = <h1>Welcome Ghost</h1>
// }

// return msg;

// if(this.state.isLoggedIn){
//     return <h1>Welcome {this.state.name}</h1>
// }else{
//     return <h1>Welcome Ghost</h1>
// }