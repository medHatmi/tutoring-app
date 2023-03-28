import React, { useContext, useState } from 'react'
import { context_Auth } from '../../../API/AuthContext'
import { useHistory } from 'react-router-dom'
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";
import { Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./Register.css";



function Signup() {

    let history = useHistory()

    const{register}=useContext(context_Auth)


  const [form, setform] = useState({})
  console.log(form);

    const handleChange = (e) => {

        setform({
          ...form,
          [e.target.name]:e.target.value
      })

      console.log(form);
    }

    const AuthRegister = (e) =>{
      e.preventDefault();
      if (form.password === form.confirmPassword) {
        register(form);
      }
      else{
        alert("passwords doesn't match")
      }
      history.push('/login')
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
      className="registerContainer"
    >
      <div className="registerNormal">
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
              {/* <img src="logo192.png" className="logoImg" alt="" /> */}
              <img src="/logo.png" style={{ width: "50%" , marginTop:"10px", marginBottom:"23px"}} alt="" />

              <h1 style={{ marginBottom: "10px" }}>Register</h1>
              <h6 style={{ marginBottom: "20px", color: "grey" }}>
                Welcome back! Please enter your details.
              </h6>

              <TextField
                id="outlined-password-input"
                label="first name"
                autoComplete="current-password"
                sx={{
                  width: "30ch",
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
                name="firstName"
                onChange={handleChange}
              />
            
              <TextField
                id="outlined-password-input"
                label="last name"
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
                name="lastName"
                onChange={handleChange}
              />
                <FormControl sx={
                  {width: "30ch", 
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
                    color: "#519f68",
                  }
                  }}>
                <InputLabel id="demo-simple-select-label">type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Type"
                    name='type'
                    onChange={handleChange}
                  >
                    <MenuItem value={true}>tutor</MenuItem>
                    <MenuItem value={false}>Student</MenuItem>
                  </Select>
              </FormControl>

              <TextField
                id="outlined-password-input"
                label="email"
                type="email"
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
              <TextField
                id="outlined-password-input"
                label="confirm password"
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
                name="confirmPassword"
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
                onClick={AuthRegister}
              >
                Register
              </ColorButton>
              <h6
                style={{
                  marginTop: "20px",
                  color: "grey",
                  textAlign: "center"
                }}
              >
                You already have an account?
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <span style={{ color: "#519f68" }}> Sign In</span>
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
      <div className="registerResponsive">
        <div className="boxes">
          <div className="leftBox">
            <div className="leftBoxText">
            <img src="/logo.png" style={{ width: "30%" , marginTop:"50px", marginBottom:"23px"}} alt="" />

              <h1 style={{ marginBottom: "10px" }}>Register</h1>
              <h6 style={{ marginBottom: "20px", color: "grey" }}>
                Welcome back! Please enter your details.
              </h6>

              <TextField
                id="outlined-password-input"
                label="first name"
                autoComplete="current-password"
                sx={{
                  width: "30ch",
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
                name="firstName"
                onChange={handleChange}
              />
              <TextField
                id="outlined-password-input"
                label="last name"
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
                name="lastName"
                onChange={handleChange}
              />
                <FormControl sx={
                  {width: "30ch", 
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
                    color: "#519f68",
                  }
                  }}>
                <InputLabel id="demo-simple-select-label">type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Type"
                    name='type'
                    onChange={handleChange}
                  >
                    <MenuItem value={true}>tutor</MenuItem>
                    <MenuItem value={false}>Student</MenuItem>
                  </Select>
              </FormControl>
              <TextField
                id="outlined-password-input"
                label="email"
                type="email"
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
              <TextField
                id="outlined-password-input"
                label="confirm password"
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
                name="confirmPassword"
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
                onClick={AuthRegister}
              >
                Register
              </ColorButton>
              <h6
                style={{
                  marginTop: "20px",
                  color: "grey",
                  textAlign: "center"
                }}
              >
                You already have an account?
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <span style={{ color: "#519f68" }}> Sign In</span>
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>


    )
}

export default Signup
