import React from "react";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate= useNavigate()
const auth = useContext(AuthContext)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((res) => {
        alert("success");
        // console.log(res);

        auth.handleLogin(res.token);
        navigate("/Home");
      })
      .catch((error) => {});
  }
 
  return (
    <div>
      Login
      <br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="enter email"
            onChange={handleChange}
            value={formData.email}
            name="email"
            type="text"
          />
        </div>
        <div>
          <input
            placeholder="enter password"
            onChange={handleChange}
            value={formData.password}
            name="password"
            type="password"
          />{" "}
        </div>
        <div>
          {" "}
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
