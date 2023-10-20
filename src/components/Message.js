import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Avatar from '@mui/material/Avatar';

const Message = ({ message }) => {
  const user = auth.currentUser;
  return (
    <div className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
      <Avatar sx={{ bgcolor: "#ffffff", color: "#00000" }}>U</Avatar>
      <div className="chat-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
