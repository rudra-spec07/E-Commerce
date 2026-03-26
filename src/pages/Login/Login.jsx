import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (form.name && form.email) {
      dispatch(login(form.name));
      navigate("/");
    }
  };

  return (
    <div className="login-container">

      <form className="login-card" onSubmit={handleSubmit}>

        <h2 className="login-title">Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="contact"
          placeholder="Contact Number"
          value={form.contact}
          onChange={handleChange}
          required
        />

        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input
          type="password"
          name="password"
          placeholder="Set Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit" className="login-btn">
          Sign Up
        </button>

      </form>

    </div>
  );
};

export default Login;
