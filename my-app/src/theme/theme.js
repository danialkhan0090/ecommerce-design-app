import { createTheme } from "@mui/material/styles";

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      //appBar color light
      light: "#FFFFFF",
      main: "#1976d2",
      dark: "#004ba0",
      contrastText: "#fff",
    },

    //icone colors
    secondary: {
      light: "#ff5983",
      main: "#0D6EFD",
      dark: "#9a0036",
      contrastText: "#fff",
    },
    background: {
      light: "#ffffff",
      main: "#f4f6f8",
      dark: "#c1c3c5",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8, // default is 8px
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 50,
        },
      },
    },
  },
});

// Export the theme
export default theme;
