import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet, Link, useNavigate } from "react-router-dom";

function App() {
  return (
    <>
      <h1>PokéFest</h1>
      <div className="container">
        <div class="image">
          <img src="poki.jpeg" />
        </div>
        <div class="text">
          <h1>
            “Discover, Play, and Unleash the Magic! Catch the Pokémon Fever at
            the Ultimate Pokémon Festival.”
          </h1>
        </div>
      </div>

      <div className="bottom">
        <Link to={`/login`}>
          <button class="button-27" role="button">
            Grab your spots !
          </button>
        </Link>
      </div>
    </>
  );
}

export default App;
