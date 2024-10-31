import styled from "styled-components"
import Header from "../Main/components/Header"
import NavigationBar from "../Main/components/NavigationBar"
import Item from "./components/Item"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export default function Feed() {
    return (
        <Wrapper>
            <Header />
            <Item />
            <NavigationBar />
        </Wrapper>
    )
}
