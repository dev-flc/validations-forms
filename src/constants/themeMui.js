import { createTheme } from "@mui/material/styles"

export const themeMui = (isDark = false) =>
  createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  })
