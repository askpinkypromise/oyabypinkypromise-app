import React from "react";
import Card from "react-bootstrap/Card";
import ChatBox from "./ChatBox";
import { Redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useAuth } from "../AuthContext";
import { auth } from "../firebase";

const HomePage = () => {
  const user = useAuth();

  console.log("user", user);
  const navigate = useNavigate();

  const handleClickChat = () => {
    console.log("HANDLE CLICK");
    navigate("/chat");
  };

  const handleClickContent = () => {
    console.log("HANDLE CLICK");
    navigate("/mediacontent");
  };

  return (
    <main className="welcome">
      <h1>
        {user ? (
          <div>
            <Card.Text>Welcome, {user.email}</Card.Text>
          </div>
        ) : (
          <Card.Text>Welcome!</Card.Text>
        )}{" "}
      </h1>
      <Card
        style={{
          width: "18rem",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          margin: "20px",
        }}
        onClick={handleClickChat}
      >
        <Card.Body>
          <Card.Text>Have questions? Chat with a Counselor.</Card.Text>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          margin: "20px",
        }}
        onClick={handleClickContent}
      >
        <Card.Body>
          <Card.Text>Discover and Learn</Card.Text>
        </Card.Body>
      </Card>
    </main>
  );
};

export default HomePage;
