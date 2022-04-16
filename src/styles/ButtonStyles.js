import { darken, mode, whiten } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
  baseStyle: {},

  sizes: {},

  variants: {
    primary: (props) => ({
      bg: "primary",
      color: "white",
      _hover: {
        bg: mode(darken("primary", 20), whiten("primary", 20))(props),
        boxShadow: "md",
      },
    }),
    primaryOutline: (props) => ({
      bg: "dark",
      boxShadow: "md",
      // border: "1px solid",
      // borderColor: "white",
      color: "white",
      _hover: {
        boxShadow: "xl",
        transform: "scale(1.01)",
      },
    }),
  },

  defaultProps: {},
};
