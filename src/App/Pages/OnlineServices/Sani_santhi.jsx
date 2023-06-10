import React from 'react'

const Sani_santhi = () => {
  return (
    <div className='Sani_santhi'>
      <div className="sani_santhi_title">
      శని శాంతి హోమం
      </div>
      <form className='donations_form' action="">
        <div>
        <label htmlFor="" >Donor / Nominee Name</label><br />
        <input className='input_box' type="text" placeholder='please enter donor/nominee name'/>
        </div>
        
        <div>
        <label htmlFor="">Gothram</label><br />
        <input className='input_box' type="text" placeholder='please enter your gothram'/>
        </div>
        
        <div>
          <label htmlFor="">Nakshtram</label>
          <input className='input_box' type="text" placeholder='Please enter your nakshtram' />
        </div>

        <div>
          <label htmlFor="">Select Pooja</label><br />
          <select name="" id="">
            <option value="1">
            1 సారి పూజకు
            </option>
            <option value="2">
            1సం.లో వచ్చే 52 శనివారములకు
            </option>
            <option value="">
            శాశ్వత అభిషేకము
            </option>
            <option value="">
            శాశ్వత శనిత్రయోదశులు
            </option>
          </select>
        </div>

        <div>
        <label htmlFor="">Amount</label><br />
        <input className='input_box' type="text" placeholder='Minimun donation amount Rs. 1'/>
        </div>

        <div>
        <label htmlFor="">Date of Birth</label> <br />
        <input className='input_box' type="date" name="" id="" />
        </div>

        <div>
        <label htmlFor="">Gender</label><br />
        <select name="gender_box" id="">
          <option value="" hidden>Select a gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
        </div>

        <div>
        <label htmlFor="">Address</label><br />
        <input className='input_box' placeholder='House/building number, street name' type="text" />
        </div>

        <div>
        <label htmlFor="">City</label><br />
        <input className='input_box' placeholder='Please enter your city' type="text" />
        </div>

        <div>
        <label htmlFor="">Pincode</label><br />
        <input className='input_box' placeholder='Enter your pincode' type="text" />
        </div>  
        
        <div>
        <label htmlFor="">State</label><br />
        <select>
        <option value="" hidden>Select state</option>
        <option value="AN">Andaman and Nicobar Islands</option>
        <option value="AP">Andhra Pradesh</option>
        <option value="AR">Arunachal Pradesh</option>
        <option value="AS">Assam</option>
        <option value="BR">Bihar</option>
        <option value="CH">Chandigarh</option>
        <option value="CT">Chhattisgarh</option>
        <option value="DN">Dadra and Nagar Haveli</option>
        <option value="DD">Daman and Diu</option>
        <option value="DL">Delhi</option>
        <option value="GA">Goa</option>
        <option value="GJ">Gujarat</option>
        <option value="HR">Haryana</option>
        <option value="HP">Himachal Pradesh</option>
        <option value="JK">Jammu and Kashmir</option>
        <option value="JH">Jharkhand</option>
        <option value="KA">Karnataka</option>
        <option value="KL">Kerala</option>
        <option value="LA">Ladakh</option>
        <option value="LD">Lakshadweep</option>
        <option value="MP">Madhya Pradesh</option>
        <option value="MH">Maharashtra</option>
        <option value="MN">Manipur</option>
        <option value="ML">Meghalaya</option>
        <option value="MZ">Mizoram</option>
        <option value="NL">Nagaland</option>
        <option value="OR">Odisha</option>
        <option value="PY">Puducherry</option>
        <option value="PB">Punjab</option>
        <option value="RJ">Rajasthan</option>
        <option value="SK">Sikkim</option>
        <option value="TN">Tamil Nadu</option>
        <option value="TG">Telangana</option>
        <option value="TR">Tripura</option>
        <option value="UP">Uttar Pradesh</option>
        <option value="UT">Uttarakhand</option>
        <option value="WB">West Bengal</option>
        </select>
        </div>


        <div>
        <label htmlFor="">Mobile Number</label><br />
        <input placeholder='Enter your mobile number' className='input_box' type="text" />
        </div>
      </form>

      <div>
        <button className='btn btn-primary'>
          Continue
        </button>
      </div>
    </div>
  )
}

export default Sani_santhi