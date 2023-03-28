import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from "react-bootstrap";
import './Conversations.css'

function Conversations({conversation, currentUser}) {

    const [user, setUser] = useState(null);
  const [currentConversation, setCurrentConversation] = useState(null);


    // console.log(currentUser._id);

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id);

        // console.log(friendId);
    
        const getUser = async () => {
          try {
           const res = await axios.get('http://localhost:8800/user/getOne/'+friendId ,{headers: {'xjwt': `bearer ${localStorage.getItem('token')}`}})

        
            setUser(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getUser();
      }, [currentUser, conversation]);

    //   console.log(user);

    return (
      <>
      <Card style={{ height: "81vh" }}>
        <Card.Body style={{ padding: "0" }}>
          {/* <div className="messenger"> */}
            <div
              className="chatMenu"
              // style={{ display: sidebar ? "block" : "none" }}
            >
              <div className="chatMenuWrapper">
                <div className="convsHeadborder">All Conversations</div>
                {/* <div className="conversationsScroll"> */}
                
              
                  <div className="conversationRes convborder" onClick={() => {
                                        // navigate("/messenger");
                                    }}>

                    <img
                      className="conversationImg"
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      alt=""
                    />
                    <span className="conversationName">jhon doe</span>
                  </div>
                  
                
                  
                  {/* <div className="conversationRes convborder">
                    <img
                      className="conversationImg"
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      alt=""
                    />
                    <span className="conversationName">John Doe</span>
                  </div> */}
                </div>
              {/* </div> */}
            {/* </div> */}
          </div>
        </Card.Body>
      </Card>
    </>
    );

  
}

export default Conversations
