import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  colors: {
    primary: theme.colors["green"],
  },
  fonts: {
    heading: `'Orbitron', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  styles: {
    global: {
      body: {
        backgroundColor: "black",
      },
    },
  },
});
