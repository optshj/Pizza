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
const Blcok = styled.div`
    width: 20px;
    height: 20px;
`
const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-height: 350px;
    place-items: center;
    overflow-y: auto;
`

const items = [
    { text: "경제/경영", image: "book1" },
    { text: "소설", image: "book2" },
    { text: "시/에세이", image: "book3" },
    { text: "인문", image: "book4" },
    { text: "경제", image: "book5" },
    { text: "청소년", image: "book6" },
    { text: "자기계발", image: "book7" },
    { text: "여행", image: "book8" }
]

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
                    <GridWrapper>
                        {items.map(item => (
                            <Item key={item.text} text={item.text} image={item.image} />
                        ))}
                    </GridWrapper>
                </FadeIn>
            </LoginWrapper>
            <NextButton to="/signup" />
        </>
    )
}
