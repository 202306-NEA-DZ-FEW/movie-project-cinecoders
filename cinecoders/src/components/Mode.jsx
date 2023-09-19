import { useState } from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { Container, CssBaseline, Switch, Typography } from "@mui/material"

function Mode() {
  const [darkMode, setDarkMode] = useState(true)

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)",
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      </Container>
    </ThemeProvider>
  )
}

export default Mode
