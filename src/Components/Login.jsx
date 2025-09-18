import React, { useRef } from 'react'
import './Login.css';
import { Navigate, useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passRef = useRef();

    const check=()=>{
        if(emailRef.current.value == 'saadman102002@gmail.com' && passRef.current.value == "asdfgh"){
            {navigate('Homepage')}
        }
        else if(emailRef.current.value == "" || passRef.current.value ==""){
            alert("Please Fill All The Fields");
        }
        else if(passRef.current.value.length < 6){
            alert("Password At Least Be 6 By Length");
        }
        else{
            alert("No Matched Account Found");
        }
    }
  return (
    <div>
    <div className='Container'>
        <div className='bgImg'>
        </div>
            <div className='inputs'>
                <div className='email'>
                    <img src='/public/img/usericon.png' className='userIconImg'></img>
                        <input type='email' placeholder='Enter Your Email' ref={emailRef}></input>
                </div>
                <div className="Password">
                    <img src='/public/img/password.png' className='userPassImg'></img>
                    <input type='password' placeholder='Enter 6 Digit Password' ref={passRef}></input>
                </div>

                <div className='button'>
                        <button onClick={check}>Login</button>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Login
