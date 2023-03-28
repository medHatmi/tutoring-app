import React, { useContext, useState } from 'react'
import { Card, Row, Col, Form } from "react-bootstrap";
import { context_Profile } from '../../API/ProfileContext';
import Footer from '../Main/Footer';
import Header from '../Main/Header';


function Profile(props) {

    const{profile}=useContext(context_Profile)

    console.log(profile);



    const{updateProfile}=useContext(context_Profile)

    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [city,setCity]=useState('')
    const [phone,setPhone]=useState('')
    const [isTutor,setIsTutor]=useState('')
    const [experience,setExperience]=useState('')
    const [profession,setProfession]=useState('')
    const [description,setDescription]=useState('')
    const [photo,setPhoto]=useState('')
    


    const id = props.match.params.id;
    // console.log(id);

    const sendProfile = (e) => {
        e.preventDefault()

        // console.log(id,firstName,lastName,city,phone,experience,profession,description,photo);
    

        updateProfile(id,firstName,lastName,city,phone,isTutor,experience,profession,description,photo)
        
    }



    return (
      <div>

<Header/>   


        <Row
      xs={1}
      md={2}
      className="g-4 py-4 profileBox"
      style={{ fontFamily: "Arial" }}
    >
      <Col md={3}>
        <Card
          style={{ height: "60vh", border: "0", borderRadius: "6px" }}
          className="card-border"
        >
          <Card.Title
            className="pt-5"
            style={{ textAlign: "center", fontWeight: "700", fontSize: "27px" }}
          >
            John Doe
          </Card.Title>
          <Card.Subtitle
            className="pt-2 pb-5"
            style={{ textAlign: "center", fontWeight: "600" }}
          >
            @john
          </Card.Subtitle>

          <Card.Img
            variant="top"
            src="/images/model.jpg"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",

              marginLeft: "auto",
              marginRight: "auto",
            }}
          />

          <Card.Body style={{ textAlign: "center" }}>
            {/* <button className="uploadProfile" style={{ borderRadius: "3px" }}>
              Upload New Photo
            </button> */}

            <Card.Text className="mt-3" style={{ fontFamily: "Calibri" }}>
              Member Since: <b>29 September 2019</b>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={9}>
        <Card
          style={{
            borderRadius: "0",
          }}
        >
          <Card.Body style={{ padding: "0", margin: "0" }}>
            <Card.Header
              style={{
                fontFamily: "Calibri",
                height: "15vh",

                borderBottom: "3px solid rgba(245,245,245,1)",
              }}
            >
              <h1
                style={{
                  fontWeight: "700",
                  paddingLeft: "5.8rem",
                  paddingTop: "20px",
                }}
                className="profile"
              >
                Edit Profile
              </h1>
            </Card.Header>

            <Form
            //   onSubmit={submitHandler}
              style={{ padding: "4rem 3rem 4rem 7rem", fontFamily: "Calibri" }}
            >
              <Row>
                <Col md={6}>
                  <Form.Group controlId="name" className="mr-5">
                    <Form.Label style={{ color: "grey" }}>firstName</Form.Label>
                    <Form.Control
                      name='firstName' 
                      type="text" 
                      placeholder='enter first name'
                      defaultValue={profile.firstName} 
                      onChange={(e) => setFirstName(e.target.value)} 
                      style={{ height: "3rem", fontWeight: "700" }}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="name" className="mt-4 mr-5">
                    <Form.Label style={{ color: "grey" }}>lastName</Form.Label>
                    <Form.Control
                      name='lastName' 
                      type="text" 
                      defaultValue={profile.lastName} 
                      placeholder='enter last name'
                      onChange={(e) => setLastName(e.target.value)}
                      style={{ height: "3rem", fontWeight: "700" }}
                    ></Form.Control>
                  </Form.Group>


                  <Form.Group controlId="city" className="mt-4 mr-5">
                    <Form.Label style={{ color: "grey" }}>city</Form.Label>
                    <Form.Control
                      name='city' 
                      type="text" 
                      defaultValue={profile?.city} 
                      placeholder='enter ur city' 
                      onChange={(e) => setCity(e.target.value)}
                      style={{ height: "3rem", fontWeight: "700" }}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="profession" className="mt-4 mr-5">
                    <Form.Label style={{ color: "grey" }}>
                      Profession
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name='profession' 
                      defaultValue={profile?.profession}
                      onChange={(e) => setProfession(e.target.value)}
                      style={{ height: "3rem", fontWeight: "700" }}
                    >
                      <option value="">Select...</option>
                      <option value="maths">Professor</option>
                      <option value="physics">Student</option>
                    </Form.Control>
                  </Form.Group>

               
                  <Form.Group controlId="description" className="mt-4 mr-5">
                    <Form.Label style={{ color: "grey" }}>description</Form.Label>
                    <Form.Control
                      
                      placeholder="enter description"
                      name='description'
                      defaultValue={profile?.description}
                      onChange={(e) => setDescription(e.target.value)}
                        rows={6}
                      as="textarea"
                      style={{  fontWeight: "700" }}
                    ></Form.Control>
                  </Form.Group>


                  
                </Col>
                <Col md={6}>
                  

                  <Form.Group controlId="phone" className=" mr-5">
                    <Form.Label style={{ color: "grey" }}>phone</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Type your email"
                      name='phone'
                      defaultValue={profile?.phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{ height: "3rem", fontWeight: "700" }}
                    ></Form.Control>
                  </Form.Group>

                
                  

                  <Form.Group controlId="isTutor" className="mt-4 mr-5">
                    <Form.Label style={{ color: "grey" }}>level</Form.Label>
                    <Form.Control
                      as="select"
            
                      onChange={(e) => setIsTutor(e.target.value)}
                      defaultValue={profile?.isTutor}
                      style={{ height: "3rem", fontWeight: "700" }}
                    >
                      <option value="">Select...</option>
                      <option value="maths">Male</option>
                      <option value="physics">Female</option>
                      <option value="physics">Other</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="image" className=" mt-4 mr-5">
                    <Form.Label style={{ color: "grey" }}>Image</Form.Label>

                    <Form.Control
                      type="file"
                      label="Choose File"
                      custom="true"
                      onChange={(e) => setPhoto(e.target.files[0])}
                       name='photo'
                      style={{
                        height: "3rem",
                        fontWeight: "700",
                        lineHeight: "2.1",
                      }}
                    />
                  </Form.Group>

                  

                  <Form.Group controlId="experience" className="mt-4 mr-5">
                    <Form.Label style={{ color: "grey" }}>experience</Form.Label>
                    <Form.Control
                      as="select"
                      name='experience' 
                      defaultValue={profile?.experience}
                      onChange={(e) => setExperience(e.target.value)}
                      style={{ height: "3rem", fontWeight: "700" }}
                    >
                      <option value="">Select...</option>
                      <option value="maths">Male</option>
                      <option value="physics">Female</option>
                      <option value="physics">Other</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="name" className=" mt-4 mr-5">
                    <Form.Label style={{ color: "grey" }}>hourly rate</Form.Label>
                    <Form.Control
                      name='hourPrice' 
                      type="text" 
                      placeholder='enter ur hourly rate'
                      defaultValue="10$" 
                      // onChange={(e) => setFirstName(e.target.value)} 
                      style={{ height: "3rem", fontWeight: "700" }}
                    ></Form.Control>
                  </Form.Group>
                  
                </Col>
              </Row>

              <button
                className="uploadProfile mt-5"
                style={{ borderRadius: "3px" }}
                type="submit"
              >
                Update info
              </button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Footer />
    </div>

        // <Form className="w-50 p-3 mx-auto">
        //     <Form.Group className="mb-3" controlId="formBasicEmail" >
        //         <Form.Label>first Name</Form.Label>
        //         <Form.Control name='firstName' type="text" defaultValue={profile.firstName} onChange={(e) => setFirstName(e.target.value)} />
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="formBasicPassword">
        //         <Form.Label>last Name</Form.Label>
        //         <Form.Control  name='lastName' type="text" defaultValue={profile.lastName} placeholder='fefe' onChange={(e) => setLastName(e.target.value)} />
        //     </Form.Group>

        

        //     <Form.Group className="mb-3" controlId="formBasicPassword">
        //         <Form.Label>city</Form.Label>
        //         <Form.Control  name='city' type="text" defaultValue={profile?.city} placeholder='enter ur city' onChange={(e) => setCity(e.target.value)} />
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="formBasicPassword">
        //         <Form.Label>Phone number</Form.Label>
        //         <Form.Control  name='phone' type="text" defaultValue={profile?.phone} placeholder='enter ur phone number' onChange={(e) => setPhone(e.target.value)} />
        //     </Form.Group>

        //     <Form.Label>are u a tutor</Form.Label>
        //     <Form.Select name='isTutor' onChange={(e) => setIsTutor(e.target.value)} className='mb-3'>
        //         <option>Default select</option>
        //         <option value='true'>yes</option>
        //         <option value='false'>No</option>
        //     </Form.Select>

        //     <Form.Label>experience</Form.Label>
        //     <Form.Select name='experience' onChange={(e) => setExperience(e.target.value)} className='mb-3'>
        //         <option>Default select</option>
        //         <option value='1à2'>1 à 2 ans</option>
        //         <option value='2à5'>2 à 5 ans</option>
        //         <option value='5à10'>5 à 10 ans</option>
        //         <option value='+10'>+10 ans</option>

        //     </Form.Select>

        //     <Form.Label>Profession</Form.Label>
        //     <Form.Select name='profession' onChange={(e) => setProfession(e.target.value)} className='mb-3'>
        //         <option>select</option>
        //         <option value='math'>MATH</option>
        //         <option value='français'>FRANÇAIS</option>
        //         <option value='svt'>SVT</option>
        //     </Form.Select>

        //     <Form.Label>description</Form.Label>
        //     <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="Description">

        //         <Form.Control
        //         name='description'
        //         onChange={(e) => setDescription(e.target.value)}
        //         as="textarea"
        //         defaultValue={profile?.description}
        //         style={{ height: '100px' }}
        //         />
        //     </FloatingLabel>

        //     <Form.Group controlId="formFile" className="mb-3">
        //         <Form.Label>Default file input example</Form.Label>
        //         <Form.Control onChange={(e) => setPhoto(e.target.files[0])} name='photo' type="file" />
        //     </Form.Group>
        
        //     <Button variant="primary" type="submit" onClick={sendProfile} >
        //         Submit
        //     </Button>
        // </Form>
    )
}

export default Profile
