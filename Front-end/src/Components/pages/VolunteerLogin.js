import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/VolunteerLogin.css";
import { useNavigate } from "react-router-dom";
const VolunteerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [volunteer_login, setVolunteers] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate=useNavigate();

  useEffect(() => {
    Load();
  }, []);

  const Load = async () => {
    try {
      const result = await axios.get('http://localhost:8080/login/get');
      setVolunteers(result.data);
      console.log(result.data);
    } catch (err) {
      console.error('Error loading data:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    const passRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;

    const emailRegex = /\S+@\S+\.\S+/;

    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (!passRegex.test(password)) {
      errors.password =
        'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const save = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        await axios.post(
          'http://localhost:8080/login/log_in',
          {
            email: email,
            password: password,
          },
          {
            withCredentials: true, // Include credentials
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        alert('Volunteer login has been done successfully');
        setEmail('');
        setPassword('');
      } catch (err) {
        alert('Volunteer login Failed');
      }
      // Replace with your React Router navigation code
       navigate('/volunteerProfile');
    }
  };

  return (
    <div className="main-login">
      <form className="myform">
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="label-control">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
            required
            id="email"
            value={email}
            onChange={handleChange}
            name="email"
          />
          {errors.email && (
            <div className="error" style={{ color: 'red' }}>
              {errors.email}
            </div>
          )}

          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" className="label-control">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <div className="error" style={{ color: 'red' }}>
              {errors.password}
            </div>
          )}
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary " onClick={save}>
            Login
          </button>
        </div>

        <p>
          <a href="/volunteerRegister">Don't have an account?</a>
        </p>
      </form>
    </div>
  );
};

export default VolunteerLogin;

