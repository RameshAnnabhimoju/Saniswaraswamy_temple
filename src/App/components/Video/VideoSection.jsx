import React from "react";
import "./VideoSection.css";
import video from "../../Assets/Videos/mandapalli.mp4";

function VideoSection() {
  return (
    <div className="videoSection_Contaier">
      {/* <div className="videoSection_title">వార్షిక కళ్యాణ మహోత్సవం</div> */}
      <iframe
        title="video"
        width="800px"
        height="600px"
        src={video + "?autoplay=1"}
      ></iframe>
    </div>
  );
}

export default VideoSection;
