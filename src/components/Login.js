import React from 'react'
import './Login.css'
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import ppImage from './p.png'

const Login = ({ setIsAuth }) => {
  
    let navigate = useNavigate();

    const signInWithGoogle = () => {
      signInWithPopup(auth, provider).then((res) => {
        localStorage.setItem("isAuth", true)
        setIsAuth(true);
        navigate("/");
      })
    }

  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
              <img src={ppImage} alt="profile" className="profile"/>
           </div>
         </div>
         <div>
           <h1>Login Page</h1>
          <div className="login-button">
          <button onClick={signInWithGoogle}>Sign In With Google</button>
          </div>
         </div>
       </div>
     </div>
    </div>
  )
}

export default Login