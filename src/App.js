import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbars from "./component/Navbars";
import Contact from "./component/Contact";
import About from "./component/About";
import DiaryState from "./context/Diary/DiaryState";
 
import Login from "./component/Login";
import SignUp from "./component/SignUp";
 
 

function App() {
 
  return (
    <>
      <DiaryState>
      <Navbars />
   
      <Routes>
        if(localStorage.getItem('token') !== null)
        {
        <Route exact path="/" element={<Home  />} />
        }
        else{

        <Route exact path="/Login" element={<Login />} />
        }
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/SignUp" element={<SignUp />} />

        
      </Routes>
      </DiaryState>
    
    </>
  );
}

export default App;
