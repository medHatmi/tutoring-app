import React, { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import { context_Auth } from "../../API/AuthContext";
import ChatOnline from "../chatOnline/ChatOnline";
import Conversation from "../Conversations/Conversation";
import Conversations from "../Conversations/Conversations";
import Message from "../Message/Message";
import { io } from "socket.io-client";
import { Row, Col, Card } from "react-bootstrap";
import "../Conversations/Conversations.css";
import "./Messenger.css";
import * as FaIcons from "react-icons/fa";
import Header from "../Main/Header";

function Messenger(props) {
  const [conversations, setConversations] = useState([]);
  const [ids, setIds] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [typing, setTyping] = useState(false);
  const [typingName, setTypingName] = useState("");
  const [email, setEmail] = useState("");
  const [online4mail, setOnline4mail] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();
  const scrollRef = useRef();
  const [currentConversation, setCurrentConversation] = useState(null);
  const [toggle, setToggle] = useState(false);

  const { user } = useContext(context_Auth);
  // console.log("User ",user);

  // console.log(onlineUsers);

  //////////////////////////////////////////////////

  useEffect(() => {
    socket.current = io("ws://localhost:8900");

    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });

      setTyping(data.typing);
    });
  }, [typing]);

  //////////////////////////////
  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat, typing]);

  /////////////////////////////

  useEffect(() => {
    const getConversations = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8800/conversation/userConv/" + user._id,
          { headers: { xjwt: `bearer ${localStorage.getItem("token")}` } }
        );
        setConversations(data);
        const Ids = data.map((x) =>
          x.members.find((member) => member !== user._id)
        );
        setIds(Ids);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);

  ////////////////////////////////////
  // to send users in the socket and get the online ones
  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      // console.log(users);
      setOnlineUsers(ids.filter((i) => users.some((u) => u.userId === i)));
      setOnline4mail(onlineUsers.includes(email.id));
    });
  }, [user, ids]);

  // console.log(online4mail);

  /////////////////////////////

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/message/messages/" + currentChat?._id,
          { headers: { xjwt: `bearer ${localStorage.getItem("token")}` } }
        );
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  /////////////////////////////
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    // console.log(receiverId);
    // get the user
    try {
      const { data } = await axios.get(
        "http://localhost:8800/user/getOne/" + receiverId,
        { headers: { xjwt: `bearer ${localStorage.getItem("token")}` } }
      );
      setEmail(data);
    } catch (err) {
      console.log(err);
    }

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
      typing: false,
    });

    // console.log(socket.current)

    try {
      const res = await axios.post(
        "http://localhost:8800/message/addMessage/",
        message,
        { headers: { xjwt: `bearer ${localStorage.getItem("token")}` } }
      );
      setMessages([...messages, res.data]);
      setNewMessage("");

      // send email
      if (!online4mail) {
        await axios.post("http://localhost:8800/mail/send_mail/", email, {
          headers: { xjwt: `bearer ${localStorage.getItem("token")}` },
        });
      } else {
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // /////////////// typing

  const typingHandle = () => {
    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("typing", {
      senderId: user._id,
      senderName: user.firstName,
      receiverId,
      typing: true,
    });

    socket.current.on("isTyping", (data) => {
      // console.log(data);
      if (data.status === true) {
        // console.log(data.status);
        setTyping(true);
        // setTypingName(data.senderName);
      }
    });
  };

  const handleToggleBody = () => {
    setToggle(!toggle);
  };

  /////////////////////////////////
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // console.log("Current Chat ", currentChat);
  // console.log("Current Conv ", currentConversation);
  // console.log("Toggle ", toggle);

  // const typingHandle = () => {
  //   if (newMessage.length > 0) {
  //     setTyping(true);
  //   } else if (newMessage.length === 0 && typing) {
  //     setTyping(false);
  //   }
  // };

  // ///////////////////////////////////////
  // ///////////////////////////////////////
  // ///////////////////////////////////////
  return (
    //   <div className="messenger">
    //   <div className="chatMenu">
    //      <div className="chatMenuWrapper">
    //       {conversations.map((c) => (
    //         <div onClick={() => setCurrentChat(c)}>
    //           <Conversations conversation={c} currentUser={user}  />
    //         </div>
    //      ))}
    //     </div>
    //   </div>
    //   <div className="chatBox">
    //  <div className="chatBoxWrapper">

    //          {currentChat ? (
    //         <>
    //           <div className="chatBoxTop">

    //             {messages.map((m) => (
    //               <div ref={scrollRef}>
    //                 <Message message={m} own={m.sender === user._id}/>
    //               </div>
    //             ))}
    //             {typing ? `${typingName} is typing...` : ''}
    //             {/* {
    //             typing ? (
    //               <>
    //               <h3> {typingName} is typing... </h3>
    //               </>
    //               ) : (
    //               ''
    //               )} */}
    //           </div>
    //           <div className="chatBoxBottom">
    //             <textarea
    //               className="chatMessageInput"
    //               placeholder="write something..."
    //               onChange={(e) => setNewMessage(e.target.value)}
    //               onKeyPress={handleTyping}
    //               value={newMessage}
    //             ></textarea>
    //             <button className="chatSubmitButton" onClick={handleSubmit}>
    //               Send
    //             </button>
    //           </div>
    //         </>
    //       ) : (
    //         <span className="noConversationText">
    //           Open a conversation to start a chat.
    //         </span>
    //       )}
    //     </div>
    //   </div>
    //   <div className="chatOnline">
    //     <div className="chatOnlineWrapper">
    //       <ChatOnline
    //         onlineUsers={onlineUsers}
    //         currentId={user._id}
    //         setCurrentChat={setCurrentChat}
    //       />
    //     </div>
    //   </div>
    // </div>

    <>
    <Header />
      <Row xs={1} md={2} className="messengerBox g-5 py-5">
        <Col md={12}>
          <Card style={{ height: "79vh", borderRadius: "0" }}>
            <Card.Body style={{ padding: "0" }}>
              <div className="messenger">
                <div className="chatMenu">
                  <div className="chatMenuWrapper">
                    <div className="convHeadborder">All Conversations</div>
                    <div className="conversationsScroll">
                      {conversations.map((c) => (
                        <div
                          key={c._id}
                          onClick={() => {
                            setCurrentChat(c);
                            setCurrentConversation(c._id);
                            console.log(
                              "T/F",
                              String(currentConversation) === String(c._id)
                            );
                          }}
                          style={{
                            background:
                              String(currentConversation) === String(c._id)
                                ? "#e5f8e6"
                                : "none",
                          }}
                        >
                          <Conversation
                            conversation={c}
                            currentUser={user}

                            // onClick={() => setCurrentConversation(1)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* __________ For Responsive Conversation __________  */}
                {/* {toggle &&
                  conversations.map((c) => (
                    <div className="chatMenuRes">
                      <div
                        className="convHeadborder"
                        style={{ textAlign: "center" }}
                      >
                        All Conversations
                      </div>
                      <div
                        onClick={() => {
                          setToggle(!toggle);
                          setCurrentChat(c);
                        }}
                        key={c._id}
                      >
                        <Conversation conversation={c} currentUser={user} />
                      </div>
                    </div>
                  ))} */}


                {toggle && (
                  <div className="chatMenuRes">
                    <div
                      className="convHeadborder"
                      style={{ textAlign: "center" }}
                    >
                      All Conversations
                    </div>

                    {conversations.map((c) => (
                      <div
                        onClick={() => {
                          setToggle(!toggle);
                          setCurrentChat(c);
              
                              }}
                        key={c._id}
                      >
                        <Conversation conversation={c} currentUser={user} />
                      </div>
                    ))}
                  </div>
                )}


                {/* _____ Responsive End _________ */}

                <div
                  className="chatBox"
                  style={{ display: toggle ? "none" : "block" }}
                >
                  <div className="chatBoxWrapper">
                    {currentChat ? (
                      <>
                        <div className="chatHeadborder">
                          <FaIcons.FaArrowLeft
                            onClick={handleToggleBody}
                            style={{ color: "black" }}
                            className="chatBackArrow"
                          />
                          <span
                            className="chatHeadUserName"
                            style={{
                              fontWeight: "500",
                              fontSize: "18px",
                              textDecoration: "underline",
                            }}
                          >
                            John Doe
                          </span>
                        </div>
                        <div className="chatBoxTop">
                          {messages.map((m) => (
                            <div ref={scrollRef} key={m._id}>
                              <Message
                                message={m}
                                own={m.sender === user._id}
                              />
                            </div>
                          ))}

                          {typing ? (
                            <div className="typing" ref={scrollRef}>
                              <div className="typing__dot"></div>
                              <div className="typing__dot"></div>
                              <div className="typing__dot"></div>
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="chatBoxBottom">
                          <textarea
                            className="chatMessageInput"
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={typingHandle}
                            value={newMessage}
                          ></textarea>
                          <button
                            className="chatSubmitButton"
                            onClick={handleSubmit}
                          >
                            Send
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="noConvBorder">
                          <FaIcons.FaArrowLeft
                            onClick={handleToggleBody}
                            style={{ color: "black" }}
                            className="chatBackArrow"
                          />
                        </div>
                        <span className="noConversationText">
                          Open a conversation to start a chat.
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="chatOnline">
                  <div className="chatOnlineWrapper">
                    <div className="convHeadborder">Online Friends</div>
                      <div className="chatOnlineScroll" >

                    <ChatOnline
                      onlineUsers={onlineUsers}
                      currentId={user._id}
                      setCurrentChat={setCurrentChat}
                    />
                      </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>

    //   <>
    //   <Row xs={1} md={2} className="messengerBox g-5 py-5">
    //     <Col md={12}>
    //       <Card style={{ height: "79vh" }}>
    //         <Card.Body style={{ padding: "0" }}>
    //           <div className="messenger">
    //             <div className="chatMenu">
    //               <div className="chatMenuWrapper">
    //               {conversations.map((c) => (
    //             // <div onClick={() => setCurrentChat(c)}>
    //               <Conversations conversation={c} currentUser={user}  />
    //             // </div>
    //               ))}

    //               </div>
    //             </div>

    //             <div className="chatBox">
    //               <div className="chatBoxWrapper">
    //                 {currentChat ? (
    //                   <>
    //                     <div className="chatHeadborder">
    //                       {/* <FaIcons.FaArrowLeft
    //                         onClick={() => {
    //                           navigate("/conversations");
    //                         }}
    //                         style={{ color: "black" }}
    //                         className="chatBackArrow"
    //                       /> */}
    //                       <span
    //                         className="chatHeadUserName"
    //                         style={{
    //                           fontWeight: "500",
    //                           fontSize: "18px",
    //                           textDecoration: "underline",
    //                         }}
    //                       >
    //                         John Doe
    //                       </span>
    //                     </div>
    //                     <div className="chatBoxTop">
    //                       <Message />
    //                       <Message own={true} />
    //                       <Message />
    //                       <Message />
    //                       <Message />
    //                       <Message />
    //                       <Message />

    //                       {typing ? (
    //                         <div className="typing">
    //                           <div className="typing__dot"></div>
    //                           <div className="typing__dot"></div>
    //                           <div className="typing__dot"></div>
    //                         </div>
    //                       ) : (
    //                         <></>
    //                       )}
    //                     </div>
    //                     <div className="chatBoxBottom">
    //                       <textarea
    //                         className="chatMessageInput"
    //                         onChange={(e) => setNewMessage(e.target.value)}
    //                         value={newMessage}
    //                         // onKeyPress={typingHandle}
    //                       ></textarea>
    //                       <button
    //                         className="chatSubmitButton"
    //                         onClick={handleSubmit}
    //                       >
    //                         Send
    //                       </button>
    //                     </div>
    //                   </>
    //                 ) : (
    //                   <span className="noConversationText">
    //                     Open a conversation to start a chat.
    //                   </span>
    //                 )}
    //               </div>
    //             </div>
    //             <div className="chatOnline">
    //               <div className="chatOnlineWrapper">
    //                 <div className="convHeadborder">Online Friends</div>
    //                 <ChatOnline />
    //               </div>
    //             </div>
    //           </div>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    // </>
  );
}

export default Messenger;
