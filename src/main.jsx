import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Portfolio from "./views/Portfolio.jsx";
import About from "./views/About.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
      <Portfolio />
      <About />
    </ChakraProvider>
  </React.StrictMode>
);
