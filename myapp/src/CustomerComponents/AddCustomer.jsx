import React, { useEffect, useRef, useState } from 'react'
import { ViewCustomer } from './ViewCustomer'
import { addCustomer as addCustomerAction } from './Slice/CustomerSlice'
import { useDispatch } from 'react-redux'

export const AddCustomer = () => {
    const [input,setInput] = useState('')
    const inputRef = useRef(null)
    // const [customer,setCustomer] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        inputRef.current.focus()
    })

    const addCustomer = () => {
        // console.log(input);
        if(input){
          dispatch(addCustomerAction(input))
        }
        // setCustomer(prestate => [...prestate,input])
        setInput('')
    }
  return (
    <div>
        <h1>Add Customers</h1>
        <input type="text" value={input} ref={inputRef} onChange={e => setInput(e.target.value)}/>
        <button onClick={addCustomer}>Add Customer</button>
        {/* <ViewCustomer customer={customer}/> */}
    </div>
  )
}
