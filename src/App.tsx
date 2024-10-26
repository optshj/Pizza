import { BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Login from "./pages/Login"
import ContextProvider from "./context/ContextProvider"
import Main from "./pages/Main"

export default function App() {
    return (
        <ContextProvider>
            <BrowserRouter basename="/Pizza">
                <Layout>
                    <Login />
                    <Main />
                </Layout>
            </BrowserRouter>
        </ContextProvider>
    )
}
