import styled, { keyframes } from "styled-components"

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const Wrapper = styled.div<{ $delay?: string }>`
    width: 100%;
    opacity: 0;
    animation: ${fadeInUp} 1s forwards;
    animation-delay: ${props => props.$delay || "0s"};
`

interface FadeInProps {
    delay?: string
    children: React.ReactNode
}
export default function FadeIn({ delay, children }: FadeInProps) {
    return <Wrapper $delay={delay}>{children}</Wrapper>
}
