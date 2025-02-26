import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';
import withRouter from './withRouter';
class HomeNavigateClass extends Component {
    constructor(props) {
        super(props);
        // navigate = useNavigate();
        this.about = this.about.bind(this)
        this.products = this.products.bind(this)
        this.contact = this.contact.bind(this)
    }
    
    about(){
        this.props.navigate("/about")
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
        <h1>Inside the Home Component</h1>
        <button onClick={this.about}>About Us</button>
        <button onClick={this.products}>Products</button>
        <button onClick={this.contact}>Contact Us</button>
      </div>
    )
  }
}

export default withRouter(HomeNavigateClass)