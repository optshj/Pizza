import { Link } from "react-router-dom"
import styled from "styled-components"
import FadeIn from "./FadeIn"

const Wrapper = styled.div`
    bottom: 10%;
    position: absolute;
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
}
export default function NextButton({ to, onClick }: NextButtonProps) {
    return (
        <Wrapper>
            <FadeIn delay="1.5s">
                <Text to={to} onClick={onClick}>
                    {"다음"}
                </Text>
            </FadeIn>
        </Wrapper>
    )
}
