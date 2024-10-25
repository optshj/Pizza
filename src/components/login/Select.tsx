import styled from "styled-components"

import Text from "./components/Text"
import LoginWrapper from "./components/LoginWrapper"
import NextButton from "./components/NextButton"
import Item from "./components/Item"
import FadeIn from "./components/FadeIn"

const TextWrapper = styled.div`
    margin-top: 100px;
    margin-bottom: 20px;
`
const SelectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    justify-content: center;
`

export default function Select() {
    return (
        <>
            <LoginWrapper>
                <TextWrapper>
                    <Text text={"다 왔어요!"} />
                    <Text text={"마지막으로 사장님이"} />
                    <Text text={"좋아하는 피자 메뉴를"} />
                    <Text text={"골라볼까요?😍"} />
                </TextWrapper>
                <FadeIn delay="1s">
                    <SelectGrid>
                        <Item text={"경제/경영"} />
                        <Item text={"소설"} />
                        <Item text={"시/에세이"} />
                        <Item text={"인문"} />
                    </SelectGrid>
                </FadeIn>
            </LoginWrapper>
            <NextButton to="/signup" />
        </>
    )
}
