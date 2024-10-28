import { ThemeProvider } from "styled-components"
import UserNameProvider from "./UserNameContext"

import theme from "../styles/Color"

export default function ContextProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <UserNameProvider>{children}</UserNameProvider>
        </ThemeProvider>
    )
}
