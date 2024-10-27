import { Route, Routes } from "react-router-dom"

import Main from "../components/Login/Login"
import Name from "../components/Login/Name"
import Where from "../components/Login/Where"
import Select from "../components/Login/Select"
import Signup from "../components/Login/Signup"

export default function Login() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/name" element={<Name />} />
            <Route path="/where" element={<Where />} />
            <Route path="/select" element={<Select />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}
