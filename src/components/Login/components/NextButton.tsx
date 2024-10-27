import { Link } from "react-router-dom"
import styled from "styled-components"
import FadeIn from "./FadeIn"

const Wrapper = styled.div<{ $isKeyboardVisible?: boolean }>`
    position: absolute;
    bottom: ${props => (props.$isKeyboardVisible ? "none" : "5%")};
    top: ${props => (props.$isKeyboardVisible ? "35%" : "none")};
`

const Text = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 331px;
    height: 64px;
    background-color: ${props => props.theme.color.red};
    border-radius: 13px;
    font-size: 22px;
    color: #ffffff;
`
interface NextButtonProps {
    to: string
    onClick?: () => void
    isKeyboardVisible?: boolean
}
export default function NextButton({ to, onClick, isKeyboardVisible }: NextButtonProps) {
    return (
        <Wrapper $isKeyboardVisible={isKeyboardVisible}>
            <FadeIn delay="1.5s">
                <Text to={to} onClick={onClick}>
                    {"다음"}
                </Text>
            </FadeIn>
        </Wrapper>
    )
}
