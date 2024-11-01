import styled from "styled-components"
import Rectangle from "./components/Rectangle"
import { Link } from "react-router-dom"
import { ReactComponent as PreviousIcon } from "../../assets/icon/previousArrowBackSvgrepoCom.svg"
import alarmData from "../../data/alarm.json"

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
    font-weight: bold;
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
    const texts = alarmData.text
    return (
        <Wrapper>
            <HeaderWrapper>
                <PrevLink to="/main/home">
                    <PrevIcon />
                </PrevLink>
                알림
            </HeaderWrapper>
            <MainPageWrapper>
                {texts.map((text, index) => (
                    <Rectangle key={index} delay={index}>
                        {text}
                    </Rectangle>
                ))}
            </MainPageWrapper>
        </Wrapper>
    )
}
