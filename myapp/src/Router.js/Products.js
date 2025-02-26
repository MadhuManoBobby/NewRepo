import React, { Component } from 'react'
import withRouter from './withRouter';

class Products extends Component {
    constructor(props) {
        super(props);
        this.home = this.home.bind(this)
        this.about = this.about.bind(this)
        this.contact = this.contact.bind(this)
    }
    home(){
        this.props.navigate("/")
    }

    about(){
        this.props.navigate("/about")
    }

    contact(){
        this.props.navigate("/contact")
    }
  render() {
    return (
      <div>
        <h1>Inside the Products component</h1>
        <button onClick={this.home}>Home</button>
        <button onClick={this.about}>About Us</button>
        <button onClick={this.contact}>Contact Us</button>
      </div>
    )
  }
}

export default withRouter(Products)