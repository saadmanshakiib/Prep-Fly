
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8081/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });

      const res = await response.text();
      alert(res);

      if (res.includes("Successfull")) {
        navigate("/homepage");
      }
    } catch (err) {
      console.error("Login failed:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className='Container'>
      <div className='bgImg'></div>

      <div className='inputs'>

        <div className='email'>
          <img src='/public/img/usericon.png' className='userIconImg' alt="User" />
          <input 
            type='email' 
            placeholder='Enter Your Email'
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </div>

        <div className="Password">
          <img src='/public/img/password.png' className='userPassImg' alt="Password" />
          <input 
            type='password' 
            placeholder='Enter 6 Digit Password'
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>

        <div className='button'>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
