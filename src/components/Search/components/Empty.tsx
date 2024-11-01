import styled, { keyframes } from "styled-components"

import { ReactComponent as PreviousIcon } from "../../../assets/icon/previousArrowBackSvgrepoCom.svg"

const fadeInUp = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    opacity: 0;
    animation: ${fadeInUp} 1s forwards;
    animation-delay: "0.5s";
`
const Icon = styled(PreviousIcon)``
const Text = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: #000;
`
export default function Empty() {
    return (
        <Wrapper>
            <Icon />
            <Text>{"검색 결과가 없습니다"}</Text>
        </Wrapper>
    )
}
