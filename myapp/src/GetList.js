import  Axios  from 'axios';
import React, { Component } from 'react'

export default class GetList extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[],
            errorMsg:null
        }
    }
    
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(response => {console.log(response)
        this.setState({
                data:response.data
        })})
        .catch(response => {console.log(response)
        this.setState({
            errorMsg:'Error in Fetching the data'
        })})
    }

  render() {
    const {data,errorMsg} = this.state
    return (
      <div>
       <h1> List of Fake Data</h1>
       {data.length? data.map(data => <h1>{data.id + " : " + data.title}</h1>)   : null}
        {errorMsg?<h1>{errorMsg}</h1>:null}
      </div>
    )
  }
}
