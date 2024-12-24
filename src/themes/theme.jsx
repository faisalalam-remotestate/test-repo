import React from "react";
import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,    // Extra small devices (mobile phones)
      sm: 600,  // Small devices (tablets)
      md: 900,  // Medium devices (small laptops)
      lg: 1280, // Large devices (desktops)
      xl: 1920, // Extra large devices (large desktops)
    },
  },
  palette: {
    primary: {
      main: '#C44736',
    },
    secondary: {
      main: '#C44736',
    },
    button: {
      main: '#C44736',
    },
    header: {
      main: "#C44736",
    }
  },
  typography: {
    fontFamily: 'Overpass',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.3,
    textAlign: 'left',
    body1: {
      textDecorationSkipInk: 'none',
      textUnderlinePosition: 'from-font',
    },
    h2: {
      fontFamily: 'Overlock',
      fontWeight: 900,
      fontSize: {
        xs: "40px",
        md: "54px"
      },
      lineHeight: 1.167,
    },
    h3: {
      fontFamily: 'Overlock',
      fontWeight: 900,
      fontSize: {
        xs: "32px",
      },
      lineHeight: 1.167,
    },
    p: {
      fontFamily: 'Overpass, Overlock',
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: 1.3,
    },
    span: {
      fontFamily: "Overpass",
      fontSize: "18px",
      fontWeight: 500,
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none',
        },
      },
    },
  },
  zIndex: {
    appBar: 1300
  }
});


export default responsiveFontSizes(theme);