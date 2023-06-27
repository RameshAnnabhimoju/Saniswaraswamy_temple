import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const initialLoginValues = {
    username: "",
    password: "",
  };
  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const [errors, setErrors] = useState("");
  const loginModalToggle = () => setShow(!show);
  function loginHandler() {
    setShow(false);
    navigate("/dashboard");
  }
  function changeHandler(e) {
    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
  }
  return (
    <div className="Navbar prevent-select">
      <div
        className="nav-item"
        onClick={() => {
          navigate("/");
        }}
      >
        <h6>Home</h6>
      </div>

      <div
        onClick={() => {
          navigate("/About");
        }}
        className="nav-item"
      >
        <h6>About Temple</h6>
      </div>
      <div
        onClick={() => {
          navigate("/Sevas");
        }}
        className="nav-item"
      >
        <h6>Sevas & Darshanam</h6>
      </div>
      <div
        onClick={() => {
          navigate("/Donations");
        }}
        className="nav-item"
      >
        <h6>Donations</h6>
      </div>

      <div
        onClick={() => {
          navigate("/OnlineServices");
        }}
        className="nav-item"
      >
        <h6>Online Services</h6>
      </div>

      <div
        onClick={() => {
          navigate("/News");
        }}
        className="nav-item"
      >
        <h6>News & Updates</h6>
      </div>

      <div className="nav-item">
        <h6>Gallery</h6>
      </div>

      <div className="nav-item">
        <h6>Support</h6>
      </div>
      <div className="nav-item nav-signup" onClick={loginModalToggle}>
        <h6>Signin</h6>
      </div>
      <div className="login-modal">
        <Modal
          show={show}
          onHide={loginModalToggle}
          // size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="login-header">Administration Login</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {errors !== "" && <div className="login-errors">Error</div>}
            <div className="login-feilds">
              <label htmlFor="login-input">Username</label>
              {/* <br /> */}
              <input
                className="login-inputField"
                id="login-input"
                placeholder="Enter Username"
                value={loginValues.username}
                onChange={changeHandler}
                name="username"
              />
              <br />
              <label htmlFor="login-input">Password</label>
              {/* <br /> */}
              <input
                className="login-inputField"
                id="login-password"
                placeholder="Enter Password"
                type="password"
                value={loginValues.password}
                onChange={changeHandler}
                name="password"
              />
            </div>{" "}
            <button className="card-button" onClick={loginHandler}>
              Login
            </button>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
