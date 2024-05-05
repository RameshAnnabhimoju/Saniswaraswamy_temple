import React from "react";
import CarouselComponent from "../../components/Carousel/CarouselComponent";
import Scrollingtxt from "../../components/Scrolling_text/Scrollingtxt";
import Poojas from "../../components/Poojas/Poojas";
import YoutubeSection from "../../components/YoutubeSection/YoutubeSection";
import Annadanam from "../../components/Annadanam/Annadanam";
import Donations from "../../components/Donations/Donations";
import "./Home.css";
import Newsupdates from "../../components/News&updates/Newsupdates";
import Events from "../../components/Events/Events";
import Teluguscrollingtxt from "../../components/Scrolling_text/Tel_scroll_txt";
import Featured from "../../components/Featured/Featured";
import Poster from "../../components/Poojas_poster/Poster";
// import VideoSection from "../../components/Video/VideoSection";

const Home = () => {
  return (
    <div>
      <CarouselComponent />
      <Scrollingtxt />
      <Teluguscrollingtxt />

      {/* <VideoSection /> */}
      <div className="updates-section">
        <Newsupdates />
        <Events />
      </div>

      <Poster />

      <Featured />
      <Poojas />
      <YoutubeSection />

      <div className="Donate-section">
        <Annadanam />
        <Donations />
      </div>
    </div>
  );
};

export default Home;
