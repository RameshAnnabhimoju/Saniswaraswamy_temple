import React from "react";
import "./Featured.css";
function Featured() {
  return (
    <div className="featured-container">
      <div className="featured-left">
        <div className="featured-left-heading">శనిత్రయోదశి పూజ</div>
        పేర్కొన్న తేదీలు శనిత్రయోదశి మహాపర్వదినాలు. కావున ఈ శనిత్రయోదశి రోజుల్లో
        మందపల్లి గ్రామంలో కొలువై ఉన్న శ్రీ మందేశ్వర (శనేశ్వర) స్వామికి శని దోష
        పరిహారార్ధం ఆచరిస్తే శని వల్ల కలిగే సర్వదోషాలు నివారిస్తాయని
        స్కంధపురాణంలో చెప్పబడింది. కావున భక్తులు "శని" వలన కలిగే సర్వదోషాలు
        నివృత్తి కావాలని తైలాభిషేకం నిర్వహించి ఆయురారోగ్యాలతో వర్ధిల్లాలని మనవి.
        <br />
        <button className="featured-button">Register Now</button>
      </div>
      <div className="featured-right">
        <ul>
          <li className="featured-purnami">01-01-2023</li>
          <li className="featured-amavasya">15-07-2023</li>
          <li className="featured-amavasya">11-11-2023</li>
          <li className="featured-purnami">25-11-2023</li>
          <li className="featured-purnami">23-03-2024</li>
        </ul>
        <br />
        <ul className="featured-legend">
          <li className="featured-purnami">పౌర్ణమి</li>
          <li className="featured-amavasya">అమావాస్య</li>
        </ul>
      </div>
    </div>
  );
}

export default Featured;
