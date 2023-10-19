import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import HomePage from "./components/HomePage";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router,Routes, Switch, Route, Link } from 'react-router-dom'; 

function App() {
  // const [user] = useAuthState(auth);

  return (
  <div className="App">
  //     {/* <NavBar />
  //     {!user ? (
  //       <Welcome />
  //     ) : (
  //       <>
  //         <HomePage />
  //       </>
  //     )} */}
    {/* <NavBar/> */}
      <Router> 
        <Routes>
          <Route exact path='/' element={<Welcome/>}></Route> 
          <Route exact path='/home' element={<HomePage/>}></Route> 
          <Route exact path='/chat' element={<ChatBox/>}></Route> 
        </Routes>
      </Router> 
    </div>
  );
}

export default App;