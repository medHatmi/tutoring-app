import React from 'react'
import { useContext } from 'react';
import { context_Profile } from '../../API/ProfileContext';
import { Card, Button, Row, Col } from "react-bootstrap";
import Header from '../Main/Header';
import Footer from '../Main/Footer';


function TutorProfile() {

    const{profile}=useContext(context_Profile)

    console.log(profile);

    return (

      <div>
      <Header />

        <Row
      xs={1}
      md={2}
      className="g-4 py-4"
      style={{ marginLeft: "3px", marginRight: "3px" }}
    >
      {/* {Array.from({ length: 2 }).map((_, idx) => ( */}
      <Col md={4}>
        <Card>
          <Card.Img
            variant="top"
            // src={`http://localhost:8800/images/profile/${profile.photo}`}
            src="/images/model.jpg"
            className="aboutImg"
          />
          <Card.Body className="d-flex justify-content-center">
            <button
              className="aboutContact"
            //   style={{
            //     backgroundColor: "#1dbf73",
            //     border: "#1dbf73",
            //   }}
            >
              Contact
            </button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={8}>
        <Card>
          {/* <Card.Img variant="top" src="/images/image1.jpeg" /> */}
          <Card.Body>
            <Card.Title className="about">About Me</Card.Title>
            <Card.Text className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card.Text>

            <Card.Text>
                <b className="aboutText">Name: </b> John Doe
            </Card.Text>
            <Card.Text>
                <b className="aboutText">Professure de: </b> Primaire
            </Card.Text>
            <Card.Text>
                <b className="aboutText">Level: </b> Mathematique
            </Card.Text>
            <Card.Text>
                <b className="aboutText">Experience: </b> 10 Years
            </Card.Text>
            <Card.Text>
                <b className="aboutText">hour rate: </b> 10 $
            </Card.Text>
            <Card.Text>
                <b className="aboutText">Ville: </b> Casablanca
            </Card.Text>
            <Card.Text>
                <b className="aboutText">Email: </b> john@exmaple.com
            </Card.Text>
            <Card.Text>
                <b className="aboutText">Phone: </b> +212 1234567890
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      {/* ))} */}
    </Row>
        <Footer />
    </div>


        // <div>
        //     profile page

        //     <h2> {profile.firstName} {profile.lastName} </h2>
        //     <p> {profile.city} </p>
        //     <p> {profile.description} </p>
        //     <p> {profile.experience} </p>
        //     <p> {profile.profession} </p>
        //     <p> {profile.phone} </p>
        //     <img src={`http://localhost:8800/images/profile/${profile.photo}`} width='20%' alt='nothing' />
        //     <br/>
        //     <br/>

        //     <button>chat with</button>

        // </div>
    )
}

export default TutorProfile
