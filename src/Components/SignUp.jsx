import React, { useRef } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
const SignUp = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const passRef = useRef();
  const confirmPassRef = useRef();

  const navigate = useNavigate();

//         const confirmSignUp=()=>{
// if(emailRef.current.value !="" && nameRef.current.value!="" && passRef!="" && confirmPassRef!="" && passRef.current.value == confirmPassRef.current.value &&passRef.current.value.length>=6){
//                 {navigate('Login')}
//             }

//             else if(passRef.current.value.length < 6 && passRef.current.value.length !=""){
//               alert("Password Must Be 6 Digit Long At Least")
//             }
//             else if(passRef.current.value != confirmPassRef.current.value){
//               alert("Passwords Doesnt Match");
//               emailRef.current.value = "";
//               passRef.current.value = "";
//               confirmPassRef.current.value = "";
//               nameRef.current.value = "";

//             }
//             else{
//               alert("Please Fill All The Fields");
//               emailRef.current.value = "";
//               passRef.current.value = "";
//               confirmPassRef.current.value = "";
//               nameRef.current.value = "";
//             }
//         }
const confirmSignUp = async () => {
  if (
    emailRef.current.value !== "" &&
    nameRef.current.value !== "" &&
    passRef.current.value !== "" &&
    confirmPassRef.current.value !== "" &&
    passRef.current.value === confirmPassRef.current.value &&
    passRef.current.value.length >= 6
  ) {
    const userData = { 
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    try{
      const response = await fetch("http://localhost:8082/api/SignUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const result = await response.text();
      alert(result);

      if(result.includes("successfully")){
        navigate("/login");
      }
    } 
    catch(error){
      console.error("Error:", error);
      console.log(error);
      alert("Something went wrong!");
    }
  } 
  else{
    alert("Please fill all fields correctly!");
  }
};

  return (
    <div>
      <div className='container'>
        <div className='inputs'>

          <div className='userName'>
                        <img src='/public/img/name.png'></img>
          <input type='text' placeholder='Enter Your Name' ref={nameRef}></input>
          </div>

          <div className='signup_email'>
            <img src='/public/img/email.png'></img>
            <input ref={emailRef} type='email' placeholder='Enter Your Email'></input>
          </div>

            <div className='signup_password'>
                          <img src='/public/img/password.png'></img>
            <input type='password' placeholder='Enter 6 Digit Password' ref={passRef}></input>
            </div>

            <div className='signup_confirmPassword'>
            <img src='/public/img/password.png'></img>
            <input type='password' placeholder='Confirm Your Password' ref={confirmPassRef}></input>
            </div>

            <div className='signUpButton'>
              <button onClick={confirmSignUp} type='submit'>Sign Up</button>
            </div>
              
        </div>
      </div>
    </div>
  )
}

export default SignUp
/*
const confirmSignUp = async () => {
  if (
    emailRef.current.value !== "" &&
    nameRef.current.value !== "" &&
    passRef.current.value !== "" &&
    confirmPassRef.current.value !== "" &&
    passRef.current.value === confirmPassRef.current.value &&
    passRef.current.value.length >= 6
  ) {
    const userData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    try {
      const response = await fetch("http://localhost:8080/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const result = await response.text();
      alert(result);

      if (result.includes("successfully")) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  } else {
    alert("Please fill all fields correctly!");
  }
};


*/