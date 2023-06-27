import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./App/Pages/HomePage/Home";
import About from "./App/Pages/About/About";
import Baner from "./App/components/Baner/Baner";
import Navbar from "./App/components/Navbar/Navbar";
import Donations from "./App/Pages/Donations/Donations";
import News from "./App/Pages/News&Updates/News";
import Footer from "./App/components/Footer/Footer";
import OnlineServices from "./App/Pages/OnlineServices/OnlineServices";
import YekadasaRudratailabishekam from "./App/Pages/OnlineServices/YekadasaRudratailabishekam";
import Mahanyasapurvaka from "./App/Pages/OnlineServices/Mahanyasapurvaka";
import Sanijapam from "./App/Pages/OnlineServices/Sanijapam";
import SaniSanthi from "./App/Pages/OnlineServices/SaniSanthi";
import Confirmdetails from "./App/Pages/OnlineServices/Confirmdetails";
import Sevas from "./App/Pages/Sevas&darshanas/Sevas";
import Payment from "./App/components/Payment/Payment";
import OnlineServicesDetails from "./App/Pages/OnlineServices/OnlineServicesDetails";
import Dashboard from "./App/Pages/Dashboard/Dashboard";

const App = () => {
  return (
    <div>
      <Baner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Donations" element={<Donations />} />
          <Route path="/OnlineServices" element={<OnlineServices />} />
          <Route
            path="/OnlineServicesDetails"
            element={<OnlineServicesDetails />}
          />
          <Route path="Confirmdetails" element={<Confirmdetails />} />
          <Route path="/News" element={<News />} />
          <Route path="/Sevas" element={<Sevas />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
