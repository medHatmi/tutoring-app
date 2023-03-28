import axios from 'axios'
import React, { createContext, useEffect, useState} from 'react'


export const context_Profile=createContext()

export function ProfileContext(props) {

    const [profiles, setProfiles] = useState({})
    const [tutorsFound, setTutorsFound] = useState({})
    const [profile, setProfile] = useState({})
    const [firstLevel, setFirstLevel] = useState({})
    const [ecoLevel, setEcoLevel] = useState({})
    const [droitLevel, setDroitLevel] = useState({})
    const [physiqueLevel, setPhysiqueLevel] = useState({})
    const [svtLevel, setSvtLevel] = useState({})


    useEffect(() => {
        const fetchData = async () => {
           const {data} = await axios.get('http://localhost:8800/profile/profiles/all',{headers: {'xjwt': `bearer ${localStorage.getItem('token')}`}})
           setProfiles(data);
            localStorage.setItem('tutors', JSON.stringify(data));

        }
        fetchData();
      }, []);
      
    
    async function findOneProfile(id) {

        // console.log(id);

        await axios.get('http://localhost:8800/profile/findprofile/'+id

        ,{
            headers: {
            'xjwt': `bearer ${localStorage.getItem('token')}`}
        }

        ).then((res)=>{

           setProfile(res.data);
            
        })

       }

       async function updateProfile(id,firstName,lastName,city,phone,isTutor,experience,profession,description,photo) {
        // console.log(id,firstName,lastName,city,phone,isTutor,experience,profession,description,photo);

        const formData = new FormData();

        formData.append("firstName",firstName)
        formData.append("lastName",lastName)
        formData.append("city",city)
        formData.append("phone",phone)
        formData.append("isTutor",isTutor)
        formData.append("experience",experience)
        formData.append("profession",profession)
        formData.append("description",description)
        formData.append("photo",photo)


        await axios.post('http://localhost:8800/profile/update/'+id,
        
        formData
        ,{
            headers: {
            'xjwt': `bearer ${localStorage.getItem('token')}`}
        }

        

        ).then((res)=>{
            console.log(res);
            
        })

       }

       async function findtutors(teachers) {
      

        // console.log(teachers);
        await axios.post('http://localhost:8800/profile/findtutors/',
        
        teachers
        ,{
            headers: {
            'xjwt': `bearer ${localStorage.getItem('token')}`}
        }

        

        ).then((res)=>{
            // console.log(res.data);
            const tutors = res.data;
            setTutorsFound(tutors)
            
        })

       }

        useEffect(() => {
            const findFirstLevel = async () => {
            const {data} = await axios.get('http://localhost:8800/level/getFirstLevel' ,{headers: {'Authorization': `bearer ${localStorage.getItem('token')}`}})
            setFirstLevel(data);
            }
        
            findFirstLevel();
        }, []);

      useEffect(() => {
        const findEcoLevel = async () => {
        const {data} = await axios.get('http://localhost:8800/level/getSecondLevel' ,{headers: {'Authorization': `bearer ${localStorage.getItem('token')}`}})
        setEcoLevel(data);
        }
    
        findEcoLevel();
        }, []);

        useEffect(() => {
            const findDroitLevel = async () => {
            const {data} = await axios.get('http://localhost:8800/level/getThirdLevel' ,{headers: {'Authorization': `bearer ${localStorage.getItem('token')}`}})
            setDroitLevel(data);
            }
        
            findDroitLevel();
        }, []);

        useEffect(() => {
            const findPhysiqueLevel = async () => {
            const {data} = await axios.get('http://localhost:8800/level/getForthLevel' ,{headers: {'Authorization': `bearer ${localStorage.getItem('token')}`}})
            setPhysiqueLevel(data);
            }
        
            findPhysiqueLevel();
        }, []);

        useEffect(() => {
            const findSvtLevel = async () => {
            const {data} = await axios.get('http://localhost:8800/level/getFifthLevel' ,{headers: {'Authorization': `bearer ${localStorage.getItem('token')}`}})
            setSvtLevel(data);
            }
        
            findSvtLevel();
        }, []);




  
    return (
        <div>
            

            <context_Profile.Provider value={{

                findOneProfile,
                profiles,
                profile,
                updateProfile,
                findtutors,
                firstLevel,
                ecoLevel,
                droitLevel,
                physiqueLevel,
                svtLevel,
                tutorsFound

            }}>
                {
                    props.children
                }
            </context_Profile.Provider>
        </div>
    )
}
