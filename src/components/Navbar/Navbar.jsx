import React from 'react'
import './Navbar.css'
// import { useNavigate } from "react-router-dom"

const Navbar = () => {
  // const navigate = useNavigate();
  return (
    <div className='Navbar'>
      <div className='Home'
      onClick={()=>{
        // navigate("./")
      }}>
      <h5>Home</h5>
      </div>
      
      <div>
      <h5>About Temple</h5>
      </div>

      <div>
      <h5>Online Services</h5>
      </div>

      <div>
      <h5>News & Updates</h5>
      </div>
      
      <div>
      <h5>Gallery</h5>
      </div>

      <div>
      <h5>Support</h5>
      </div>
    </div>
  )
}

export default Navbar