import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import Confetti from "react-confetti"

import { useUserName } from "../../context/UserNameContext"

import Text from "./components/Text"
import LoginWrapper from "./components/LoginWrapper"

const fadeOut = keyframes`
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(20px);
    }
`
const TextWrapper = styled.div`
    margin-top: 300px;
    animation: ${fadeOut} 2s ease-in-out forwards;
    animation-delay: 3s;
`
const FlexWrapper = styled.div`
    display: flex;
`

export default function Signup() {
    const { userName } = useUserName()
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/main/home")
        }, 5000)

        return () => clearTimeout(timer)
    }, [navigate])

    return (
        <LoginWrapper>
            {/* 꽃가루 날리기 */}
            <Confetti width={window.innerWidth} height={window.innerHeight} />
            <TextWrapper>
                <Text text={"개업 축하드립니다🥳"} />
                <FlexWrapper>
                    <Text red={true} text={userName} />
                    <Text text={"\u00A0가게 사장님!"} />
                </FlexWrapper>
            </TextWrapper>
        </LoginWrapper>
    )
}
