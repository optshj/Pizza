import { ThemeProvider } from "styled-components"

import theme from "../styles/Color"

import Background from "./Background"
import BookComponent from "./BookComponent"
import NavigationBar from "./navBar/NavigationBar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <Background>
                {children}
                <BookComponent />
                <NavigationBar />
            </Background>
        </ThemeProvider>
    )
}
