import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Modal, Offcanvas } from "react-bootstrap";
import { login, logout } from "../../Services/authServices";
import Spinner from "react-bootstrap/Spinner";
import menu from "../../Assets/Images/hamburger.png";

const Navbar = () => {
  const loggedin = !!localStorage?.getItem("mandapalli_token");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loading
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  });
  const initialLoginValues = {
    username: "",
    password: "",
  };
  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const [errors, setErrors] = useState("");
  const loginModalToggle = () => setShow(!show);
  async function loginHandler() {
    if (
      loginValues.username.length !== 0 &&
      loginValues.password.length !== 0
    ) {
      try {
        setLoading(true);
        await login({ ...loginValues })
          .then((response) => {
            console.log(response);
            localStorage.setItem("mandapalli_token", response.data.data.token);

            if (response.data.status === "success") {
              setErrors("");
              setShow(false);
              navigate("/Dashboard");
            }
          })
          .catch((error) => {
            console.log(error.response.data);
            setErrors(error.response.data.error);
          })
          .finally(() => {
            setLoading(false);
          });
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  }
  function changeHandler(e) {
    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
  }
  return (
    <div className="outerContainer">
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
        {!loggedin ? (
          <div className="nav-item nav-signup" onClick={loginModalToggle}>
            <h6>Signin</h6>
          </div>
        ) : (
          <>
            <div
              className="nav-item nav-signup"
              onClick={() => {
                navigate("/Dashboard");
              }}
            >
              <h6>Dashboard</h6>
            </div>
            <div
              className="nav-item nav-signup"
              onClick={() => {
                navigate("/");
                logout();
              }}
            >
              <h6>Signout</h6>
            </div>
          </>
        )}
        <div className="login-modal">
          <Modal
            show={show}
            onHide={loginModalToggle}
            // size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            {loading && (
              <div className="payment-loading-container">
                <Spinner
                  animation="border"
                  variant="warning"
                  className="payment-loading"
                />
              </div>
            )}
            <Modal.Header closeButton>
              <Modal.Title>
                <div className="login-header">Administration Login</div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {errors !== "" && <div className="login-errors">{errors}</div>}
              <div className="login-feilds">
                <label htmlFor="login-input">Username</label>
                <br />
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
                <br />
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
              <button
                className="card-button"
                onClick={loginHandler}
                disabled={
                  loginValues.username.length === 0 ||
                  loginValues.password.length === 0
                }
              >
                Login
              </button>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </div>
      </div>
      <img
        className="mobileMenu"
        src={menu}
        alt="mobile menu"
        onClick={() => {
          setMenuShow(!menuShow);
        }}
      />
      <Offcanvas
        show={menuShow}
        placement="end"
        onHide={() => {
          setMenuShow(!menuShow);
        }}
      >
        <Offcanvas.Header className="menu-header" closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="menu-body">
          <div
            className="nav-menu-item"
            onClick={() => {
              setMenuShow(!menuShow);
              navigate("/");
            }}
          >
            <h6>Home</h6>
          </div>

          <div
            onClick={() => {
              setMenuShow(!menuShow);
              navigate("/About");
            }}
            className="nav-menu-item"
          >
            <h6>About Temple</h6>
          </div>
          <div
            onClick={() => {
              setMenuShow(!menuShow);
              navigate("/Sevas");
            }}
            className="nav-menu-item"
          >
            <h6>Sevas & Darshanam</h6>
          </div>
          <div
            onClick={() => {
              setMenuShow(!menuShow);
              navigate("/Donations");
            }}
            className="nav-menu-item"
          >
            <h6>Donations</h6>
          </div>

          <div
            onClick={() => {
              setMenuShow(!menuShow);
              navigate("/OnlineServices");
            }}
            className="nav-menu-item"
          >
            <h6>Online Services</h6>
          </div>

          <div
            onClick={() => {
              setMenuShow(!menuShow);
              navigate("/News");
            }}
            className="nav-menu-item"
          >
            <h6>News & Updates</h6>
          </div>

          <div className="nav-menu-item">
            <h6>Gallery</h6>
          </div>

          <div className="nav-menu-item">
            <h6>Support</h6>
          </div>
          {!loggedin ? (
            <div
              className="nav-menu-item nav-signup"
              onClick={() => {
                setMenuShow(!menuShow);
                loginModalToggle();
              }}
            >
              <h6>Signin</h6>
            </div>
          ) : (
            <>
              <div
                className="nav-menu-item nav-signup"
                onClick={() => {
                  setMenuShow(!menuShow);
                  navigate("/Dashboard");
                }}
              >
                <h6>Dashboard</h6>
              </div>
              <div
                className="nav-menu-item nav-signup"
                onClick={() => {
                  setMenuShow(!menuShow);
                  navigate("/");
                  logout();
                }}
              >
                <h6>Signout</h6>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Navbar;
