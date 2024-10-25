import styled from "styled-components"

import { useUserName } from "../../context/UserNameContext"

import Text from "./components/Text"
import NextButton from "./components/NextButton"
import LoginWrapper from "./components/LoginWrapper"

const TextWrapper = styled.div`
    margin-top: 100px;
    margin-bottom: 20px;
`
const FlexWrapper = styled.div`
    display: flex;
`
export default function Where() {
    const { userName } = useUserName()
    return (
        <>
            <LoginWrapper>
                <TextWrapper>
                    <Text text={"좋은 이름이네요!"} />
                    <FlexWrapper>
                        <Text red={true} text={userName} />
                        <Text text={"는"} />
                    </FlexWrapper>
                    <Text text={"어디에 있나요?"} />
                </TextWrapper>
            </LoginWrapper>
            <NextButton to="/select" />
        </>
    )
}
