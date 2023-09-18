import { useState } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Container, CssBaseline, Switch } from "@material-ui/core";

function Mode() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <>Dark mode</>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      </Container>
    </ThemeProvider>
  );
}

export default Mode;
