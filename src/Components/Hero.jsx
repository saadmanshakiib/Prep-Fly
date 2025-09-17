import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="heading">FIND YOUR STUDY PARTNER ONLINE!</h1>

        <div className="logo">
          <img src="/img/pic.png" alt="ielts" height={550} width={550} />
        </div>
      </div>

      <div className="auth-side-buttons">
        <button className="login-btn" onClick={()=>navigate("/Login")}>Login</button>
        <button className="signup-btn" onClick={()=>navigate("/SignUp")}>Sign Up</button>
      </div>
    </div>
  );
};

export default Hero;
