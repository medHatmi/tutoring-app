import React from "react";
import "./Message.css";
// import { format } from "timeago.js";

function Message({ message, own, typing, name }) {
  // console.log(message);
  return (
    //      <div className={own ? "message own" : "message"}>
    //   <div className="messageTop">
    //     <img
    //       className="messageImg"
    //       src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    //       alt=""
    //     />
    //       <p className="messageText">{message.text}</p>
    //   </div>
    //   <div className="messageBottom">{message.createdAt}</div>

    //   {/* <div className="messageBottom">{format(message.createdAt)}</div> */}
    // </div>

    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt=""
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <strong className="">{own ? "Me" : "John Doe"}</strong>
          <p className=" messageText">{message.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
