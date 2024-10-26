import styled from "styled-components"

import Text from "./components/Text"
import LoginWrapper from "./components/LoginWrapper"
import NextButton from "./components/NextButton"
import Item from "./components/Item"
import FadeIn from "./components/FadeIn"

import book1 from "../../assets/book/book1.jpg"
import book2 from "../../assets/book/book2.jpg"
import book3 from "../../assets/book/book3.jpg"
import book4 from "../../assets/book/book4.jpg"
import book5 from "../../assets/book/book5.jpg"

const TextWrapper = styled.div`
    margin-top: 100px;
    margin-bottom: 20px;
`
const Blcok = styled.div`
    width: 20px;
    height: 20px;
`
const SelectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    place-items: center;
    max-height: 350px;
    overflow-y: auto;
`

export default function Select() {
    return (
        <>
            <LoginWrapper>
                <TextWrapper>
                    <Text text={"다 왔어요!"} />
                    <Blcok />
                    <Text text={"마지막으로 사장님이"} />
                    <Text text={"좋아하는 피자 메뉴를"} />
                    <Text text={"골라볼까요?😍"} />
                </TextWrapper>
                <FadeIn delay="1s">
                    <SelectGrid>
                        <Item text={"경제/경영"} image={book1} />
                        <Item text={"소설"} image={book2} />
                        <Item text={"시/에세이"} image={book3} />
                        <Item text={"인문"} image={book4} />
                        <Item text={"경제"} image={book5} />
                    </SelectGrid>
                </FadeIn>
            </LoginWrapper>
            <NextButton to="/signup" />
        </>
    )
}
