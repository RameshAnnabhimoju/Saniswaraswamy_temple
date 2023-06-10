import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./App/Pages/HomePage/Home";
import About from "./App/Pages/About/About"
import Baner from "./App/components/Baner/Baner";
import Navbar from "./App/components/Navbar/Navbar"
import Donations from "./App/Pages/Donations/Donations";
import News from "./App/Pages/News&Updates/News";
import Footer from "./App/components/Footer/Footer";
import  Online_services from './App/Pages/OnlineServices/Online_services'
import Yekadasa_rudratailabishekam from './App/Pages/OnlineServices/Yekadasa_rudratailabishekam'
import Mahanyasapurvaka from "./App/Pages/OnlineServices/Mahanyasapurvaka";
import Sanijapam from "./App/Pages/OnlineServices/Sanijapam";
import Sani_santhi from "./App/Pages/OnlineServices/Sani_santhi";

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
          <Route path="/Online_services" element={<Online_services/>}/>
          <Route path="Yekadasa_rudratailabishekam" element={<Yekadasa_rudratailabishekam/>}/>
          <Route path="Mahanyasapurvaka" element={<Mahanyasapurvaka/>}/>
          <Route path="Sanijapam" element={<Sanijapam/>}/>
          <Route path="Sani_santhi" element={<Sani_santhi/>}/>
          <Route path="/News" element={<News/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  );
};

export default App;
