import React from 'react';
import './App.css';
import ClassCount from './ClassCount';
import StudentDetail from './StudentDetails';
import { HookCount } from './HookCount';
import State from './State';
import EventBinding from './EventBinding';
import EmployeeDetail from './EmployeeDetails';
import ParentComponent from './ParentComponent';
import ConditionalRendering from './ConditionalRendering';
import CustomStyle from './CustomStyle';
import Greet from './Greet';
import LifeCycleMount from './LifeCycle/LifeCycleMount';
import LifeCycleUpdate from './LifeCycle/LifeCycleUpdate';
import LifeCycleUnMount from './LifeCycleUnMount';

function App() {
  return (
    <div className="App">
      {/* <LifeCycleMount color='Black'/> */}
      {/* <LifeCycleUpdate color='Black'/> */}
      <LifeCycleUnMount/>
    </div>
  );
}

export default App;

  {/* <HookCount/>
      <ParentComponent/> */}
      {/* <ConditionalRendering/>
      <CustomStyle/>
      <Greet/> */}

{/* <StudentDetail fname="Madhu"/> */}
{/* <State/>
      <EventBinding/>
      <EmployeeDetail/> */}
{/* <ClassCount/>
      <StudentDetail/> */}