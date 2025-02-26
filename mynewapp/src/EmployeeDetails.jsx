import React, { Component } from "react";

export default class EmployeeDetail extends Component{
    render(){
        const{id,name,dept} =  this.props
        return <ul>
            <li>ID: {id}</li>
            <li>Name: {name}</li>
            <li>Dept: {dept}</li>
        </ul>
       
    }
}








