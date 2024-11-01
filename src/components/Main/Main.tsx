import { Link } from "react-router-dom"
import styled from "styled-components"

import Header from "./components/Header"
import NavigationBar from "./components/NavigationBar"
import Item from "./components/Item"

import { ReactComponent as Ppizzangsvg } from "../../assets/character/FaceRed.svg"

import Search from "./components/Serach"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const MainPageWrapper = styled.div`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
`
const NavBar = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
`
const PpizzangBot = styled.button`
    width: 97px;
    height: 97px;
    background-color: #ffffff;
    border-radius: 48.5px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
    position: fixed;
    cursor: pointer;
    bottom: 100px;
    z-index: 1000;
    right: 20px;

    /* 각 코너별 반경 설정 */
    border-top-left-radius: 48.5px;
    border-bottom-left-radius: 48.5px;
    border-bottom-right-radius: 15.5px; /* SwiftUI와 최대한 비슷하게 설정 */
    border-top-right-radius: 48.5px;

    svg {
        margin-left: 3px;
        margin-top: 8px;
        width: 65px;
        height: 65px;
    }
    @media (min-width: 600px) {
        right: calc((100% - 600px) / 2 + 20px);
    }
`

export default function Main() {
    return (
        <Wrapper>
            <Header />
            <MainPageWrapper>
                <Search />
                <Item text={"우리동네 핫한🔥 책장"} />
                <Item text={"지금 인기있는 베스트셀러"} />
                <Item text={"ㅇㅇ님의 관심 책장"} />
            </MainPageWrapper>
            <NavBar>
                <Link to="/main/chatbot">
                    <PpizzangBot>
                        <Ppizzangsvg />
                    </PpizzangBot>
                </Link>
                <NavigationBar />
            </NavBar>
        </Wrapper>
    )
}
