import { ThemeProvider } from "styled-components"

import theme from "../../styles/Color"

import Background from "./Background"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <Background>{children}</Background>
        </ThemeProvider>
    )
}
