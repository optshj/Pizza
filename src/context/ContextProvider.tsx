import { ThemeProvider } from "styled-components"
import UserNameProvider from "./UserNameContext"

import theme from "../styles/Color"
import AddressProvider from "./AddressContext"
import PriceProvider from "./PriceContext"
import SearchProvider from "./SearchContext"

export default function ContextProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <AddressProvider>
                <PriceProvider>
                    <SearchProvider>
                        <UserNameProvider>{children}</UserNameProvider>
                    </SearchProvider>
                </PriceProvider>
            </AddressProvider>
        </ThemeProvider>
    )
}
