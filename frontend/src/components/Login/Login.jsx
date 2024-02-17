import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Login.scss";
import USB from "/src/assets/banners/USB.png";

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/session/login", {
        user_email: data.email,
        password: data.password,
      });

      if (response.status === 200) {
        navigate("/");
      } else {
        console.log("Error al iniciar sesión");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "text",
      placeholder: "Correo electrónico",
      label: "Correo electrónico",
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
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-70px",
        }}
      >
        <img src={USB} alt="usb" style={{ width: "130px", height: "100px" }} />
      </div>
      <div className="App">
        <div className="login-form-container">
          <h1>Iniciar sesión</h1>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            {inputs.map((input) => (
              <div key={input.id} className="formLogin">
                <label htmlFor={input.name}>{input.label}</label>
                <input
                  {...register(input.name, { required: true })}
                  type={input.type}
                />
              </div>
            ))}
            <button className="button-form" type="submit">
              Iniciar sesión
            </button>
          </form>

          <button className="button-switch" onClick={() => navigate("/signup")}>
            ¿No tienes una cuenta? Regístrate aquí.
          </button>
        </div>
      </div>
    </>
  );
}
