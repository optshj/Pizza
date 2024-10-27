import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import FadeIn from "./FadeIn"

const Wrapper = styled.div<{ isKeyboardVisible: boolean }>`
    bottom: ${({ isKeyboardVisible }) => (isKeyboardVisible ? "20%" : "10%")};
    position: absolute;
    transition: bottom 0.3s ease;
`
const Text = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 331px;
    height: 64px;
    background-color: ${({ theme }) => theme.color.red};
    border-radius: 13px;
    font-size: 22px;
    color: #ffffff;
`

interface NextButtonProps {
    to: string
    onClick?: () => void
}

export default function NextButton({ to, onClick }: NextButtonProps) {
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsKeyboardVisible(window.innerHeight < window.outerHeight * 0.7)
        }
        window.addEventListener("resize", handleResize)
        handleResize()
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <Wrapper isKeyboardVisible={isKeyboardVisible}>
            <FadeIn delay="1.5s">
                <Text to={to} onClick={onClick}>
                    {"다음"}
                </Text>
            </FadeIn>
        </Wrapper>
    )
}
