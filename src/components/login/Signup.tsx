import styled from "styled-components"

import { useUserName } from "../../context/UserNameContext"

import Text from "./components/Text"
import LoginWrapper from "./components/LoginWrapper"

const TextWrapper = styled.div`
    margin-top: 300px;
`
const FlexWrapper = styled.div`
    display: flex;
`

export default function Signup() {
    const { userName } = useUserName()
    return (
        <LoginWrapper>
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
