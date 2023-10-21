import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import i18n from "./i18n";
import { I18nContext } from "./i18n";

// 1. Import the extendTheme function and import `ChakraProvider` component
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({
  colors,
  breakpoints: {
    mob: "320px",
    mobMax: "480px",
    tab: "768px",
    tabMax: "960px",
    desk: "1280px",
    deskMax: "1536px",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter basename="/">
        <I18nContext.Provider
          value={{
            changeLanguage: i18n.changeLanguage,
            language: i18n.language,
          }}
        >
          <App />
        </I18nContext.Provider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
