import "./App.css";
import Header from "./components/header";
import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "./theme/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
