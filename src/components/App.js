import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { LightTheme } from '../themes/Light'
import { DarkTheme } from '../themes/Dark'
import { useState } from 'react'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${p => p.theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${p => p.theme.bodyFontColor};
    font-family: 'Kaushan Script', sans-serif;
  } 
`

function App() {
  const [theme, setTheme] = useState(LightTheme)

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () =>
          setTheme(s => (s.id === 'light' ? DarkTheme : LightTheme)),
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
