import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import * as React from "react";

// 1. Import the extendTheme function and import `ChakraProvider` component
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);