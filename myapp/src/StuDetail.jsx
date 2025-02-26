import React from 'react'
import StuArray from './StuArray'
export default function StuDetail(props) {
    const{id,name,age}=props

    
  return (
    <div>
        {StuArray.map(stu => {
        return <ul>
            {props.children}
        <li>ID:{stu.id}</li>
        <li>ID:{stu.name}</li>
        <li>ID:{stu.age}</li>
        
        </ul>
        
    })}
    </div>
  )
}

{/* <ul>
        <li>ID:101</li>
        <li>Name:Madhu</li>
        <li>ID:27</li>
        </ul>
        <ul>
        <li>ID:102</li>
        <li>Name:Mano</li>
        <li>ID:28</li>
        </ul>
        <ul>
        <li>ID:103</li>
        <li>Name:Bobby</li>
        <li>ID:24</li>
        </ul> 
        <ul>
        <li>ID:{id}</li>
        <li>Name:{name}</li>
        <li>ID:{age}</li>
        </ul>*/}

//         <ul>
//         <li>Id:{StuArray[0].id}</li>
//         <li>Name:{StuArray[0].name}</li>
//         <li>Age:{StuArray[0].age}</li>
//         </ul>
//         <ul>
//         <li>Id:{StuArray[1].id}</li>
//         <li>Name:{StuArray[1].name}</li>
//         <li>Age:{StuArray[1].age}</li>
//         </ul>
//         <ul>
//         <li>Id:{StuArray[2].id}</li>
//         <li>Name:{StuArray[2].name}</li>
//         <li>Age:{StuArray[2].age}</li>
//    </ul>