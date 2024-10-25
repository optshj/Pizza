import { Route, Routes } from "react-router-dom"
import styled from "styled-components"

import Main from "../components/Login/Login"
import Name from "../components/Login/Name"
import Where from "../components/Login/Where"
import Select from "../components/Login/Select"
import Signup from "../components/Login/Signup"

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
