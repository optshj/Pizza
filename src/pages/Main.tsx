import styled from "styled-components"
import { Route, Routes } from "react-router-dom"

import Home from "../components/Main/Main"

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function Main() {
    return (
        <Wrapper>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </Wrapper>
    )
}
