import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Dash from "./Dash.jsx";
import Login from "./Login.jsx";
import Pay from "./Pay.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login/",
    element: <Login />,
  },
  {
    path: "dashboard/",
    element: <Dash />,
  },
  {
    path: "pay/",
    element: <Pay />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
