import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import Content from "./pages/Content"
import Home from "./pages/Home"
import Bank from './pages/Bank'
import Signin from "./pages/Signin"
import Upload from "./pages/upload"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import{ Route, Routes } from "react-router-dom"



function App() {
  return (
   <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Content" element={<Content/>}/>
          <Route path="/Bank" element={<Bank/>}/>
          <Route path="/Upload" element={<Upload/>}/>
          <Route path="/Signin" element={<Signin/>}/>
        </Routes>
   </>
   )
}

export default App;

