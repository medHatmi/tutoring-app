import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './chatOnline.css'

function ChatOnline({onlineUsers, currentId, setCurrentChat}) {

  // console.log(onlineUsers);
  const [friendIds, setFriendIds] = useState([]);
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const {data} = await axios.get('http://localhost:8800/conversation/userConv/' + currentId ,{headers: {'xjwt': `bearer ${localStorage.getItem('token')}`}})
        const Ids = data.map( x=> x.members.find((member) => member !== currentId)); 
        setFriendIds(Ids)
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [currentId]);
  // console.log(friends);

  useEffect(() => {
    const getprofiles = async () => {
      try {

        const {data} = await axios.post('http://localhost:8800/profile/friends',friendIds ,{headers: {'xjwt': `bearer ${localStorage.getItem('token')}`}})

        setFriends(data);
      } catch (err) {
        console.log(err);
      }
    };
    getprofiles();
  }, [friendIds]);
  // console.log(friends);

  // console.log(onlineUsers);
  // console.log(friends);



  useEffect(() => {

  setOnlineFriends(friends.filter((f)=> onlineUsers.includes(f.id)));

  }, [friends, onlineUsers])

  const handleClick = async (user) => {

    const ids = [currentId +'/'+ user.id]

    try {
      const {data} = await axios.get('http://localhost:8800/conversation/find/'+ids ,{headers: {'xjwt': `bearer ${localStorage.getItem('token')}`}})
      setCurrentChat(data);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="chatOnline">
      {onlineFriends.map((o) => (

        
      <div className="chatOnline onlineborder" onClick={() => handleClick(o)}>
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src={
                      o?.photo
                      ? `http://localhost:8800/images/profile/${o?.photo}`
                      : 'data:image/jpeg;base64,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'
                      }
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">{o.firstName}</span>
      </div>
      </div>

      



        // <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
        //   <div className="chatOnlineImgContainer">
        //   <img className='conversationImg' src={
        //         o?.photo
        //         ? `http://localhost:8800/images/profile/${o?.photo}`
        //         : 'data:image/jpeg;base64,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'
        //         } alt='nothing' />
        //     <div className="chatOnlineBadge"></div>
        //   </div>
        //   <span className="chatOnlineName">{o.firstName}</span>
        // </div>
     ))} 
    </div>
  )
}

export default ChatOnline
