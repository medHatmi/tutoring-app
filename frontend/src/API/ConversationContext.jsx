import axios from 'axios'
import React, { createContext, useEffect, useState} from 'react'


export const context_Conv=createContext()

export function ConversationContext(props) {



  

    async function newConv(senderId,receiverId) {
      
        // console.log(senderId,receiverId);
        

        // console.log(teachers);
        await axios.post('http://localhost:8800/conversation/newConv/',
        
        {
            "senderId": senderId,
            "receiverId": receiverId
        }
        ,{
            headers: {
            'xjwt': `bearer ${localStorage.getItem('token')}`}
        }

        

        ).then((res)=>{
            console.log(res);
            
        })

       }

  
    return (
        <div>
            

            <context_Conv.Provider value={{
             
             newConv


            }}>
                {
                    props.children
                }
            </context_Conv.Provider>
        </div>
    )
}
