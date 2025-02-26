import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function HomeNavigateFunction() {
   
      const navigate = useNavigate();
    
    
    function about(){
        navigate("/about")
    }

    function products(){
        navigate("/products")
    }

    function contact(){
        navigate("/contact")
    }

  return (
    <div>
        <h1>Inside the Home Navigate Function Component</h1>
        <button onClick={about}>About Us</button>
        <button onClick={products}>Products</button>
        <button onClick={contact}>Contact Us</button>
    </div>
  )
}
