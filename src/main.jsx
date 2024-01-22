import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// Bootstrap Initialization
import "bootstrap/dist/css/bootstrap.min.css";
// Application's Style
import "./css/app.css";
// Customs Library
import "./css/index.css";
// Fonts Library
import "./css/fonts.css";
// Icons Library
import "./css/icons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
