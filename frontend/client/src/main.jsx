import React from "react";
import { createRoot } from "react-dom/client";  // Perubahan di sini
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Gunakan createRoot dari "react-dom/client"
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
