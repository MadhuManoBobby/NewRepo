import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
        <button onClick={props.message}>Message from Parent Component</button>
    </div>
  )
}
