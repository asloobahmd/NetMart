import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router.jsx";
import { ThemContextProvider } from "./Context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemContextProvider>
        <RouterProvider router={Router} />
      </ThemContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
