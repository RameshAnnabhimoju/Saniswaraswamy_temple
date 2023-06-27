import React from 'react'
import QR from '../../Assets/Images/QR_Img.jpg'

const Payment = () => {
  return (
    <div>
      <center>
        <div>
          Please pay by using below QR Code
        </div>
      <img style={{width: "250px", height: "300px"}} src={QR} alt="" />
        <div>
          <label htmlFor="">Please enter trasaction ID(Last 4 Digits) : </label>
          <input type="text" /><br />
          <label htmlFor="">Please enter Debit from Details(Last 4 Digits)</label>
          <input type="text" /><br />
          <button className='btn btn-primary'>Submit</button>
        </div>
      </center>
    </div>
  )
}

export default Payment