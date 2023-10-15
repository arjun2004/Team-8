import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import App from "./App";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { MdCatchingPokemon } from "react-icons/md";

function Login() {
  return (
    <>
      <Link className="dec" to={`/`}>
        <h1>
          <MdCatchingPokemon />
          PokéFest
        </h1>
      </Link>
      <div class="main-login-form">
        <form action="#" method="POST">
          <label for="Username">Username</label>
          <input
            type="email"
            name="username"
            class="email"
            placeholder="Enter your username"
            required
          />

          <label for="Password">Password</label>
          <input
            type="password"
            name="password"
            class="password"
            placeholder="Enter your password"
            required
          />
          <Link to={`/dashboard`}>
            <input
              className="button-27"
              name="submit"
              type="submit"
              value="Submit"
            />
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;
