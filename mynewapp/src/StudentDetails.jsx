import React from 'react';
import { StudentArray } from './StudentArray';

export default function StudentDetail(props){
    // const {id,name,age} = props
    console.log(StudentArray);
    const {fname} = props

    // let fname = "Sindhu";
    
    // function display(stu){
    //     return <ul>
    //     <li>Id: {stu.id}</li>
    //     <li>Name: {stu.name}</li>
    //     <li>Age: {stu.age}</li>
    // </ul>
    // }

    return <div>
        <h1>{fname}</h1>
        {StudentArray.map(stu => {
        return <ul>
        <li>Id: {stu.id}</li>
        <li>Name: {stu.name}</li>
        <li>Age: {stu.age}</li>
    </ul>
    })}
    </div>
}


{/* <ul>
            <li>Id: {StudentArray[0].id}</li>
            <li>Name: {StudentArray[0].name}</li>
            <li>Age: {StudentArray[0].age}</li>
        </ul>
        <ul>
            <li>Id: {StudentArray[1].id}</li>
            <li>Name: {StudentArray[1].name}</li>
            <li>Age: {StudentArray[1].age}</li>
        </ul>
        <ul>
            <li>Id: {StudentArray[2].id}</li>
            <li>Name: {StudentArray[2].name}</li>
            <li>Age: {StudentArray[2].age}</li>
        </ul>
        <ul>
            <li>Id: {StudentArray[3].id}</li>
            <li>Name: {StudentArray[3].name}</li>
            <li>Age: {StudentArray[3].age}</li>
        </ul> */}