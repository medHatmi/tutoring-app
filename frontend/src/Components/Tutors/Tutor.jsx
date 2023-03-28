import React from 'react'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { context_Auth } from '../../API/AuthContext'
import { context_Conv } from '../../API/ConversationContext'
import { context_Profile } from '../../API/ProfileContext'
import { Card, Button, Row, Col } from "react-bootstrap";


function Tutor({tutors}) {
  // function Tutor({profile,i}) {
    // console.log(i);
    let history = useHistory()
    const{user}=useContext(context_Auth)
    const{findOneProfile}=useContext(context_Profile)
    const{newConv}=useContext(context_Conv)


    const tutorPage = (e,tutor) =>{
        e.preventDefault();
        findOneProfile(tutor.id)
        history.push('/tutor/'+tutor.id)
        // console.log(profile.id);
    }

    const createConv = (e,tutor) =>{
        e.preventDefault();
        newConv(user._id,tutor.id)   
        history.push('/Messenger')

    }

    return (

      <>


      {tutors.map(tutor => (

        <Col md={4} className="col-align">
              <Card style={{ width: "18rem" }} className="mb-5 card-align">
                <Card.Img variant="top" src="/images/model.jpg" />
                <Card.Body>
                  <Card.Title className="mb-2">{tutor.firstName} {tutor.lastName}</Card.Title>
                  <Card.Subtitle className="mb-2">London</Card.Subtitle>
                  <Card.Text>Artist</Card.Text>
                  <Card.Text className="text">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </Card.Text>

                  <Button variant="success" onClick={(e)=>tutorPage(e,tutor)}>View Profile</Button>
                  <Button variant="success ml-3" onClick={(e)=>createConv(e,tutor)}>Contact</Button>
                </Card.Body>
              </Card>
            </Col>
             ))}
      </>

        // <div>
        //     <h3 key={i}> {profile.firstName} </h3>
        //     <button onClick={tutorPage} >profile</button>
        //     <button onClick={createConv}>chat</button>
        // </div>
    )
}

export default Tutor
