import React, { useContext } from 'react'
import { context_Profile } from '../../API/ProfileContext'
import Tutor from './Tutor'
import { Row, Col, Button,Form } from "react-bootstrap";
import { useState } from 'react';
import Header from '../Main/Header';
import Footer from '../Main/Footer';
import Pagination from './Pagination'

function Tutors() {

    const{profiles,findtutors,firstLevel,ecoLevel,droitLevel,physiqueLevel,svtLevel,tutorsFound}=useContext(context_Profile)
    // console.log(ecoLevel);


    const [currentPage, setCurrentPage] = useState(1);
    const [tutorsPerPage] = useState(9);
  

    const [showFistLevel,setShowFistLevel]=useState(false)
    const [showEcoLevel,setShowEcoLevel]=useState(false)
    const [showDroitLevel,setShowDroitLevel]=useState(false)
    const [showPhysiqueLevel,setShowPhysiqueLevel]=useState(false)
    const [showScienceLevel,setShowScienceLevel]=useState(false)
    const [teachers,setTeachers]=useState({});
    
    const allTutors = JSON.parse(localStorage.getItem("tutors") || "[]");

    // console.log(Object.keys(tutorsFound).length);
    const tutorsCheck = Object.keys(tutorsFound).length == 0 ? false : true

    // Get current tutors
    const indexOfLastTutor = currentPage * tutorsPerPage;
    const indexOfFirstTutor = indexOfLastTutor - tutorsPerPage;
    const currentTutors = tutorsCheck ? tutorsFound.slice(indexOfFirstTutor, indexOfLastTutor) : allTutors.slice(indexOfFirstTutor, indexOfLastTutor);
 
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const handleChange = (e) => {
    
        setTeachers({
            ...teachers,
            [e.target.name]:e.target.value
        })
    }


    const tutors = (e) =>{
        e.preventDefault();
        findtutors(teachers)
    }

    const options = [
 
      {name:'Casablanca'}, {name:'Rabat'}, {name:'Fes'},{name:'Sale'} , {name:'Marrakesh'} , {name:'Agadir'} , {name:'Tangier'},
      {name:'Meknes'},{name:'Oujda-Angad'},{name:'Al Hoceima'},{name:'Kenitra'}, {name:'Tetouan'},{name:'Temara'},{name:'Safi'},
      {name:'Sale Al Jadida'},{name:'Mohammedia'},{name:'Khouribga'},{name:'Beni Mellal'},{name:'Fes al Bali'},{name:'El Jadida'},
      {name:'Taza'},{name:'Nador'},{name:'Settat'},{name:'Larache'},{name:'Ksar El Kebir'},{name:'Khemisset'},{name:'Guelmim'},
      {name:'Berrechid'},{name:'Errachidia'},{name:'Oued Zem'},{name:'Al Fqih Ben Salah'},{name:'Taourirt'},{name:'Berkane'},
      {name:'Sidi Slimane'},{name:'Sidi Qacem'},{name:'Khenifra'},{name:'Ifrane'},{name:'Taroudant'},{name:'Essaouira'},
      {name:'Tiflet'},{name:'Oulad Teima'},{name:'Sefrou'},{name:'Youssoufia'},{name:'Tan-Tan'},{name:'Ouezzane'},{name:'Guercif'},
      {name:'Ouarzazat'},{name:'Tirhanimine'},{name:'Dakhla'},{name:'Tiznit'},{name:'Fnidek'},{name:'Azrou'},{name:'Midelt'},
      {name:'Skhirate'},{name:"Souq Larb'a al Gharb"},{name:'Jerada'},{name:'Smara'},{name:'Kasba Tadla'},{name:'Sidi Bennour'},
      {name:'Imzouren'},{name:'Martil'},{name:'Azemmour'},{name:'Tinghir'},{name:'Chefchaouen'},{name:'Al Aaroui'},{name:'El Aioun'},
      {name:'Zagora'},{name:'Taounate'},{name:'Sidi Yahia El Gharb'},{name:'Zaio'},{name:'Asilah'},{name:'Bouarfa'},{name:'El Hajeb'},
      {name:'Mechraa Bel Ksiri'},{name:'Bouznika'},{name:'Tahla'},{name:'Arfoud'},{name:'Setti Fatma'},{name:'Recani'},{name:'Sidi Ifni'},
      {name:'Ahfir'},{name:'Oulmes'},{name:'Bni Bouayach'},{name:'Ain Beni Mathar'},{name:'Boujniba'},{name:'Kelaat Mgouna'},{name:'Ifrane'},
      {name:'Zawyat an Nwacer'},{name:'Figuig (Centre)'},{name:'Targuist'},{name:'Midar'},{name:'Cap Negro II'},{name:'Mhamid'},{name:'Zag'},
      {name:'Gueltat Zemmour'},{name:'Oualidia'},{name:'Tarfaya'},{name:'Ain Leuh'},{name:'Taghazout'},{name:'Tafraout'},{name:'Oukaimedene'},
      {name:"Sidi Smai'il"},{name:'Saidia'},{name:'Mosquee'},{name:'Imlili'},{name:'Zawyat ech Cheikh'},{name:'Akhfennir'},{name:'Tmourghout'},
      {name:'Jebel Tiskaouine'}
    ];
    

    const levelHandler = (e) => {

    if (e.target.value === 'économie') {
      setShowFistLevel(false)
      setShowEcoLevel(true)
      setShowDroitLevel(false)
      setShowPhysiqueLevel(false)
      setShowScienceLevel(false)
      console.log(firstLevel);
    }
    else if (e.target.value === 'droit') {
      setShowFistLevel(false)
      setShowEcoLevel(false)
      setShowDroitLevel(true)
      setShowPhysiqueLevel(false)
      setShowScienceLevel(false)
    }
    else if (e.target.value === 'physique - chimie') {
      setShowFistLevel(false)
      setShowEcoLevel(false)
      setShowDroitLevel(false)
      setShowPhysiqueLevel(true)
      setShowScienceLevel(false)
    }
    else if (e.target.value === 'science de la vie et de la terre') {
      setShowFistLevel(false)
      setShowEcoLevel(false)
      setShowDroitLevel(false)
      setShowPhysiqueLevel(false)
      setShowScienceLevel(true)
    }
    else if (e.target.value ===  'CP' || e.target.value ===  '2 ère année primaire' || e.target.value ===  '3 ère année primaire' || 
        e.target.value ===  '4 ère année primaire' || e.target.value ===  '5 ère année primaire' || e.target.value ===  '6 ère année primaire' ) {
      setShowFistLevel(true)
      setShowEcoLevel(false)
      setShowDroitLevel(false)
      setShowPhysiqueLevel(false)
      setShowScienceLevel(false)
    }
};

const twoCalls = (e) => {
  handleChange(e)
  levelHandler(e)
}



    return (
      <div>
        <Header />
        {/* <h1>{allTutors[0]}</h1> */}
      <Form className="container py-5">
      <Row>
        <Col md={1}></Col>
        <Col md={3} sm={12} className="dropdown-space">
          <Form.Group controlId="rating">

            <Form.Select onChange={handleChange} name='city' >
              <option value="">choose city</option>
              {
                options.map((city,i) => <option value={city.name}>{city.name}</option>)
              }
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={3} sm={12} className="dropdown-space">
          <Form.Group controlId="">

            <Form.Select onChange={twoCalls}  name='level'>
              <option value="">choose level</option>
              <option value="CP">CP</option>
              <option value="2 ère année primaire">2 ère année primaire</option>
              <option value="3 ère année primaire">3 ère année primaire</option>
              <option value="4 ère année primaire">4 ère année primaire</option>
              <option value="5 ère année primaire">5 ère année primaire</option>
              <option value="6 ère année primaire">6 ère année primaire</option>
              <option value="1 ère année collége">1 ère année collége</option>
              <option value="2 ème année collége">2 ème année collége</option>
              <option value="3 ème année collége">3 ème année collége</option>
              <option value="tronc commun">tronc commun</option>
              <option value="1 ère année bac">1 ère année bac</option>
              <option value="2 ème année bac">2 ème année bac</option>
              <option value="économie">supérieur économie</option>
              <option value="droit">supérieur droit</option>
              <option value="physique - chimie">supérieur physique - chimie</option>
              <option value="science de la vie et de la terre">supérieur science de la vie et de la terre</option>

            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={3} sm={12}>
          <Form.Group controlId="" className="dropdown-space">

            <Form.Select onChange={handleChange} name='profession'>
              <option value="">choose profession</option>

              { showFistLevel
                ? firstLevel.map((level,i) => <option value={level.name}>{level.name}</option>)
                : <>
                  </>
              }

              { showEcoLevel
                ? ecoLevel.map((level,i) => <option value={level.name}>{level.name}</option>)
                : <>
                  </>
              }

              { showDroitLevel
                ? droitLevel.map((level,i) => <option value={level.name}>{level.name}</option>)
                : <>
                  </>
              }

              { showPhysiqueLevel
                ? physiqueLevel.map((level,i) => <option value={level.name}>{level.name}</option>)
                : <>
                  </>
              }
              { showScienceLevel
                ? svtLevel.map((level,i) => <option value={level.name}>{level.name}</option>)
                : <>
                  </>
              }


            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={1} sm={12} className="dropdown-space" style={{ textAlign: "center" }}>
          <Button className="btn btn-wide" type="submit" variant="success" onClick={tutors}>
            Search
          </Button>
        </Col>
      </Row>
    </Form>

    <div className="py-3 container-fluid">
      <Row style={{ marginLeft: "1.2rem" }}>
        <Col md={2} className="res-view">
          <img
            style={{ height: "600px", width: "160px" }}
            src="/images/ads.jpg"
            className="fixed-content ml-5 res-view"
            alt="ads"
            id="mydiv"
          ></img>
        </Col>
        <Col md={8} sm={12} xs={12}>
          <Row>
            <Tutor tutors={currentTutors} />
            {/* {
                allTutors.map((profile,i) =>
                // <h3 key={i}>{profile.firstName}</h3>
                // console.log(profile,i)
                    <Tutor i={i} profile={profile}  />
                 )
            } */}
              <Pagination
                tutorsPerPage={tutorsPerPage}
                totalTutors={tutorsCheck? tutorsFound.length : allTutors.length}
                paginate={paginate}
              />


    </Row>
            </Col>

        <Col md={2} className="res-view">
          <img
            style={{ height: "600px", width: "160px" }}
            id="mydiv2"
            src="/images/ads.jpg"
            className="fixed-content res-view"
            alt="user"
          ></img>
        </Col>
      </Row>
    </div>

<Footer />
        </div>
    )
}

export default Tutors
