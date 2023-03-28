import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import "./Conversations.css";
import "../Messenger/Messenger.css";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const [currentConversation, setCurrentConversation] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/user/getOne/" + friendId,
          { headers: { xjwt: `bearer ${localStorage.getItem("token")}` } }
        );

        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  // console.log("User ", user);

  return (
    // <Card style={{ height: "78vh", border: "none" }} className="cardHeight">
    //   <Card.Body style={{ padding: "0" }}>
    //     <div className="convHeadborder">All Conversations</div>
    //     <div className="conversationsScroll">

    <div
      className="conversation convborder backColorFocus"
      // style={{
      //   background: currentConversation === 1 ? "#e5f8e6" : "none",
      // }}
      // onClick={() => setCurrentConversation(1)}
    >
      <img
        className="conversationImg"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        alt=""
      />
      <span className="conversationName">
        {user?.firstName} {user?.lastName}
      </span>
    </div>

    // </div>

    //  <div className="conversationResponsive">
    //   <div
    //     className="conversation convborder"

    //   >
    //     <img
    //       className="conversationImg"
    //       src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    //       alt=""
    //     />
    //     <span className="conversationName">John Doe</span>
    //   </div>
    //   <div
    //     className="conversation convborder"
    //   >
    //     <img
    //       className="conversationImg"
    //       src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    //       alt=""
    //     />
    //     <span className="conversationName">John Doe</span>
    //   </div>
    // </div>
    //   </Card.Body>
    // </Card>
  );
}
