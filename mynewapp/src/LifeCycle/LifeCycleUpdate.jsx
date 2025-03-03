import React, { Component } from 'react'

export default class LifeCycleUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favColor : 'Blue'
        }
        console.log("Constructor executes before all other methods");
        this.changeColor = this.changeColor.bind(this)
        this.changeColor1 = this.changeColor1.bind(this)
    }
    
    // static getDerivedStateFromProps(props,state){
    //     console.log("GetDerivedStateFromProps executes after constructor and before render");
    //     return {favColor:props.color};
    // }

    changeColor = () => {
       setTimeout(() => this.setState({
        favColor:'Yellow'
        }),3000)

        setTimeout(() => this.setState({
            favColor:'Red'
        }),6000)

        setTimeout(() => this.setState({
            favColor:'Purple'
        }),8000)
    }

    changeColor1 = () => {
        setTimeout(() => this.setState({
         favColor:'Golden'
         }),3000)
 
         setTimeout(() => this.setState({
             favColor:'Silver'
         }),6000)
 
         setTimeout(() => this.setState({
             favColor:'Bronze'
         }),8000)
     }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate executes after even and before events method");
        return true;
    }

    getSnapshotBeforeUpdate(preProp,preState){
        console.log("GetSnapshotBeforeUpdate is executed after updation");
        document.getElementById('before').innerHTML='Favourite Color Before Updation: ' + preState.favColor;
        return null;
    }

    componentDidUpdate(){
        console.log("componentDidUpdate is executed after updation");
        document.getElementById('after').innerHTML='Favourite Color After Updation: ' + this.state.favColor;
    }
    render() {
        console.log("Render Executes");
        
        return (
          <div>
            <h1>Favourite Color: {this.state.favColor}</h1>
            <h2 id='before'></h2>
            <h2 id='after'></h2>
            <button onClick={this.changeColor}>Change Color</button>
            <button onClick={this.changeColor1}>Change Color1</button>
          </div>
        )
      }
}
