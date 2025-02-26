import React from "react";
import StuDetail from "./StuDetail";
import EventClass, { EventFunction } from "./Event";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Router.js/Home";
import About from "./Router.js/About";
import Products from "./Router.js/Products";
import Contact from "./Router.js/Contact";
import HomeNavigateFunction from "./Router.js/HomeNavigateFunction";
import HomeNavigateClass from "./Router.js/HomeNavigateClass";
import { AddCustomer } from "./CustomerComponents/AddCustomer";
import { Store } from "./CustomerComponents/Store";
import {Provider} from 'react-redux';
import { ViewCustomer } from "./CustomerComponents/ViewCustomer";

function App() {
  return (
    <Provider store={Store}>
    <div>
      <h1>React-redux Add Customers</h1>
      <AddCustomer/>
      <ViewCustomer/>
    </div>
    </Provider>

  );
}

export default App;

{/* <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomeNavigateClass/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter> */}

      {/* <BrowserRouter>
      <Routes>
      <Route path="/" Component={HomeNavigateFunction}></Route>
      <Route path="/about" Component={About}></Route>
      <Route path="/products" Component={Products}></Route>
      <Route path="/contact" Component={Contact}></Route>
      </Routes>
      </BrowserRouter> */}

      {/* <BrowserRouter>
      <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/about" Component={About}></Route>
      <Route path="/products" Component={Products}></Route>
      <Route path="/contact" Component={Contact}></Route>
      </Routes>
      </BrowserRouter> */}

{/* <ul>
<li>Id:{StuArray[0].id}</li>
<li>Name:{StuArray[0].name}</li>
<li>Age:{StuArray[0].age}</li>
</ul>
<ul>
<li>Id:{StuArray[1].id}</li>
<li>Name:{StuArray[1].name}</li>
<li>Age:{StuArray[1].age}</li>
</ul>
<ul>
<li>Id:{StuArray[2].id}</li>
<li>Name:{StuArray[2].name}</li>
<li>Age:{StuArray[2].age}</li>
</ul> */}

 {/* <StuDetail>
        <h1>Hello World</h1>
      </StuDetail> */}

      {/* <StuDetail id={101} name="Madhu" age={25}/>
      <StuDetail id={102} name="Manoj" age={26}/>
      <StuDetail id={103} name="Bobby" age={23}/>
      <StuData name="Yashu" dept="QA"/>
      <StuData name="Vidhu" dept="Developer"/>
      <StuData name="Yasodha" dept="Testing"/> */}
    