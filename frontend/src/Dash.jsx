import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import App from "./App";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { MdCatchingPokemon } from "react-icons/md";

function Dash() {
  return (
    <>
      <Link className="dec" to={`/`}>
        <h1>
          <MdCatchingPokemon />
          PokéFest
        </h1>
      </Link>
      <div>
        <div className="game">
          <h2>Games</h2>
          <hr />
          <h3>1.Pokémon Trivia Challenge: </h3>
          <p>
            Create a Pokémon trivia game where participants answer questions
            related to the Pokémon world. You can have different rounds with
            varying difficulty levels. To make it interactive, use a mobile app
            or a web interface where attendees can join in real-time, answer
            questions, and earn points. The top scorers can win Pokémon-themed
            prizes.
          </p>
          <h3>2.Pokémon Scavenger Hunt: </h3>
          <p>
            Design a Pokémon-themed scavenger hunt throughout the festival
            grounds. Provide participants with a list of Pokémon they need to
            find or clues to locate hidden Pokémon-related items. You can use QR
            codes and a dedicated mobile app to track progress and validate
            findings. The participants who complete the hunt within a set time
            could win exclusive Pokémon merchandise.
          </p>
        </div>
        <br />
        <div className="food">
          <h2>Culinary Adventures</h2>
          <hr />
          <h3>1. Pizzeria: </h3>
          <p>
            {" "}
            <ul>
              <li>
                {" "}
                Pikachu Pizza (Cheese, Pepperoni, and Pineapple with Pikachu
                face)
              </li>
              <li>
                Poké Ball Calzones (Folded pizza with tomato sauce and cheese)
              </li>
              <li>Thunderbolt Garlic Breadsticks</li>
            </ul>
          </p>
          <h3>2. Charizard’s Char-Grill:</h3>
          <p>
            <ul>
              <li>Charizard Flame-Grilled Burgers (Spicy BBQ Burgers)</li>
              <li>Fire Blast Hot Wings</li>
              <li>Dragon Tail BBQ Skewers</li>
            </ul>
          </p>
          <h3>3. Squirtle’s Seafood Shack:</h3>
          <p>
            <ul>
              <li>
                Squirtle’s Seafood Platter (Fried fish, shrimp, and calamari)
              </li>
              <li>Surf and Turf Tacos</li>
            </ul>
          </p>
        </div>
        <div className="music">
          <h2>Music Fest</h2>
          <hr />
          <h3>1. Pokémon Theme Song by Jason Paige The classic Hit maker</h3>
          <p>
            {" "}
            Performance of Different Pokémon Theme songs by your favourite
            hit-maker Jason Paige. As a vocalist Jason toured for a year as the
            lead singer for legendary band Blood Sweat & Tears. He shared the
            stage with Michael Jackson as the rap soloist for the hit song
            “Black or White” in Michael Jacksons 30th Anniversary concert at
            Madison Square Garden aired on CBS. He can be heard on Foreigner’s
            “Cant Slow Down”, Meatloaf’s “Bat Outta Hell 3”, The Scorpions “Hour
            1”, Frankie Valli’s “Romancing the 60’s” and on “The Art of
            McCartney” tribute CD behind Billy Joel, Roger Daltrey, Kiss and
            Smokey Robinson among others. His voice is featured in “Rick And
            Morty”, “Phinaes & Ferb”, “Sponge Out of Water”, “The Jersey Boys”,
            “Annie” with Kermit and Miss Piggy in the last “Muppet Movie” and a
            salad of singing food characters in “Sausage Party”. He has sang and
            beat-boxed with Aerosmith on tour and on the Howard Stern re-mix of
            the hit single “Pink” and has performed with Enrique Iglesias on
            tour, television and can be heard on his CD “7”.
            <br />
            <br />
            <Link to={`/pay`}>
              <button className="button-27 cnt">Book your ticket!</button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Dash;
