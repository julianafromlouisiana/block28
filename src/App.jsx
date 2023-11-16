import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";
import './App.css'
import './index.css'




function App() {
  

  return (
    //parent div
    //three children h1, two divs, delete h1 tag
    //Add an element property to each Route tag and
    //pass a simple h1 tag with a relevant heading for each component
      <div id="container">
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/home">Home</Link>
        </div>
      <div id="main-section">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
        </div> 
    </div>
  
  )
}

export default App
