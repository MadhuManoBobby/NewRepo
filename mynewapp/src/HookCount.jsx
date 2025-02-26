import React, { useState } from 'react'

export const HookCount = () => {
    const [count, setCount] = useState(0)

    // const increment =() => {
    //     setCount(pre => pre+1)

    //     // setCount(count+1)   
    // }

    // const incrementBy5 = () => {
    //     for(let i=1;i<=5;i++){
    //         increment();
    //     }
    // }
  return (
    <div>
       <h1>{count}</h1>
       <button onClick={() => setCount(pre => pre+1)}>Hook Increment</button>
       <button onClick={() => {
        for(let i=1;i<=5;i++){
            setCount(pre => pre+1)
        }
    }}>Hook IncrementBy 5</button>
       </div>
  )
}
