import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import './Login.scss';

export default function Login() {
  
  const navigate = useNavigate();

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
  ];

  return (
    <div className="App">
      <div className="login-form-container">
        <h1>Iniciar sesión</h1>
        <form className="login-form">
          {inputs.map((input) => (
            <div key={input.id} className="formLogin">
              <label htmlFor={input.name}>{input.label}</label>
              <input
                {...input}
              />
    
            </div>
          ))}
          <button className="button-form" onClick={() => navigate("/")}>
            Iniciar sesión
          </button>
        </form>

        <button className="button-switch" onClick={() => navigate("/signup")}>
          ¿No tienes una cuenta? Regístrate aquí.
        </button>
      </div>
    </div>
  );
}
