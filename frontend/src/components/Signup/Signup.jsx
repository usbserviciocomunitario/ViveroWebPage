import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import "./Signup.scss";

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/user/register", {
        user_email: data.email,
        password: data.password,
        user_detail: {
          user_name: data.fullName,
          user_address: data.address,
          user_docid: data.idNumber,
          user_birthdate: data.birthDate,
        }
      });

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "¡Registro exitoso!",
        });
        navigate("/login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error al registrarse",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Nombre completo",
      label: "Nombre completo",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Correo electrónico",
      label: "Correo electrónico",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Contraseña",
      label: "Contraseña",
      required: true,
    },
    {
      id: 4,
      name: "idNumber",
      type: "number",
      placeholder: "Número de cédula",
      label: "Número de cédula",
      required: true,
    },
    {
      id: 5,
      name: "birthDate",
      type: "date",
      placeholder: "Fecha de nacimiento",
      label: "Fecha de nacimiento",
      required: true,
    },
    {
      id: 6,
      name: "address",
      type: "text",
      placeholder: "Dirección",
      label: "Dirección",
      required: true,
    },
  ];

  return (
    <div className="App">
      <div className="auth-form-container">
        <h1>Registrarse</h1>
        <form
          className="register-form"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1em",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          {inputs.map((input, index) => (
            <div key={input.id} className="formRegister">
              <label htmlFor={input.name}>{input.label}</label>
              <input {...register(input.name, { required: true })} type={input.type} />
            </div>
          ))}
          <button
            className="button-form"
            style={{ gridColumn: "span 2", justifySelf: "center" }}
            type="submit"
          >
            Registrarse
          </button>
          <button
            className="button-switch"
            style={{ gridColumn: "span 2", justifySelf: "center" }}
            onClick={() => navigate("/login")}
          >
            ¿Ya tienes una cuenta? Inicia sesión aquí.
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
