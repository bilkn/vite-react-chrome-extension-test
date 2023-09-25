import { createTheme, Shadows } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});
const customShadows = Array(25).fill("none") as Shadows;
customShadows[1] = "0px 2px 4px 0px rgba(0, 0, 0, 0.25);";
customShadows[2] = "0px 1px 4px 0px rgba(201, 201, 201, 0.50);";

const theme = createTheme({
  palette: {
    background: {
      default: "#FFFBFF",
    },
    primary: {
      main: "#9C4146",
    },
    secondary: {
      main: "#775656",
      dark: "#775656",
      light: "#775656",
    },
    warning: {
      main: "#DE3131",
      light: "#de3131cc",
    },
    text: {
      primary: "#1D1B20",
      secondary: "#49454F",
    },
    grey: {
      300: "#F6F2F5",
    },
  },
  shadows: customShadows,
  shape: {
    borderRadius: 10,
  },
  typography: {
    body1: {
      fontSize: "2rem",
    },
    body2: {
      fontSize: "1.6rem",
    },
    h1: {
      fontSize: "2.5rem",
    },
    button: {
      fontSize: "1.4rem",
      fontWeight: 500,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1536,
    },
  },
  spacing: 4,
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: customShadows[2],
          backgroundColor: "#FFF9EF",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: "#9C4146 !important",
        },
        containedSecondary: {
          backgroundColor: "#775656 !important",
        },
      },
    },
  },
});

export default theme;
