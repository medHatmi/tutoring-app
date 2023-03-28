
import React, { useState } from "react";
import { useContext } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  ListGroup,
  Card,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { context_Auth } from "../../API/AuthContext";

function Header() {
  const [userInfo, setUserInfo] = useState(false);
  const{user}=useContext(context_Auth)


  return (
    <header>
      <Navbar
        // bg="dark"
        // variant="dark"
        expand="lg"
        style={{ background: "white", borderBottom: "1px solid #e4e5e7" }}
      >
        {/* <Container> */}
        <Navbar.Brand style={{ marginLeft: "4rem" }} className="mobilee-logo">
          <Link to="/">
            <img src="\logo.png" alt="logo" style={{ width: "100px" }}  />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="standard-navbar-nav">
          <Nav className="ml-auto" style={{ marginRight: "3rem" }}>
            {user ? (
              <>
                <Nav.Link className="messages d-none d-lg-block">
                  <Link to='/Messenger' style={{ textDecoration: 'none' }} >
                    <div  style={{ color: "rgba(0, 0, 0, 0.55)" }}>  Messages</div>
                  </Link>
                </Nav.Link>

                <div className="d-block d-lg-none mt-4">
                  <img
                    className="userImg showImage"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    alt=""
                  />
                  <div className="userName userName-align">{user.firstName} {user.lastName}</div>
                  <Nav.Link className="messages">
                    <div style={{ color: "rgba(0, 0, 0, 0.55)" }}>Profile</div>{" "}
                  </Nav.Link>
        
                  <Link to='/Messenger' style={{ textDecoration: 'none' }} >
                    <div style={{ color: "rgba(0, 0, 0, 0.55)" }}>Messages</div>
                  </Link>
                  <Nav.Link
                    className="messages"
                    onClick={() => setUserInfo(false)}
                  >
                    <div style={{ color: "rgba(0, 0, 0, 0.55)" }}>
                    <Link to='/login' onClick={()=>localStorage.clear()}>Logout</Link>
                    </div>
                  </Nav.Link>
                </div>
                <div className="userName userName-align d-none d-lg-block">
                {user.firstName} {user.lastName}
                </div>
                <NavDropdown
                  title={
                    <img
                      className="userImg showImage userImg-align"
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      alt=""
                    />
                  }
                  id="username"
                  className="d-none d-lg-block"
                >
                  <NavDropdown.Item /* className="d-block d-lg-none" */>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setUserInfo(false)}>
                  <Link to='/login' style={{textDecoration:"none", color:"black"}} onClick={()=>localStorage.clear()}>Logout</Link>

                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              // <div className="d-flex flex-row">
              <>
                <Nav.Link
                  className="messages login-align hover-color"
                  onClick={() => {
                    setUserInfo(true);
                  }}
                >
                  Login
                </Nav.Link>
                <Nav.Link>
                  <button
                    className="register register-align mr-3"
                    role="button"
                  >
                    Register
                  </button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </header>
  );
}

export default Header;
