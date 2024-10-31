import styled from "styled-components"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Item from "./components/Item"

import cartData from "../../data/cart.json"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const ItemWrapper = styled.div`
    overflow-y: auto;
    margin-top: 80px;
    padding-bottom: 140px;
`

export default function Basket() {
    return (
        <Wrapper>
            <Header />
            <ItemWrapper>
                {cartData.users.map((data: any, index: any) => (
                    <Item key={index} level={data.level} userName={data.userName} components={data.components} />
                ))}
            </ItemWrapper>
            <Footer />
        </Wrapper>
    )
}
