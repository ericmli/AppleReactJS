import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import theme from "../theme/theme"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
