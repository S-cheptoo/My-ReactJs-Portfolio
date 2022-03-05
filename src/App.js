import React from "react";
import './App.scss';
import NavBar from "./components/NavBar";
import {Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import MyWorkPage from "./Pages/MyWorkPage";
import ContactPage from "./Pages/ContactPage";


function App() {
  return (
      <div className="App">
        <div className="sidebar">
          <NavBar/>
        </div>
        <div className="main-content">
          <div className="content">
            <Routes>
                <Route path="/" exact element={<HomePage/>}/>
                <Route path="/about" exact element={<AboutPage/>} />
                <Route path="/work" exact element={<MyWorkPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
            </Routes>
          </div>
        </div>
      </div>
    
  );
}

export default App;
