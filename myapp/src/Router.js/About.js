import React, { Component } from 'react'
import withRouter from './withRouter';
class About extends Component {
    constructor(props) {
        super(props);
        this.home = this.home.bind(this)
        this.products = this.products.bind(this)
        this.contact = this.contact.bind(this)
    }
    
    home(){
        this.props.navigate("/")
    }

    products(){
        this.props.navigate("/products")
    }

    contact(){
        this.props.navigate("/contact")
    }

  render() {
    return (
      <div>
        <h1>Inside the About Component</h1>
        <button onClick={this.home}>Home</button>
        <button onClick={this.products}>Products</button>
        <button onClick={this.contact}>Contact Us</button>
      </div>
    )
  }
}
export default withRouter(About)