import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { GlobalStyles } from "./styles/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import router from "../src/routes.jsx";
import { Button } from "./components/Button/styles.js";
import Home from "./pages/Home/index.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
  
    <RouterProvider router={router} />
  </StrictMode>
);
