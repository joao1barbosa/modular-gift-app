import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const bgColor = import.meta.env.VITE_BACKGROUND_COLOR || "#090909";
document.body.style.backgroundColor = bgColor;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
