import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppMentorsImmer from "./AppMentorsImmer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppMentorsImmer />
  </StrictMode>
);
