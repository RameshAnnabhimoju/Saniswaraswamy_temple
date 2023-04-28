import React from 'react'
import './Baner.css'
import godimg from '../Images/godpiccut.jpg'
import govlogo from '../Images/AP-Govt-Logo.png'

const Baner = () => {
  return (
    <div className='Baner'>
      <div className='god-image'>
        <img className='godimg' src={godimg} alt="" />
      </div>

      <div className='title'>
        <div className='telugu-title'>
          <div className='telugu-govt-title'>దేవాదాయ ధర్మాదాయ శాఖ, ఆంధ్రప్రదేశ్ ప్రభుత్వం</div>
          <div className='telugu-temple-title'>శ్రీ మందేశ్వర (శనీశ్వర) స్వామి వారి దేవస్థానం</div>
          <div className='telugu-address-title'>మందపల్లి గ్రామం, కొత్తపేట మండలం - 533223, తూ. గో. జిల్లా (ఆంధ్రప్రదేశ్)</div>
        </div>
        <div className="english-title">
          <div className='english-govt-title'>Endowment Department, Govt of AP.</div>
          <div className='english-temple-title'>Sri Mandeswara (Saneswara) Swamy Devastanam</div>
          <div className='telugu-address-title'>Mandapalli(V), Kothapeta(M) - 533223, E.G.Dist(Andhra Pradesh) Ph: 08855 243208</div>
        </div>
      </div>

      <div className='govt-logo'>
        <img className='govtlogo' src={govlogo} alt="" />
      </div>
    </div>
  )
}

export default Baner