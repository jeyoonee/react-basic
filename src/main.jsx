import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppProfile from "./AppProfile.jsx";
import AppCounter from "./AppCounter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppCounter />
  </StrictMode>
);
