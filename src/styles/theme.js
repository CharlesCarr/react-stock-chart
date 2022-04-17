import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./ButtonStyles";

export const customTheme = extendTheme({
  breakpoints: {
    sm: "250px",
    md: "480px",
    lg: "900px",
    xl: "1500px",
    "2xl": "1600px",
  },
  fonts: {
    heading: "Exo, sans-serif",
    body: "Exo, sans-serif",
  },
  colors: {
    background: "linear-gradient(119.36deg, #464C6E 0%, #272B45 100%);",
    componentbg: "linear-gradient(135deg, #495076 0%, #404669 100%)",
    primary: "#323647",
    dark: "#2d324d",
  },
  components: {
    Button,
  },
});
