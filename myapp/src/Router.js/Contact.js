import React, { Component } from 'react'
import withRouter from './withRouter';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.home = this.home.bind(this)
        this.products = this.products.bind(this)
        this.about = this.about.bind(this)
    }
    
    home(){
        this.props.navigate("/")
    }

    products(){
        this.props.navigate("/products")
    }

    about(){
        this.props.navigate("/about")
    }
  render() {
    return (
      <div>
        <h1>Inside the Contact Component</h1>
        <button onClick={this.home}>Home</button>
        <button onClick={this.about}>About Us</button>
        <button onClick={this.products}>Contact Us</button>
      </div>
    )
  }
}

export default withRouter(Contact)