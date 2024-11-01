import styled from "styled-components"
import FadeIn from "../../Login/components/FadeIn"

const Wrapper = styled.div`
    width: calc(100% - 48px);
    margin-top: 20px;
`
const Rectangle = styled.div`
    width: 100%;
    height: 215px;
    background-color: #ffffff;
    border-radius: 23px;
`
const TitleText = styled.div`
    width: 100%;
    font-size: 30px;
    font-weight: bold;
    color: #000000;
    height: 39px;
    margin-bottom: 10px;
    white-space: nowrap;
`

interface ItemProps {
    text: string
}
export default function Item({ text }: ItemProps) {
    return (
        <Wrapper>
            <FadeIn delay="0.5s">
                <TitleText>{text}</TitleText>
                <Rectangle />
            </FadeIn>
        </Wrapper>
    )
}
