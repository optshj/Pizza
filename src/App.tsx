import { BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Login from "./pages/Login"

export default function App() {
    return (
        <BrowserRouter basename="/Pizza">
            <Layout>
                <Login />
            </Layout>
        </BrowserRouter>
    )
}
