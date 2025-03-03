import React, { Component } from 'react'
import './Header.css'

export default class LifeCycleUnMount extends Component {
    constructor(props) {
        super(props);
        this.state ={
            display:true
        }
    }
    
    removeHeader = () => {
        this.setState({
            display:false
        })
    }

  render() {
    let header;
    if(this.state.display){
        header = <HeaderComponent/>
    }

    return (
      <div>
        {header}
        <button onClick={this.removeHeader}>Remove Header Component</button>
      </div>
    )
  }
}


export class HeaderComponent extends Component {

    componentWillUnmount(){
        console.log("Header Component removed From the UI");
        
    }
  render() {
    return (
      <div id='header'>
        <h1>Header Component</h1>
      </div>
    )
}
