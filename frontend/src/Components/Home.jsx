import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { context_Auth } from '../API/AuthContext'
import { useHistory } from 'react-router-dom'
import { context_Profile } from '../API/ProfileContext'
import { useState } from 'react'
import Header from './Main/Header'
import Footer from './Main/Footer'
import { Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faChalkboardUser, faEye, faPhone , faAt, faTimeline} from '@fortawesome/free-solid-svg-icons'
import { faRocketchat} from '@fortawesome/free-brands-svg-icons'




function Home() {

    let history = useHistory()

    const{findOneProfile,findtutors}=useContext(context_Profile)

    const [teachers,setTeachers]=useState({})

    const{user}=useContext(context_Auth)

    function handleChange(e) {
    
        setTeachers({
            ...teachers,
            [e.target.name]:e.target.value
        })
    }

    // console.log(teachers);
 
    const Profilepage = (e) =>{
        e.preventDefault();
        findOneProfile(user._id)
        history.push('/profile/'+user._id)
    }

    const tutors = (e) =>{
        e.preventDefault();
        findtutors(teachers)
    }

    return (
        <div>
        <Header/>   

        <div className="banner">

            <div className="banner_left">
                <h3 >Trouvez des professeurs experts dans n'importe quel sujet que vous voulez</h3>
                <p style={{marginTop:'15px'}}>
                Notre plateforme est l’outil / réseau pédagogique idéal pour favoriser la cohésion entre étudiants recherchant à développer certaines compétences / congnitions et enseignants souhaitant partager leur savoir , grâce à notre plateforme l’étudiant pourra prendre rendez-vous avec l’enseignant qu’il souhaite!
                </p>
                <div style={{ marginTop : '25px' }}>
                <Link to="/tutors">
                    <Button variant="success" >trouvez votre professeur</Button>
                </Link>
                  <Button variant="outline-success" className="ml-2" >savoir plus</Button>
                </div>
            </div>

            <div className="banner_right">
                <img src="/images/try.jpg" alt="image" style={{ width: '100%', height: '100%', objectFit : 'cover' }} />
            </div>

        </div>

        <div className="carousel">
            <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4="
                alt="First slide"
                height={300}
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4="
                alt="Second slide"
                height={300}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4="
                alt="Third slide"
                height={300}
                />
            </Carousel.Item>
            </Carousel>
        </div>

        <div>
            <h3 style={{textAlign:'center' , marginTop:'30px'}} > Pourquoi MONPROF est la meilleure option pour vous </h3>
            <p style={{textAlign:'center' , margin:'30px 0px' , paddingLeft : '80px', paddingRight : '80px'}}>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas consequatur quae enim quisquam, quod cum facilis numquam nulla, suscipit vel ratione nostrum ipsam porro neque atque facere odio vero. Tempora? </p>


            <div style={{display: 'flex', flex: 'wrap' ,  justifyContent: 'space-around', flexWrap: 'wrap' , margin: '20px 170px'}}>
                <Card style={{ width: '18rem' , boxShadow: '5px 10px 18px #888888'}}>
                    <Card.Body>
                        <Card.Title style={{textAlign: 'center'}} >
                            <FontAwesomeIcon icon={faRocketchat} color="green" size="lg" />

                        </Card.Title>
                        <Card.Subtitle style={{textAlign: 'center'}} className="mb-2 ">online chat</Card.Subtitle>
                        <Card.Text className="text-muted" style={{textAlign: 'center'}} >
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' , boxShadow: '5px 10px 18px #888888'}}>
                    <Card.Body>
                        <Card.Title style={{textAlign: 'center'}} >
                            <FontAwesomeIcon icon={faTimeline} color="green" size="lg" />
                        </Card.Title>
                        <Card.Subtitle style={{textAlign: 'center'}} className="mb-2 ">time saver</Card.Subtitle>
                        <Card.Text style={{textAlign: 'center'}} >
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' , boxShadow: '5px 10px 18px #888888'}}>
                    <Card.Body>
                        <Card.Title style={{textAlign: 'center'}} >Card Title</Card.Title>
                        <Card.Subtitle style={{textAlign: 'center'}} className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text style={{textAlign: 'center'}} >
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-around', margin: '20px 170px'}}>
            <Card style={{ width: '18rem' , boxShadow: '5px 10px 18px #888888'}}>
                    <Card.Body>
                        <Card.Title style={{textAlign: 'center'}} >Card Title</Card.Title>
                        <Card.Subtitle style={{textAlign: 'center'}} className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text style={{textAlign: 'center'}} >
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' , boxShadow: '5px 10px 18px #888888'}}>
                    <Card.Body>
                        <Card.Title style={{textAlign: 'center'}} >Card Title</Card.Title>
                        <Card.Subtitle style={{textAlign: 'center'}} className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text style={{textAlign: 'center'}} >
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' , boxShadow: '5px 10px 18px #888888'}}>
                    <Card.Body>
                        <Card.Title style={{textAlign: 'center'}} >Card Title</Card.Title>
                        <Card.Subtitle style={{textAlign: 'center'}} className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text style={{textAlign: 'center'}} >
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>

        <div className="banner" style={{marginTop: '40px'}}>
            <div className="banner_right">
                <img src="/images/contact.jpg" alt="image" style={{ width: '100%', height: '100%', objectFit : 'cover'}} />
            </div>

            <div className="banner_left" style={{paddingTop:'220px'}} >
                <h2>Become one of our partners <br/> Contact us </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eaque voluptatibus facere cupiditate ullam maxime unde tenetur iure eius itaque praesentium cum, assumenda autem doloribus illum porro iusto, asperiores architecto.</p>
                <div style={{ marginTop : '30px' }}>
                <Link to="/tutors">
                    <Button variant="success" >contact us </Button>
                </Link>
                </div>
            </div>
        </div>

        <div style={{textAlign:'center', display: 'flex', justifyContent: 'space-around', padding:'40px', backgroundColor: 'white',borderTop: "1px dashed green"}} >
            <div>
                <FontAwesomeIcon icon={faGraduationCap} size="5x" color="green" style={{marginBottom: "10px", marginLeft: "12px"}} />
                <h1>+1000</h1>
                <p>student</p>
            </div>

            <div>

                <FontAwesomeIcon icon={faChalkboardUser} size="5x" color="green" style={{marginBottom: "10px", marginLeft: "12px"}}  />
                <h1>+1000</h1>
                <p>tutors</p>
            </div>

            <div>
            <FontAwesomeIcon icon={faEye} size="5x" color="green" style={{marginBottom: "10px", marginLeft: "12px"}}  />
                <h1>+1000</h1>
                <p>visitors</p>
            </div>
        </div>

        
        <div style={{backgroundColor:'white', paddingBottom:'40px' , borderTop: "1px dashed green"}} >
            <div style={{textAlign:'center'}} >
                <h1 style={{paddingTop:"40px"}}>Contact Us</h1>
                <p className="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel modi explicabo eveniet. Quod at quidem quaerat ipsam dolorum doloremque <br/> perspiciatis? Dignissimos laudantium corrupti consequatur obcaecati veritatis. <br/> Quidem ab hic dolorem.</p>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-around', padding: '30px 170px'}}>
            <Card style={{ width: '34rem' , boxShadow: '5px 10px 18px #888888'}}>
                    <Card.Body>
                        <Card.Title style={{textAlign: 'center', marginBottom: '30px'}}> 
                            <FontAwesomeIcon icon={faPhone} color="green" size="lg" />
                        </Card.Title>
                        <Card.Subtitle style={{textAlign: 'center'}} className="mb-2 text-muted">+212 695073875</Card.Subtitle>
                        <Card.Subtitle style={{textAlign: 'center'}} className="mb-2 text-muted">+212 695073875</Card.Subtitle>
                    </Card.Body>
                </Card>

                <Card style={{ width: '34rem' , boxShadow: '5px 10px 18px #888888'}}>
                    <Card.Body>
                        <Card.Title style={{textAlign: 'center', marginBottom: '30px'}} >
                            <FontAwesomeIcon icon={faAt} color="green" size="lg"/>
                        </Card.Title>
                        <Card.Subtitle style={{textAlign: 'center'}} className="mb-2 text-muted">MonProf-startup@gmail.com</Card.Subtitle>
                        <Card.Subtitle style={{textAlign: 'center'}} className="mb-2 text-muted">MonProf-startup@gmail.com</Card.Subtitle>
                    </Card.Body>
                </Card>

                {/* <Card style={{ width: '22rem' , boxShadow: '5px 10px 18px #888888'}}>
                    <Card.Body>
                        <Card.Title style={{textAlign: 'center', marginBottom: '30px'}} >Card Title</Card.Title>
                        <Card.Subtitle style={{textAlign: 'center'}} className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Subtitle style={{textAlign: 'center'}} className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    </Card.Body>
                </Card> */}
            </div>

            <Card style={{ width: '68rem' , boxShadow: '5px 10px 18px #888888', marginLeft: 'auto', marginRight: 'auto'}}>
                    <Card.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>your name</Form.Label>
                        <Form.Control type="text" placeholder="Please enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Please enter your email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Messge</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="please write your message here" />
                    </Form.Group>
                    
                    <div className="d-grid gap-2">
                        <Button variant="success" size="lg">
                            send message
                        </Button>
                    </div>
                      
                    </Card.Body>
                </Card>
        </div>






        {/* <div className="w-50 p-3 mx-auto"> */}
            {/* {
                users.map((item,i) => <h3 key={i}>{item.firstName}</h3>)
            } */}

            {/* 
            <Link to="/tutors">
                
            <button type="button" >
                    Tutors
            </button>
            </Link>
            <br/>
            <br/>
            <button onClick={Profilepage}>Profile</button>
            <br/>
            <br/>

            <Link to='/login' onClick={()=>localStorage.clear()}>Logout</Link> */}
        {/* </div> */}
        <Footer />
        </div>

    )
}

export default Home
