import styled from "styled-components"

import Item from "./components/Item"
import { ReactComponent as Logosvg } from "../../assets/logo/LogoTransverse.svg"
import { ReactComponent as Alarmsvg } from "../../assets/icon/bell-svgrepo-com-2.svg"
import { ReactComponent as Cartsvg } from "../../assets/icon/shopping-cart-svgrepo-com.svg"
import { ReactComponent as Searchsvg } from "../../assets/icon/search-svgrepo-com.svg"
import { ReactComponent as Ppizzangsvg } from "../../assets/character/FaceYellow.svg"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 21px;
    background-color: #ffffff;
`

interface IconButtonProps {
    isShoppingCart?: boolean
}

const IconButton = styled.button<IconButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    color: rgba(205, 61, 63, 1);
    svg {
        width: 38px; /* 기본 너비 */
        height: 45px; /* 기본 높이 */
    }

    /* 장바구니 아이콘에 대한 조건부 스타일 */
    ${props =>
        props.isShoppingCart &&
        `
        svg {
            height: 35px; /* 장바구니 아이콘의 높이 */
        }
    `}
`

const Logo = styled(Logosvg)`
    height: 45px;
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
`

const SearchWrapper = styled.div`
    display: flex;
    width: 350px;
    height: 50px;
    border-radius: 26.5px;
    justify-content: space-around;
    background-color: rgba(229, 229, 229, 1);
    border: 2px solid rgba(235, 172, 100, 1);
    margin: 20px;
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
const Navigation = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 600px;
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    z-index: 1000;
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
    transform: translateX(10%);

    /* 각 코너별 반경 설정 */
    border-top-left-radius: 48.5px;
    border-bottom-left-radius: 48.5px;
    border-bottom-right-radius: 15.5px;
    border-top-right-radius: 48.5px;

    svg {
        margin-left: 3px;
        margin-top: 8px;
        width: 65px;
        height: 65px;
    }

    /* 반응형 위치 조정 */
    @media (min-width: 600px) {
        right: calc(50% - 48.5px); /* 가운데 정렬 */
    }

    @media (max-width: 600px) {
        right: 10px;
    }
`

export default function Main() {
    return (
        <Wrapper>
            <HeaderWrapper>
                <Logo />
                <div style={{ display: "flex", height: "45px", gap: "2px" }}>
                    <IconButton>
                        <Alarmsvg />
                    </IconButton>
                    <IconButton isShoppingCart>
                        <Cartsvg />
                    </IconButton>
                </div>
            </HeaderWrapper>

            <MainPageWrapper>
                <SearchWrapper>
                    <Input placeholder="지금 읽고 싶은 책이 있나요?" />
                    <SearchIcon>
                        <Searchsvg />
                    </SearchIcon>
                </SearchWrapper>
                <Item text={"우리동네 핫한🔥 책장"} />
                <Item text={"지금 인기있는 베스트셀러"} />
            </MainPageWrapper>
            <NavBar>
                <PpizzangBot>
                    <Ppizzangsvg />
                </PpizzangBot>
                <Navigation />
            </NavBar>
        </Wrapper>
    )
}
