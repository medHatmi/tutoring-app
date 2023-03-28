import React, { useContext, useState } from 'react'
import { context_Auth } from '../../../API/AuthContext'
// import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "./FormContainer";
import "./Login.css";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";
// import { Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom'
import FlashMessage from 'react-flash-message'
import {Stack, Alert} from '@mui/material'


function Signin() {

    // let history = useHistory()


    const [form,setform]=useState({})

    const{login}=useContext(context_Auth)


    function handleChange(e) {
    
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    function authLog(e){
        e.preventDefault();
        login(form);
        // history.push('/')

      }
      const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(green[600]),
        backgroundColor: green[600],
        "&:hover": {
          backgroundColor: green[700]
        }
      }));

    return (
      <div
      style={{
        backgroundColor: "#dfe6e0",
        width: "100vw",
        height: "100vh"
      }}
      className="containerLogin"
    >
        {/* <FlashMessage duration={5000} persistOnHover={true} >
          <Stack spacing={2}  width="250px" style={{position:"absolute"}}>
            <Alert severity='success' variant="filled">u successfully logged in</Alert>
          </Stack>
        </FlashMessage> */}
      <div className="loginNormal">
        <div className="boxes">
          <div
            style={{
              backgroundColor: "white",
              width: "50vw",
              height: "90vh"
            }}
            className="leftBox"
          >
            <div className="leftBoxText">
              <img src="/logo.png" style={{ width: "50%" , marginTop:"100px", marginBottom:"23px"}} alt="" />
              {/* <h1 className="logoImage" style={{ color: "#519f68" }}> */}
                {/* Logo
              </h1> */}
              <h1 style={{ marginBottom: "10px" }}>Sign In</h1>
              <h6 style={{ marginBottom: "15px", color: "grey" }}>
                Welcome back! Please enter your details.
              </h6>

              <TextField
                id="outlined-password-input"
                label="email"
                type="email"
                autoComplete="current-password"
                sx={{
                  width: "30ch",
                  mt: 1,
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { borderColor: "#519f68" }
                  },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "#519f68"
                    }
                  },
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": { borderColor: "#519f68" }
                  },
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: "#519f68"
                  }
                }}
                size="small"
                name="email"
                onChange={handleChange}
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                sx={{
                  width: "30ch",
                  mt: 2,
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { borderColor: "#519f68" }
                  },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "#519f68"
                    }
                  },
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": { borderColor: "#519f68" }
                  },
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: "#519f68"
                  }
                }}
                size="small"
                name="password"
                onChange={handleChange}
              />

              <h5
                style={{
                  marginTop: "13px",
                  marginBottom: "4px",
                  color: "#519f68"
                }}
              >
                Forgot password
              </h5>

              <ColorButton
                sx={{ width: "38ch", mt: 1 }}
                variant="contained"
                onClick={authLog}
              >
                Sign In
              </ColorButton>
              <h6
                style={{
                  marginTop: "20px",
                  color: "grey",
                  textAlign: "center"
                }}
              >
                You already have an account?
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <span style={{ color: "#519f68" }}> Sign Up</span>
                </Link>
              </h6>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#519f68",
              width: "50vw",
              height: "90vh",
              position:'relative'
            }}
            className="rightBox"
          >
            <img src="/images/quote.png" alt="" width="100%" style={{position:'absolute', top:'0', bottom:'0', margin: 'auto'}} />
          </div>
        </div>
      </div>

      {/* responsive */}
      <div className="loginResponsive">
        <div className="boxes">
          <div className="leftBox">
            <div className="leftBoxText">
            <img src="/logo.png" style={{ width: "30%" , marginTop:"150px", marginBottom:"23px"}} alt="" />

              <h1 style={{ marginBottom: "10px" }}>Sign In</h1>
              <h6 style={{ marginBottom: "15px", color: "grey" }}>
                Welcome back! Please enter your details.
              </h6>

              <TextField
                id="outlined-password-input"
                label="email"
                type="email"
                autoComplete="current-password"
                sx={{
                  width: "30ch",
                  mt: 1,
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { borderColor: "#519f68" }
                  },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "#519f68"
                    }
                  },
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": { borderColor: "#519f68" }
                  },
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: "#519f68"
                  }
                }}
                size="small"
                name="email"
                onChange={handleChange}
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                sx={{
                  width: "30ch",
                  mt: 2,
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { borderColor: "#519f68" }
                  },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "#519f68"
                    }
                  },
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": { borderColor: "#519f68" }
                  },
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: "#519f68"
                  }
                }}
                size="small"
                name="password"
                onChange={handleChange}
              />

              <h5
                style={{
                  marginTop: "13px",
                  marginBottom: "4px",
                  color: "#519f68"
                }}
              >
                Forgot password
              </h5>

              <ColorButton
                sx={{ width: "38ch", mt: 1 }}
                variant="contained"
                onClick={authLog}
              >
                Sign In
              </ColorButton>
              <h6
                style={{
                  marginTop: "20px",
                  color: "grey",
                  textAlign: "center"
                }}
              >
                You already have an account?
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <span style={{ color: "#519f68" }}> Sign Up</span>
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

      //   <Row xs={1} md={2} className="register-page-box g-5 py-5">
      //   <Col md={12}>
      //     <Card
      //       style={{
      //         height: "79vh",
      //         background: "#F8F8F8",
      //         borderRadius: "20px",
      //       }}
      //       className="border-responsive register-page-box-shadow"
      //     >
      //       <Card.Body style={{ padding: "0" }}>
      //         <div className="register-page">
      //           <div className="register-page-left">
      //             <div
      //               className="register-page-left-box"
      //               style={{ fontFamily: "Calibri" }}
      //             >
      //               <FormContainer>
      //                 <img
      //                   src="\logo.png"
      //                   alt="logo"
      //                   className="logoImg"
      //                   style={{ marginTop: "6rem" }}
      //                 />
  
      //                 <h6 style={{ textAlign: "center", marginTop: "1.5rem" }}>
      //                   Sign In to Dashboard
      //                 </h6>
      //                 {/* Calibri Candara Comic Sans MS*/}
      //                 <Form
      //                   // onSubmit={submitHandler}
      //                   style={{ marginTop: "1rem" }}
      //                 >
      //                   <Form.Group controlId="email" className="mt-2">
      //                     <Form.Label style={{ color: "grey" }}>Email</Form.Label>
      //                     <Form.Control
      //                       type="email"
      //                       placeholder="Type your email"
      //                       // value={email}
      //                       onChange={handleChange}
      //                       name='email'
      //                       className="input-border"
      //                     ></Form.Control>
      //                   </Form.Group>
  
      //                   <Form.Group controlId="password" className="mt-3">
      //                     <Form.Label style={{ color: "grey" }}>
      //                       Password
      //                     </Form.Label>
      //                     <Form.Control
      //                       type="password"
      //                       placeholder="Type your password"
      //                       // value={password}
      //                       onChange={handleChange}
      //                       name="password"
      //                       className="input-border"
      //                     ></Form.Control>
      //                   </Form.Group>
      //                   <div style={{ marginTop: '1rem'}}>
      //                       <Link
      //                       to="reset-password"
      //                       style={{ textDecoration: "none", color:"#4e9f65" }}
      //                       >
      //                       Reset Password
      //                       </Link>
      //                   </div>
  
      //                   {/* <Form.Group controlId="rememberMe" className="mt-4">
      //                     <Form.Check
      //                       type="checkbox"
      //                       label="Remember me"
      //                       // checked={rememberMe}
      //                       // onChange={(e) => {
      //                       //   setRememberMe(e.target.checked);
      //                       // }}
      //                     ></Form.Check>
      //                   </Form.Group> */}
  
      //                   <Button
      //                     type="submit"
      //                     variant="primary"
      //                     className="btn btn-block mt-3"
      //                     style={{
      //                       backgroundColor: "#4e9f65",
      //                       border: "#4e9f65",
      //                       boxShadow: "rgba(0, 0, 0, 0.40) 0px 5px 20px",
      //                     }}
      //                     onClick={AuthLog}
      //                   >
      //                     Login
      //                   </Button>
      //                 </Form>
  
      //                 <Row style={{ textAlign: "center", marginTop: "3rem" }}>
      //                   <Col>
      //                     New to App?{" "}
      //                     <Link to="/register" style={{ textDecoration: "none", color: "#4e9f65" }}>
      //                       Register
      //                     </Link>
      //                   </Col>
      //                 </Row>
      //               </FormContainer>
      //             </div>
      //           </div>
  
      //           <div className="register-page-right">
      //             <div
      //               className="register-page-right-box"
      //               style={{ color: "white" }}
      //             >
      //               <div style={{ display: "flex" }}>
      //                 <div style={{ flex: "2" }}></div>
      //                 <div style={{ flex: "5" }}>
      //                   <img
      //                     src="/images/quotation.png"
      //                     style={{
      //                       width: "45px",
      //                       height: "45px",
      //                       borderRadius: "50%",
      //                       objectFit: "cover",
      //                     }}
      //                   />
      //                 </div>
      //                 <div style={{ flex: "2" }}></div>
      //               </div>
      //               <div style={{ display: "flex" }}>
      //                 <div style={{ flex: "2" }}></div>
      //                 <div style={{ flex: "5" }}>
      //                   <h1 style={{ fontSize: "5rem" }}>Make a Dream.</h1>
      //                 </div>
      //                 <div style={{ flex: "2" }}></div>
      //               </div>
      //               <div style={{ display: "flex", marginTop: "2rem" }}>
      //                 <div style={{ flex: "2" }}></div>
      //                 <div style={{ flex: "5" }}>
      //                   <p style={{ marginLeft: "6rem" }}>
      //                     "Lorem ipsum dolor sit amet, consectetur adipiscing
      //                     elit, sed do eiusmod tempor incididunt ut labore et
      //                     dolore magna."
      //                   </p>
      //                 </div>
      //                 <div style={{ flex: "2" }}></div>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </Card.Body>
      //     </Card>
      //   </Col>
      // </Row>


        // <Form className="w-50 p-3 mx-auto">
        //     <Form.Group className="mb-3" controlId="formBasicEmail" >
        //         <Form.Label>Email address</Form.Label>
        //         <Form.Control name='email' type="email" placeholder="Enter email" onChange={handleChange} />
        //         <Form.Text className="text-muted">
        //         We'll never share your email with anyone else.
        //         </Form.Text>
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="formBasicPassword">
        //         <Form.Label>Password</Form.Label>
        //         <Form.Control name='password' type="password" placeholder="Password" onChange={handleChange} />
        //     </Form.Group>
        
        //     <Button variant="primary" type="submit" onClick={AuthLog} >
        //         Submit
        //     </Button>
        // </Form>
    )
}

export default Signin
