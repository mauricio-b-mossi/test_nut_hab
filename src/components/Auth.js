import React, { useState, useContext } from "react";
import { Context } from "../helper/Context";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie";

const Auth = () => {
  const [userData, setUserData] = useState({});
  // get setIsAdmin from LoginContext
  const { setIsAdmin } = useContext(Context);
  const { isAdmin } = useContext(Context);

  const handleProtected = async (e) => {
    const headers = {
      // COOKIE NAME
      authorization: `Bearer ${Cookie.get("jwt")}`,
    };
    // IMPORTANT TO SEND HEADERS
    const response = await axios.get("http://localhost:5000/auth/protected", {
      headers,
    });
    console.log(response.data.message);
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(userData);
  };

  const handleSignup = async (e) => {
    // To avoid page reload
    e.preventDefault();

    const response = await axios.post("http://localhost:5000/auth/signin", {
      data: userData,
    });
    console.log(response.data);
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:5000/auth/login", {
      data: userData,
    });
    // The key
    if (response.data.token) {
      Cookie.set("jwt", response.data.token);
      setIsAdmin(true)
      console.log(isAdmin);
    }

    console.log(response.data.token);
  };
  return (
    <div className="form_container">
      <form action="submit" onChange={handleChange}>
        <div>
          <label for="username">Username: </label>
        </div>

        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
        />
        <br />
        <br />
        <div>
          <label for="password">Password: </label>
        </div>
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
        />
        <br />
        <br />
        {/* <input type="submit" value="SignUp" onClick={handleSignup} /> */}
        <div>
          <input
            type="submit"
            value="Login"
            onClick={handleLogin}
            className="btn-submit"
          />
        </div>
        {/* <input
          type="submit"
          value="Login"
          onClick={handleLogin}
          className="btn-submit"
        /> */}
      </form>
    </div>
  );
};

export default Auth;
