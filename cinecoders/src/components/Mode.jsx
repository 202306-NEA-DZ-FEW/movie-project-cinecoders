import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles"; // Update this line
import { Container, CssBaseline, Switch, Typography } from "@mui/material";

function Mode() {
  const [darkMode, setDarkMode] = useState(false);


const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light", 
      background: {
        default: darkMode ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)"
      }
    }
  });
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          Dark mode
        </Typography>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      </Container>
    </ThemeProvider>
  );
}

export default Mode;
