import UserNameProvider from "./UserNameContext"

export default function ContextProvider({ children }: { children: React.ReactNode }) {
    return <UserNameProvider>{children}</UserNameProvider>
}
