import React from 'react'

export default function Greet() {
   let time = new Date(2025,27,2,22).getHours()

   let greetMessage;

   const customStyle = {
    color:''
   }

   if(time<=12){
    greetMessage = 'Good Morning'
    customStyle.color = 'yellow'
   }else if(time<=16){
    greetMessage = 'Good Afternoon'
    customStyle.color = 'blue'
   }else if(time<=21){
    greetMessage = 'Good Evening'
    customStyle.color = 'white'
   }else{
    greetMessage = 'Good Night'
    customStyle.color = 'pink'
   }

  return (
    <div>
        <h1 style={customStyle}>{greetMessage}</h1>
    </div>
  )
}
