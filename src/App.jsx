import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./App/Pages/HomePage/Home";
import About from "./App/Pages/About/About"
import Baner from "./App/components/Baner/Baner";
import Navbar from "./App/components/Navbar/Navbar"
import Donations from "./App/Pages/Donations/Donations";
import News from "./App/Pages/News&Updates/News";
import Footer from "./App/components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Baner />
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Donations" element={<Donations/>}/>
          <Route path="/News" element={<News/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  );
};

export default App;
