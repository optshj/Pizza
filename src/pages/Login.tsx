import { Route, Routes } from "react-router-dom"
import styled from "styled-components"

import Main from "../components/login/Login"
import Name from "../components/login/Name"
import Where from "../components/login/Where"
import Select from "../components/login/Select"
import Signup from "../components/login/Signup"

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function Login() {
    return (
        <Wrapper>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/name" element={<Name />} />
                <Route path="/where" element={<Where />} />
                <Route path="/select" element={<Select />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Wrapper>
    )
}
