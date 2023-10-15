import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { MdCatchingPokemon } from "react-icons/md";
function App() {
  return (
    <>
      <Link className="dec" to={`/`}>
        <h1>
          <MdCatchingPokemon />
          PokéFest
        </h1>
      </Link>
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
