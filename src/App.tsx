import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./Styles/themes/default"
import { GlobalStyle } from "./Styles/global"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div>Hello world</div>
    </ThemeProvider>
  )
}