import styled, { keyframes } from "styled-components"

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(100vh);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const RectangleWrapper = styled.div<{ $delay?: string }>`
    display: flex;
    width: 90vw;
    min-width: 300px;
    max-width: 540px;
    align-items: center;
    background-color: #ffffff;
    border-radius: 18px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.16);
    padding-right: 20px;
    margin-left: 21px;
    margin-right: 21px;
    gap: 14px;
    opacity: 0;
    animation: ${fadeInUp} 1s forwards;
    animation-delay: ${props => props.$delay || "0s"};
`

const Icon = styled.div`
    width: 50px;
    height: 50px;
    background-color: #888888;
    border-radius: 10px;
    margin-left: 20px;
`
const Text = styled.div`
    width: 264px;
    margin: 10px 0;
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    white-space: pre-line; /* 기본 줄바꿈 허용 */
    word-wrap: break-word; /* 단어가 길 경우 줄바꿈 */
`

interface RectangleProps {
    children: React.ReactNode
    delay: number
}

export default function Rectangle({ children, delay }: RectangleProps) {
    return (
        <RectangleWrapper $delay={`${delay * 0.15}s`}>
            <Icon />
            <Text>{children}</Text>
        </RectangleWrapper>
    )
}
