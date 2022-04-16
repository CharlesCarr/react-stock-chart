import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@fontsource/exo"
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from '../src/styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
