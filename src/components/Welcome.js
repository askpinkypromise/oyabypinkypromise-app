import React from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; // Import useState hook

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
        console.log("SIGN IN SUCCESS", user);
        navigate("/home");
      })
      .catch((error) => {
        // Handle sign-in errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Sign-in failed: ${errorCode} - ${errorMessage}`);
        // You can display an error message to the user or perform other error handling here.
      });
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
      <h2>Get Started</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={200} height={200} />
      <form onSubmit={handleSubmit}>
        <label className="welcome-label">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label className="welcome-label">
          Password:
          <input
            type="password" // Use type="password" for a proper password field
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" className="new-button" value="Submit" />
      </form>
      {/* Display error message if there is an error */}
      {error && <p className="error-message">{error}</p>}
    </main>
  );
};

export default Welcome;
