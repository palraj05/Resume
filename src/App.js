
import { BrowserRouter as Router, } from 'react-router-dom';
import { Routes, Route } from "react-router-dom"
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Home from './Home';
import NavMenu from "./NavMenu";
import Resume from "./Resume";
import resume from "./resume.pdf";
import SideBar from './SideBar';


function App() {



  
  return (
   

    

    <Router >
      <div className="App">
      
        <NavMenu />

     <SideBar />
    
        <Routes className="justify">
          <Route path="/" element={ <Home/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/resume" element={ <Resume /> }/>
          <Route path="/contact" element={ <Contact/> }/>
         
        </Routes>

      

      </div>
    </Router>

  );
}

export default App;
