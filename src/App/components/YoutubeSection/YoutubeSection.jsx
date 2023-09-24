import React from "react";
import "./YoutubeSection.css";
function YoutubeSection() {
  return (
    <div className="youtube-container">
      <div className="youtube-embedded">
        <iframe
          title="youtube-video"
          width="500px"
          height="100%"
          src="https://www.youtube.com/embed/DtBxckJ4Wd4?autoplay=1&mute=1"
        ></iframe>
      </div>
      <div className="youtube-text">
        <div className="youtube-heading">
          Youtube - Sri Mandapalli Saneswara
        </div>
        <div className="youtube-description">
          శ్రీ మందపల్లి శనేశ్వర యూట్యూబ్ ఛానల్ తెలుగులో ఒక భక్తి ఛానల్. శ్రీ
          మందపల్లి శనేశ్వర స్వామి ఆలయాన్ని సందర్శించలేని వారు ఇప్పుడు శ్రీ
          మందపల్లి శనేశ్వర స్వామిని Sri Mandapalli Saneswara youtube channel లో
          వీక్షించవచ్చు. డిజిటల్ మీడియా ద్వారా శ్రీ మందపల్లి శనేశ్వర స్వామి వారి
          ఆశీస్సులు అందించడానికి మే, 2016న ప్రారంభించబడింది. మీరు ఈ యూట్యూబ్
          ఛానెల్‌లో మీ ఇంటి నుండి పరోక్ష హోమాలు, పూజలు మరియు తైలాభిషేకాలను
          వీక్షించవచ్చు.
        </div>
        <button type="button" className="youtube-button">
          Watch now
        </button>
      </div>
    </div>
  );
}

export default YoutubeSection;
