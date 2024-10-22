

import {Link,Route,Routes} from "react-router-dom"
import Show from "./components/Show";
import Home from "./components/Home";
import Services from "./components/Services";

const App = () => {

  

 
  
  return (
    <div className="px-[5%] py-[5%]">
      <nav className="flex justify-center gap-10">
        <Link to="/" >Home</Link>
        <Link to="/show" >Show</Link>
        <Link to="/services" >Services</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/show" element={<Show/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
      
    </div>
  )
}

export default App