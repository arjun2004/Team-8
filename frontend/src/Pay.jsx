import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { MdCatchingPokemon } from "react-icons/md";

function Pay() {
  return (
    <>
      <div>
        <h1>
          {" "}
          <MdCatchingPokemon />
          PokéFest
        </h1>
        <div class="wrapper poy">
          <div class="container1">
            <form action="">
              <h1>
                <i class="fas fa-shipping-fast"></i>
                Shipping Details
              </h1>
              <div class="name">
                <div>
                  <label for="f-name">First name</label>&nbsp;
                  <input type="text" name="f-name" />
                </div>
                &nbsp;
                <div>
                  <label for="l-name">Last name</label>&nbsp;
                  <input type="text" name="l-name" />
                </div>
              </div>

              <div class="address-info">
                &nbsp;
                <div>
                  <label for="state">State</label>&nbsp;
                  <input type="text" name="state" />
                </div>
                &nbsp;
                <div>
                  <label for="zip">Pincode</label>&nbsp;
                  <input type="text" name="zip" />
                </div>
              </div>
              <h1>Payment Information</h1>

              <div class="cc-info">
                <div>
                  <label for="card-num">Credit Card No.</label>&nbsp;
                  <input type="text" name="card-num" />
                  <label for="card-num">Exp</label>&nbsp;
                  <input type="text" name="expire" />
                  <label for="card-num">CCV</label>&nbsp;
                  <input type="text" name="security" />
                </div>
                <br />
                <div></div>
              </div>
              <div class="btns">
                <button className="button-27">Purchase</button>
                <br />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pay;
