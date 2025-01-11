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

    //icone colors light
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
});

// Export the theme
export default theme;
