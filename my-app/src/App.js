import "./App.css";
import Header from "./components/header";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import Section from "./components/./sections/section";
import Banner from "./components/banner";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Banner />
        <Section />
      </ThemeProvider>
    </div>
  );
}

export default App;
