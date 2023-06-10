import React from 'react'
import './OnlineServices.css'
import { useNavigate } from "react-router-dom"

const OnlineServices = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="Online_services_title">
        Online Services
      </div>
      <div class="card-grid">
      <div class="card">
        <div class="card-content">
          <h2 class="card-title">ఏకాదశ రుద్రతైలాభిషేకం</h2>
          <p class="card-description">
            <ul>1 సారి పూజకు ₹ 400/-</ul>
            <ul>1సం.లో వచ్చే 52 శనివారములకు ₹ 20,800/-</ul>
            <ul>శాశ్వత అభిషేకము 10 సం||లు మాత్రమే ₹ 4,000/- (ఈ సం||తో కలిపి)</ul>
            <ul>శాశ్వత శనిత్రయోదశులు (సం.లో వచ్చే ప్రతి శనిత్రయోదశులు) 10 సం||లు మాత్రమే. ₹ 24,000/- (ఈ సం||తో కలిపి)</ul>
          </p>
          <button onClick={()=>{
            navigate("/YekadasaRudratailabishekam")
          }} className ="card-button">Book Now</button>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h2 class="card-title">మహాన్యాసపూర్వక ఏకవార రుద్రతైలాభిషేకం</h2>
          <p class="card-description">
            <ul>1 సారి పూజకు ₹ 250/-</ul>
            <ul>1సం.లో వచ్చే 52 శనివారములకు ₹ |13,000/-</ul>
            <ul>శాశ్వత అభిషేకము 10 సం||లు మాత్రమే ₹ 3,000/- (ఈ సం||తో కలిపి)</ul>
            <ul>శాశ్వత శనిత్రయోదశులు (సం.లో వచ్చే ప్రతి శనిత్రయోదశులు) 10 సం||లు మాత్రమే. ₹ 18,000/- (ఈ సం||తో కలిపి)</ul>
          </p>
          <button onClick={()=>{
            navigate("/Mahanyasapurvaka")
          }} className ="card-button">Book Now</button>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h2 class="card-title">శని జపం</h2>
          <p class="card-description">
           <ul>1 సారి పూజకు ₹ 6,000/-</ul>
          </p>
          <button onClick={()=>{
            navigate("/Sanijapam")
          }} className ="card-button">Book Now</button>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h2 class="card-title">శని శాంతి హోమం</h2>
          <p class="card-description">
            <ul>1 సారి పూజకు ₹ 1,000/-</ul>
          </p>
          <button onClick={()=>{
            navigate("/Sani_santhi")
          }} className ="card-button">Book Now</button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default OnlineServices