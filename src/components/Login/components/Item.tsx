import { useState } from "react"
import styled from "styled-components"

import { GoCheck } from "react-icons/go"

const Wrapper = styled.div<{ $image: string }>`
    width: 40vw;
    height: 40vw;
    max-width: 170px;
    max-height: 170px;
    border-radius: 33px;
    background-color: #4d4d4d;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    background-image: ${({ $image }) => `url(${$image})`};
    max-width: 100%; /* 최대 너비를 100%로 설정 */
    box-sizing: border-box; /* 패딩과 보더를 포함한 너비 계산 */
`
const Overlay = styled.div<{ $isSelect: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ $isSelect }) => ($isSelect ? "rgba(77, 77, 77, 0.7)" : "rgba(190, 186, 186, 0.7)")};
    border-radius: 33px;
    transition: background-color 0.5s ease;
`
const Text = styled.div<{ $isSelect: boolean }>`
    color: #ffffff;
    font-size: 24px;
    font-weight: 600;
    position: absolute;
    opacity: ${({ $isSelect }) => ($isSelect ? 0 : 1)};
    transition:
        opacity 0.5s ease,
        transform 0.5s ease;
`
const Icon = styled(GoCheck)<{ $isSelect: boolean }>`
    color: #ffffff;
    font-size: 40px;
    transform: scale(${({ $isSelect }) => ($isSelect ? 1 : 0)});
    opacity: ${({ $isSelect }) => ($isSelect ? 1 : 0)};
    transition:
        opacity 0.5s ease,
        transform 0.5s ease;
`

interface ItemProps {
    text: string
    image: string
}

export default function Item({ text, image }: ItemProps) {
    const [isSelect, setIsSelect] = useState(false)
    const onClick = () => {
        setIsSelect(!isSelect)
    }

    return (
        <Wrapper onClick={onClick} $image={image}>
            <Overlay $isSelect={isSelect} />
            <Text $isSelect={isSelect}>{text}</Text>
            <Icon $isSelect={isSelect} />
        </Wrapper>
    )
}
