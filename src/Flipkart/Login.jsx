import React from "react";
import './Skincare.css';

function LoginPage(){
    return(
        <>
      <div className="bg-image">
      <div className="Login-Full">
            <div className="Login-Box">
            <h1>Login Page</h1>
            <input type="text" placeholder="Enter Email/Mobile Number" />
            <input type="password" placeholder="Enter Your Password" />
            <div className="btn-login">
                <button className="butn">Login</button>
            </div>
            <div className="forget">
                <a href="#">Forgot Password</a>
            </div>
            
        </div>
        </div>
      </div>
        
         
        </>
    )
}
export default LoginPage