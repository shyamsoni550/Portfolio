import React from 'react'
import Home from "./Home"
import Navbar from "./Navbar"
import About from "./About"
import PortFolio from './PortFolio'
import Footer from "./Footer"
import Experience from "./Experience"



function App() {
  return (
    <>
     <Home/>  
        <Navbar />
        <About />
        <PortFolio />
        <Experience />
        <Footer />
       
    </>
  );
}

export default App