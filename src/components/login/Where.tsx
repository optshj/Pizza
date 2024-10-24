import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`
const TextWrapper = styled.div`
    margin-top: 10%;
    margin-bottom: 20px;
`
const FlexWrapper = styled.div`
    display: flex;
`
const Text = styled.div`
    text-align: left;
    font-size: 40px;
    line-height: 1.3;
    white-space: nowrap;
    font-weight: bold;
`
const TextRed = styled(Text)`
    color: ${props => props.theme.color.red};
`
const NextButton = styled.button`
    position: absolute;
    bottom: 20%;
    width: 331px;
    height: 64px;
    background-color: ${props => props.theme.color.red};
    border-radius: 13px;
    font-size: 22px;
    color: #ffffff;
`

export default function Where() {
    return (
        <Wrapper>
            <TextWrapper>
                <Text>{"좋은 이름이네요!"}</Text>
                <FlexWrapper>
                    <TextRed>{"척추를피자"}</TextRed>
                    <Text>{"는"}</Text>
                </FlexWrapper>
                <Text>{"어디에 있나요?"}</Text>
            </TextWrapper>
            <NextButton>{"다음"}</NextButton>
        </Wrapper>
    )
}
