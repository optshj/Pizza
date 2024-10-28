import { BrowserRouter, Routes, Route } from "react-router-dom"

import ContextProvider from "./context/ContextProvider"

import Layout from "./components/Layout/Layout"
import Login from "./pages/Login"
import Main from "./pages/Main"

export default function App() {
    return (
        <ContextProvider>
            <BrowserRouter basename="/Pizza">
                <Layout>
                    <Routes>
                        <Route path="/*" element={<Login />} />
                        <Route path="/main/*" element={<Main />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </ContextProvider>
    )
}
