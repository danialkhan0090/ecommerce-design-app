import "./App.css";
import Header from "./components/header";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import Header2 from "./components/sub-header";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Header2 />
      </ThemeProvider>
    </div>
  );
}

export default App;
