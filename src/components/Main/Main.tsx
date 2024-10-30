import styled from "styled-components"

import Header from "./components/Header"
import NavigationBar from "./components/NavigationBar"
import Item from "./components/Item"

import { ReactComponent as Searchsvg } from "../../assets/icon/search-svgrepo-com.svg"
import { ReactComponent as Ppizzangsvg } from "../../assets/character/FaceRed.svg"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const MainPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
    min-height: 100vh;
    background-color: #f5f5f5;
    margin: 0 auto;
    gap: 25px;
`

const SearchWrapper = styled.div`
    display: flex;
    width: 350px;
    height: 50px;
    border-radius: 26.5px;
    justify-content: space-around;
    background-color: rgba(229, 229, 229, 1);
    border: 2px solid rgba(235, 172, 100, 1);
    margin: 20px 20px 0;
`

const Input = styled.input`
    width: 250px;
    border-radius: 26.5px;
    background-color: rgba(229, 229, 229, 1);
    font-size: 20px;
    color: #333;
    font-weight: 600;

    &::placeholder {
        color: #afafaf;
    }

    &:focus {
        outline: none;
        border-color: rgba(235, 172, 100, 1);
    }
`

const SearchIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: transparent;
    cursor: pointer;
    color: rgba(205, 61, 63, 1);
    svg {
        width: 40px;
        height: 40px;
    }
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
    position: absolute;
    cursor: pointer;
    bottom: 100px;
    z-index: 1000;

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
    @media (max-width: 600px) {
        right: 20px;
    }

    @media (min-width: 600px) {
        left: calc(50% + 250px); /* 600px 너비 기준으로 위치 고정 */
        transform: translateX(-100%); /* 600px 기준 위치 유지 */
    }
`

const Main: React.FC = () => {
    return (
        <Wrapper>
            <Header />
            <MainPageWrapper>
                <SearchWrapper>
                    <Input placeholder="지금 읽고 싶은 책이 있나요?" />
                    <SearchIcon>
                        <Searchsvg />
                    </SearchIcon>
                </SearchWrapper>
                <Item text={"우리동네 핫한🔥 책장"} />
                <Item text={"지금 인기있는 베스트셀러"} />
                <Item text={"ㅇㅇ님의 관심 책장"} />
            </MainPageWrapper>
            <NavBar>
                <PpizzangBot>
                    <Ppizzangsvg />
                </PpizzangBot>
                <NavigationBar />
            </NavBar>
        </Wrapper>
    )
}

export default Main
