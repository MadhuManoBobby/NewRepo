import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
import { deleteCustomer as deleteCustomerAction } from './Slice/CustomerSlice'

export const ViewCustomer = (props) => {
    // const{customer} = props
    const customer = useSelector(state => state.customer)
    const dispatch = useDispatch()

    const deleteCustomer = (index) => {
      dispatch(deleteCustomerAction(index))
    }
  return (
    <div>
        <h1>Customer List</h1>
        <ul>
            {customer.map((customer,index) => <li>{customer} <button onClick={() => deleteCustomer(index)}>Delete</button></li>)}
        </ul>
    </div>
  )
}
