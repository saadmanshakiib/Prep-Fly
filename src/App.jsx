
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css'
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Homepage from "./Components/Homepage";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" 
        element={
          <><Header/><Hero/><Footer/></>
          }
          />

        <Route path="/About" element={<About/>} />

        <Route path="/Contact" element={<Contact/>} />

        <Route path="/login" element={<Login/>}/>

        <Route path="/signup" element={<SignUp/>}/>

                <Route path="/HomePage" element={<Homepage/>}/>
        
      </Routes>
    </Router>

    </>
  );
}

export default App;
