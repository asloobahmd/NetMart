import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router.jsx";
import { ThemeContextProvider } from "./Context/ThemeContext.jsx";
import theme from "./ChakraTheme/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeContextProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RouterProvider router={Router} />
      </ThemeContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
