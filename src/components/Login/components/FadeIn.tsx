// 밑에서 위로 올라오는 페이드인 애니메이션 컴포넌트
// 사용 예시: <FadeIn delay="0.5s">내용</FadeIn>
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
