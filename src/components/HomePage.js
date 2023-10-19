import React from "react";
import Card from 'react-bootstrap/Card';
import ChatBox from "./ChatBox";
import {Redirect} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        console.log("HANDLE CLICK")
        navigate('/chat');
    }

  return (
    <main className="welcome">
      <Card style={{ width: '18rem', backgroundColor: 'white', padding: '20px', borderRadius: '10px', margin: '20px'}} onClick={handleClick}>
      <Card.Body>
        <Card.Text>
          Have questions? Chat with a Counselor.
        </Card.Text>
      </Card.Body>
      </Card>
      <Card style={{ width: '18rem', backgroundColor: 'white', padding: '20px', borderRadius: '10px', margin: '20px'}}>
      <Card.Body>
        <Card.Text>
          Discover and Learn
        </Card.Text>
      </Card.Body>
      </Card>
    </main>
  );
};

export default HomePage;
