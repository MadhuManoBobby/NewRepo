import React, { Component } from 'react'

export default class ClassCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }
    
    increment(){
      this.setState(pre => ({
        count:pre.count+1
      }),() => console.log("Callback Value:",this.state.count))

      // this.setState({
      //   count:this.state.count+1
      // },() => console.log("Callback Value:",this.state.count))
      // console.log("Normal Console outside the setstate:",this.state.count);
    }

    incrementBy5(){
      for(let i=1;i<=5;i++){
        this.increment();
      }
    }
  render() {
    return (
      <div>
       <h1>{this.state.count}</h1>
       <button onClick={() => this.increment()}>Increment</button>
       <button onClick={() => this.incrementBy5()}>IncrementBy5</button>
       </div>
    )
  }
}
