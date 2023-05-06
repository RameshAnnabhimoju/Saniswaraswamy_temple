import React from "react";
import Baner from "../../components/Baner/Baner";
import Navbar from "../../components/Navbar/Navbar";
import CarouselComponent from "../../components/Carousel/CarouselComponent";
import Scrollingtxt from "../../components/Scrolling_text/Scrollingtxt";
import Poojas from "../../components/Poojas/Poojas";
import YoutubeSection from "../../components/YoutubeSection/YoutubeSection";
import Footer from "../../components/Footer/Footer";
import Annadanam from "../../components/Annadanam/Annadanam";
import Donations from "../../components/Donations/Donations";
import "./Home.css";
import Newsupdates from "../../components/News&updates/Newsupdates";
import Events from "../../components/Events/Events";
import Teluguscrollingtxt from "../../components/Scrolling_text/Tel_scroll_txt"
import Featured from "../../components/Featured/Featured";

const Home = () => {
  return (
    <div>
      <Baner />
      <Navbar />
      <CarouselComponent />
      <Scrollingtxt />
      <Teluguscrollingtxt/>

      <div className="updates-section">
        <Newsupdates />
        <Events />
      </div>

      <Featured />
      <Poojas />
      <YoutubeSection />

      <div className="Donate-section">
        <Annadanam />
        <Donations />
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
