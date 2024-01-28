import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import './Signup.scss';

const Signup = () => {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    password: "",
    fullName: "",
    birthDate: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Nombre de usuario",
      label: "Nombre de usuario",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Contraseña",
      label: "Contraseña",
      required: true,
    },
    {
      id: 3,
      name: "fullName",
      type: "text",
      placeholder: "Nombre completo",
      label: "Nombre completo",
      required: true,
    },
    {
      id: 4,
      name: "birthDate",
      type: "date",
      placeholder: "Fecha de nacimiento",
      label: "Fecha de nacimiento",
      required: true,
    },
    
  ];

  return (
    <div className="App">
      <div className="auth-form-container">
        <h1>Registrarse</h1>
        <form className="register-form">
          {inputs.map((input) => (
            <div key={input.id} className="formRegister">
              <label htmlFor={input.id}>{input.label}</label>
                <input
                  {...input}
                  value={values[input.name]}  
                />
            </div>
          ))}
          <button className="button-form" onClick={() => navigate("/login")}>
            Registrarse
          </button>
        </form>
        <button className="button-switch" onClick={() => navigate("/login")}>
          ¿Ya tienes una cuenta? Inicia sesión aquí.
        </button>
      </div>
    </div>
  );
};

export default Signup;