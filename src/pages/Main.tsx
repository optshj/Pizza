import styled from "styled-components"
import NavigationBar from "../components/Layout/navBar/NavigationBar"

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export default function Main() {
    return (
        <>
            <NavigationBar />
        </>
    )
}
