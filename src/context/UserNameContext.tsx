import { useState, createContext, useContext } from "react"

const UserNameValueContext = createContext<string>("")
const UserNameActionContext = createContext<React.Dispatch<React.SetStateAction<string>>>(() => {})

export default function UserNameProvider({ children }: { children: React.ReactNode }) {
    const [userName, setUserName] = useState<string>("")

    return (
        <UserNameValueContext.Provider value={userName}>
            <UserNameActionContext.Provider value={setUserName}>{children}</UserNameActionContext.Provider>
        </UserNameValueContext.Provider>
    )
}
export function useUserName() {
    const setUserName = useContext(UserNameActionContext)
    const userName = useContext(UserNameValueContext)
    return { userName, setUserName }
}
