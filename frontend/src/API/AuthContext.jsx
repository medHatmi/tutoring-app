import axios from 'axios'
import React, { createContext, useEffect, useState} from 'react'


export const context_Auth=createContext()

export function AuthContext(props) {



    const [user, setUser] = useState({})
    const [users, setUsers] = useState({})

    useEffect(() => {
        let userDetails = JSON.parse(localStorage.getItem('user'));
        setUser(userDetails)
    }, []);

    // console.log(user);

    async function findOneuser(id) {

        // console.log(id);

        await axios.get('http://localhost:8800/findOne/'+id

        ,{
            headers: {
            'xjwt': `bearer ${localStorage.getItem('token')}`}
        }

        ).then((res)=>{
            console.log(res);

            
        })

       }
    


       useEffect(() => {
        const fetchData = async () => {
           const {data} = await axios.get('http://localhost:8800/user/all',{headers: {'xjwt': `bearer ${localStorage.getItem('token')}`}})
           setUsers(data);
        }
      
        fetchData();
      }, []);


 

    function register(data){
        // let logdata = JSON.stringify(data);

        // console.log(data);

        axios.post('http://localhost:8800/user/register',{
        firstName:data.firstName,
        lastName:data.lastName,
        type:data.type,
        email:data.email,
        password:data.password

    })
         .then(
             res=>{
            //  localStorage.setItem('token',res.data.token)
            console.log(res)
        })
        .catch(err => {
            console.log(err);
        })
    }


    function login(data){
        // let logdata = JSON.stringify(data);

        // console.log(data);

        axios.post('http://localhost:8800/user/login',{

        email:data.email,
        password:data.password
    })
         .then(res=>{

            const user = res.data
            // console.log(user);
                localStorage.setItem('token',res.data.token)
                localStorage.setItem('user', JSON.stringify(user.user))
                if (user.user.type === true) {
                    window.location='/profile/'+user.user._id
                }
                else {
                    window.location='/'
                }
         })

    }



  
    return (
        <div>
            

            <context_Auth.Provider value={{
                register,
                login,
                user,
                findOneuser,
                // allUsers
                users


            }}>
                {
                    props.children
                }
            </context_Auth.Provider>
        </div>
    )
}
