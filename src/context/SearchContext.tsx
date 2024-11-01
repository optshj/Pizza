import React, { createContext, useState, ReactNode } from "react"

const SearchValueContext = createContext<string>("")
const SearchActionContext = createContext<React.Dispatch<React.SetStateAction<string>>>(() => {})

export default function SearchProvider({ children }: { children: ReactNode }) {
    const [searchTerm, setSearchTerm] = useState<string>("")

    return (
        <SearchValueContext.Provider value={searchTerm}>
            <SearchActionContext.Provider value={setSearchTerm}>{children}</SearchActionContext.Provider>
        </SearchValueContext.Provider>
    )
}

export function useSearch() {
    const searchTerm = React.useContext(SearchValueContext)
    const setSearchTerm = React.useContext(SearchActionContext)
    return { searchTerm, setSearchTerm }
}
