import styled from "styled-components"
import Rectangle from "./components/Rectangle"
import { Link } from "react-router-dom"
import { ReactComponent as PreviousIcon } from "../../assets/icon/previousArrowBackSvgrepoCom.svg"
import { prs1, prs2, prs3 } from "./components/TextPresets"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const HeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 69px;
    align-items: center;
    background-color: #ffffff;
    font-size: 28px;
    font-weight: 700;
    color: rgba(205, 61, 63, 1);
    justify-content: center;
    position: relative;
`

const PrevLink = styled(Link)`
    position: absolute;
    display: flex;
    align-items: center;
    @media (min-width: 600px) {
        left: 22px;
    }
    @media (max-width: 600px) {
        left: 22px;
    }
`

const PrevIcon = styled(PreviousIcon)`
    cursor: pointer;
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
    padding-top: 29px;
    gap: 14px;
`

export default function Alarm() {
    return (
        <Wrapper>
            <HeaderWrapper>
                <PrevLink to="/main/home">
                    <PrevIcon />
                </PrevLink>
                알림
            </HeaderWrapper>
            <MainPageWrapper>
                <Rectangle>{prs1}</Rectangle>
                <Rectangle>{prs2}</Rectangle>
                <Rectangle>{prs3}</Rectangle>
            </MainPageWrapper>
        </Wrapper>
    )
}
