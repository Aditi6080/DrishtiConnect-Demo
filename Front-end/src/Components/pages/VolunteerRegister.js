import React, { useState, useEffect } from "react";
import "../css/VolunteerRegister.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const VolunteerRegister = ({ onRegister }) => {
  const [id, setId] = useState("");
  const [full_Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [volunteer_register, setVolunteers] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "fullName":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "city":
        setCity(value);
        break;
      case "state":
        setState(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "zip":
        setZip(value);
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
    if (!full_Name) {
      errors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (!passRegex.test(password)) {
      errors.password =
        " Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character";
      isValid = false;
    }

    if (!address) {
      errors.address = "Address is required";
      isValid = false;
    }

    if (!city) {
      errors.city = "City is required";
      isValid = false;
    }

    if (!state) {
      errors.state = "State is required";
      isValid = false;
    }
    if (!country) {
      errors.country = "Country is required";
      isValid = false;
    }
    if (!zip) {
      errors.zip = "Zip is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get("http://localhost:8080/getAll");
    setVolunteers(result.data);
    console.log(result.data);
  }

  async function save(event) {
    event.preventDefault();
    onRegister(full_Name); // Pass the value to the onSubmit function provided as a prop
    //setName(""); // Reset input value after submission
    if (validateForm()) {
      try {
        console.log("State values:", {
          full_Name,
          email,
          password,
          address,
          city,
          state,
          country,
          zip,
        });
        
        await axios.post("http://localhost:8080/save", {
          full_Name,
          email,
          password,
          address,
          city,
          state,
          country,
          zip,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        alert("Volunteer registation has been done successfully");
        setId("");
        setName("");
        setEmail("");
        setPassword("");
        setAddress("");
        setCity("");
        setState("");
        setCountry("")
        setZip("");
        Load();
      } catch (err) {
        alert("Volunteer Registation Failed");
      }
      navigate("/volunterLogin");
    }
  }

  return (
    <div className="main-register">
      <form className="myform">
        <h1 className="regHeading">Sign Up</h1>
        <div class="form-group col-md-12">
          <label for="Name" className="label-control">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            class="form-control"
            placeholder="Enter Your Name"
            value={full_Name}
            onChange={handleChange}
            required
            id="full_Name"
          />
          {errors.fullName && (
            <div className="error" style={{ color: "red" }}>
              {errors.fullName}
            </div>
          )}
        </div>
        <div class="form-group col-md-12">
          <label for="inputEmail4" className="label-control">
            Email
          </label>
          <input
            type="email"
            name="email"
            class="form-control"
            placeholder="Email"
            required
            id="email"
            value={email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="error" style={{ color: "red" }}>
              {errors.email}
            </div>
          )}
        </div>
        <div class="form-group col-md-12">
          <label for="inputPassword4" className="label-control">
            Password
          </label>
          <input
            type="password"
            name="password"
            class="form-control"
            placeholder="Password"
            id="password"
            value={password}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <div className="error" style={{ color: "red" }}>
              {errors.password}
            </div>
          )}
        </div>
        <div class="form-group col-md-12">
          <label for="inputAddress" className="label-control">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            name="address"
            placeholder="1234 Main Station.."
            required
            id="address"
            value={address}
            onChange={handleChange}
          />
          {errors.address && (
            <div className="error" style={{ color: "red" }}>
              {errors.address}
            </div>
          )}
        </div>
        <div class="form-group col-md-12">
          <label for="inputCity" className="label-control">
            City
          </label>
          <input
            type="text"
            name="city"
            class="form-control"
            placeholder="City"
            required
            id="city"
            value={city}
            onChange={handleChange}
          />
          {errors.city && (
            <div className="error" style={{ color: "red" }}>
              {errors.city}
            </div>
          )}
        </div>
        <div class="form-group col-md-12">
          <label for="inputState" className="label-control">
            State
          </label>
          <input
            type="text"
            name="state"
            class="form-control"
            placeholder="State"
            id="state"
            value={state}
            onChange={handleChange}
            required
          />
          {errors.state && (
            <div className="error" style={{ color: "red" }}>
              {errors.state}
            </div>
          )}
        </div>

        <div class="form-group col-md-12">
          <label for="inputState" className="label-control">
            Country
          </label>
          <input
            type="text"
            name="country"
            class="form-control"
            placeholder="Country"
            id="country"
            value={country}
            onChange={handleChange}
            required
          />
          {errors.country && (
            <div className="error" style={{ color: "red" }}>
              {errors.country}
            </div>
          )}
        </div>

        <div class="form-group col-md-12">
          <label for="inputZip" className="label-control">
            Pincode
          </label>
          <input
            type="text"
            name="zip"
            class="form-control"
            placeholder="PinCode"
            required
            id="zip"
            value={zip}
            onChange={handleChange}
          />
          {errors.zip && (
            <div className="error" style={{ color: "red" }}>
              {errors.zip}
            </div>
          )}
        </div>

        <div class="text-center">
          <button type="submit" class="btn btn-primary" onClick={save}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerRegister;
