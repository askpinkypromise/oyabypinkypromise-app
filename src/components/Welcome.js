import React from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Welcome = () => {

  const navigate = useNavigate();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    console.log("SIGN IN WITH GOOGLE")
    navigate('/home');

  };

  return (
    <main className="welcome">
      <h2>Get Started</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={200} height={200} />
      <form>
        <label className="welcome-label">
          Username:
          <input type="text" name="username" />
        </label>
        <br></br>
        <label className="welcome-label">
          Password:
          <input type="text" name="password" />
        </label>
        <br></br>
        <input type="submit" className="new-button" value="Submit" />
      </form>
      <button className="new-button" onClick={googleSignIn}>Sign In With Google
        {/* <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        /> */}
      </button>
    </main>
  );
};

export default Welcome;
