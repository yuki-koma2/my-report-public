import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./ui/App.jsx";
import "../assets/styles.css";

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
