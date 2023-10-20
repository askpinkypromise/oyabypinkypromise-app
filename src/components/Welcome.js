import React from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; // Import useState hook
import backgroundImage from './onboarding.png';

const Welcome = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const googleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successful sign-in
        const user = userCredential.user;
        navigate("/home");
      })
      .catch((error) => {
        // Handle sign-in errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Sign-in failed: ${errorCode} - ${errorMessage}`);
        // You can display an error message to the user or perform other error handling here.
      });

      navigate("/home");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = username; // Get the email from the username input
    const pass = password; // Get the password from the password input

    // Call the emailSignIn function with the captured email and password
    googleSignIn(email, pass);
  };

  return (
    <main className="welcome">
      <h2 className="heading">Oya By Pinky Promise</h2>
      <img src={backgroundImage} alt="" width={200} height={200} />
      <div className="getstarted">
        <h2 className="started">Get Started</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label> Username</label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter your username here"
              className="inputText"
              onChange={(e) => setUsername(e.target.value)}
            />
          <br />
          </div>
          <div className="form-group">
          <label> Password </label>
            <input
              type="password" // Use type="password" for a proper password field
              name="password"
              value={password}
              placeholder="Enter your password here"
              className="inputText"
              onChange={(e) => setPassword(e.target.value)}
            />
          <br />
          </div>
          <input type="submit" className="new-button" value="Get Started"/>
        </form>
      </div>
      {/* Display error message if there is an error */}
      {error && <p className="error-message">{error}</p>}
    </main>
  );
};

export default Welcome;
