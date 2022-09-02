import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Router } from "Routers/router.js"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { themeMui } from "Constants/themeMui.js"
import { useStore } from "Hook/store/useStore.js"

const App = () => {
  const [mapStateToProps] = useStore()
  const { theme } = mapStateToProps
  const { modeIsDark } = theme

  return (
    <ThemeProvider theme={themeMui(modeIsDark)}>
      <CssBaseline />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

App.displayName = "App"

export { App }
