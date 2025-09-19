// import React from 'react'
// import { useState } from 'react';
// import axios from 'axios';

// const CompleteProfile = () => {
//         const [formData,setFormData] = useState(
//             {
//                 userName : "",
//                 gender : "",
//                 area : "",
//                 age : ""
//             }
//         );
//         const [profilePic,setProfilePic] = useState(null);

//         const handleFileChange=(e)=>{
//                 setProfilePic(e.target.files[0]);
//         }

//         const handleSubmission=async(e)=>{
//                 e.preventDefault();
//                 const data = new FormData();
//                 data.append("DP",profilePic);
//                 data.append("User_Name",formData.userName);
//                 data.append("Age",formData.age);
//                 data.append("Gender",formData.gender);
//                 data.append("Area",formData.area);

//         try{
//       await axios.post("http://localhost:8081/api/profile", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//         withCredentials: true
//       });

//       alert("Profile saved successfully!");
//     } 
//     catch(error){
//       alert(error);
//     }
//               };



//     const handleChange=(e)=>{
//         setFormData({...formData,[e.target.name] : e.target.value});
//     }

//   return (
//     <div>
//       <div className='inputs'>

// <form onSubmit={handleSubmission}>

//             <div className='@user-name'>
//             <input name="userName" type='text' placeholder='Enter Your User Name' onChange={handleChange}></input>
//         </div>

//             <div className='profile-pic'>
//                 <h3>Sumbit Your Profile Picture</h3>
//                 <input type='file' required onChange={handleFileChange}></input>
//             </div>
//             <div className='Gender'>
//                 <p>Select Your Gender</p>
//                 <select name="gender" onChange={handleChange}>
//                     <option>Male</option>
//                     <option>Female</option>
//                 </select>
//             </div>

//             <div className='Age'>
//                 <br/>
//                 <input name='age' type='number' placeholder='Enter Your Age' onChange={handleChange}></input>
//             </div>

//             <div className='Area'>
//                 <h3>Choose Your Area</h3>
//                 <select name = "area" onChange={handleChange}>
//                     <option>Dhaka</option>
//                     <option>Chittagong</option>
//                     <option>Rajshahi</option>
//                     <option>Khulna</option>
//                     <option>Mymensingh</option>
//                     <option>Rangpur</option>
//                     <option>Barishal</option>
//                 </select>
//             </div>
            
//             <div className='button'>
//                 <button type='submit'>Save Profile</button>
//             </div>
// </form>

//       </div>
//     </div>
//   )
// }

// export default CompleteProfile
import React, { useState } from 'react';
import axios from 'axios';

const CompleteProfile = () => {
  const [formData, setFormData] = useState({
    userName: "",
    gender: "Male",
    area: "Dhaka",
    age: ""
  });
  const [profilePic, setProfilePic] = useState(null);

  const handleFileChange = (e) => setProfilePic(e.target.files[0]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    if (!profilePic) return alert("Select a profile picture!");

    const data = new FormData();
    data.append("dp", profilePic);
    data.append("userName", formData.userName);
    data.append("age", formData.age);
    data.append("gender", formData.gender);
    data.append("area", formData.area);

    try {
      await axios.post("http://localhost:8081/api/profile", data, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true
      });
      alert("Profile saved successfully!");
    } catch (error) {
      console.error(error);
      alert("Error saving profile! Check console.");
    }
  };

  return (
    <div className='inputs'>
      <form onSubmit={handleSubmission}>
        <input
          name="userName"
          type="text"
          placeholder="Enter Your User Name"
          onChange={handleChange}
          autoComplete="username"
        />

        <div>
          <h3>Submit Your Profile Picture</h3>
          <input type="file" required onChange={handleFileChange} />
        </div>

        <select name="gender" onChange={handleChange} autoComplete="sex">
          <option>Male</option>
          <option>Female</option>
        </select>

        <input
          name='age'
          type='number'
          placeholder='Enter Your Age'
          onChange={handleChange}
          autoComplete="off"
        />

        <select name="area" onChange={handleChange} autoComplete="address-level2">
          <option>Dhaka</option>
          <option>Chittagong</option>
          <option>Rajshahi</option>
          <option>Khulna</option>
          <option>Mymensingh</option>
          <option>Rangpur</option>
          <option>Barishal</option>
        </select>

        <button type='submit'>Save Profile</button>
      </form>
    </div>
  );
};

export default CompleteProfile;
