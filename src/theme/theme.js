import { extendTheme } from "@chakra-ui/react";
import "@fontsource/orbitron";
import "@fontsource/roboto-mono";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#0A0B1E",
        color: "#E5E7FF",
      },
    },
  },
  fonts: {
    heading: `'Orbitron', sans-serif`,
    body: `'Roboto Mono', monospace`,
  },
  colors: {
    brand: {
      primary: "#00FF9D", // Neon green for crypto vibes
      secondary: "#7B3FE4", // Purple for blockchain
      accent: "#00C8FF", // Cyan for tech feel
      dark: "#0A0B1E", // Deep space black
      light: "#E5E7FF", // Ethereal white
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "4px",
        textTransform: "uppercase",
        letterSpacing: "1px",
      },
      variants: {
        solid: {
          bg: "brand.primary",
          color: "brand.dark",
          _hover: {
            bg: "brand.accent",
          },
        },
      },
    },
  },
});

export default theme;
