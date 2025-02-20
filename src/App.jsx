import React from 'react'
import Home from "./Home.jsx"
import Navbar from "./Navbar"
import About from "./About"
import PortFolio from './PortFolio'
import Footer from "./Footer"
import Experience from "./Experience"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Home />
        <About />
        <PortFolio />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App
