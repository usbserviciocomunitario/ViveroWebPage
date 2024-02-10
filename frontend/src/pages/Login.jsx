import React from 'react';
import LoginPage from "./../components/Login/Login";
import Arrow from "./../components/Arrow/Arrow";
import USB from "/src/assets/banners/USB.png";

const Login = () => {
  return (
    <div >
      <Arrow /> 
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <img src={USB} alt="usb" style={{width: '130px', height: '100px'}} /> 
      </div>
        <LoginPage />
    </div>
  );
};

export default Login;

