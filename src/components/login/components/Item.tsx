import styled from "styled-components"

const Wrapper = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 33px;
    background-color: #4d4d4d;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const Text = styled.div`
    color: #ffffff;
    font-size: 24px;
    font-weight: 100;
`

interface ItemProps {
    text: string
}
export default function Item({ text }: ItemProps) {
    return (
        <Wrapper>
            <Text>{text}</Text>
        </Wrapper>
    )
}
