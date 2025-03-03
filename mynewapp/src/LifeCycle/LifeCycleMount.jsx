import React, { Component } from 'react'

export default class LifeCycleMount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favColor : 'Orange'
        }
        console.log("Constructor executes before all other methods");
        
    }

    
    // static getDerivedStateFromProps(props,state){
    //     console.log("GetDerivedStateFromProps executes after constructor and before render");
    //     return {favColor:props.color};
    // }
    
    componentDidMount(){
        console.log("componentDidMount is executed when we mount any component and render");
       setTimeout(() => this.setState({
        favColor:'Pink'
    }),3000) 
    }
   
  render() {
    console.log("Render Executes");
    
    return (
      <div>
        <h1>Favourite Color: {this.state.favColor}</h1>
      </div>
    )
  }

  
 
}
