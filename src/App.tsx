import Layout from "./components/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<div></div>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}
