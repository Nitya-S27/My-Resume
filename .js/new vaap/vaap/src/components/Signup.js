import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.scss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

const Signup = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    organization: "",
    role: "",
  });
  const [confPassword, setConfPassword] = useState("");
  const handleInputChange = (event) => {
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(data));
  };
  return (
    <div className="signupWrapper">
      <div className="logoDiv">
        <div className="backArrowDiv">
          <IconButton>
            <Link to="/login" className="btn">
              <ArrowBackIcon />
            </Link>
          </IconButton>
        </div>
        <img className="logoImage" src="logoWhite.png" alt="bluelogo" />
      </div>
      <div className="formDiv">
        <form
          action=""
          className="signupForm"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="formHeader">Sign up for an account</div>
          <div className="row">
            <input
              required
              className="textfield"
              type="text"
              name="username"
              value={data.username}
              placeholder="Username"
              onChange={handleInputChange}
            />
          </div>
          <div className="row">
            <input
              required
              className="textfield"
              type="password"
              name="password"
              value={data.password}
              placeholder="Password"
              onChange={handleInputChange}
            />
            <input
              required
              className="textfield"
              type="password"
              name="confPassword"
              placeholder="Confirm Password"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
          </div>
          <div className="row">
            <input
              required
              className="textfield"
              type="text"
              name="firstName"
              value={data.firstName}
              placeholder="First Name"
              onChange={handleInputChange}
            />
            <input
              required
              className="textfield"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={data.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="row">
            <input
              required
              className="textfield"
              type="email"
              name="email"
              value={data.email}
              placeholder="Email address"
              onChange={handleInputChange}
            />
            <input
              required
              className="textfield"
              type="text"
              name="phone"
              placeholder="Phone"
              value={data.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="row">
            <input
              required
              className="textfield"
              type="text"
              name="address"
              value={data.address}
              placeholder="Address"
              onChange={handleInputChange}
            />
            <input
              required
              className="textfield"
              type="text"
              name="city"
              placeholder="City"
              value={data.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="row">
            <input
              required
              className="textfield"
              type="text"
              name="state"
              value={data.state}
              placeholder="State"
              onChange={handleInputChange}
            />
            <input
              required
              className="textfield"
              type="text"
              name="zip"
              placeholder="Zip"
              value={data.zip}
              onChange={handleInputChange}
            />
          </div>
          <div className="row">
            <div className="col">
              <div className="text">Select your organization</div>
              <FormControl fullWidth variant="filled" className="select">
                <Select
                  id="demo-simple-select"
                  value={data.organization}
                  label="organization"
                  name="organization"
                  onChange={handleInputChange}
                  className="select2"
                >
                  <MenuItem className="menuItem" value={"Org 1"}>
                    Org 1
                  </MenuItem>
                  <MenuItem className="menuItem" value={"Org 2"}>
                    Org 2
                  </MenuItem>
                  <MenuItem className="menuItem" value={"Org 3"}>
                    Org 3
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col">
              <div className="text">Select your role</div>
              <FormControl fullWidth variant="filled" className="select">
                <Select
                  id="demo-simple-select"
                  value={data.role}
                  label="role"
                  name="role"
                  onChange={handleInputChange}
                  className="select2"
                  placeholder="ahbf"
                >
                  <MenuItem className="menuItem" value={"Role 1"}>
                    Role 1
                  </MenuItem>
                  <MenuItem className="menuItem" value={"Role 2"}>
                    Role 2
                  </MenuItem>
                  <MenuItem className="menuItem" value={"Role 3"}>
                    Role 3
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <Button className="signupButton" variant="contained" type="submit">
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
