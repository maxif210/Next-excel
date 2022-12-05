import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  colors: {
    primary: theme.colors["yellow"],
  },
  fonts: {
    heading: `'Orbitron', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  styles: {
    global: {
      body: {
        backgroundColor: "#000000",
        backgroundImage: "linear-gradient(147deg, #000000 0%, #FF2525 74%)",
      },
    },
  },
});
