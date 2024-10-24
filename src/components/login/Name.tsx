import { Link } from "react-router-dom"
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
const Input = styled.input`
    width: 180px;
    padding: 0 10px;
    height: 48px;
    background-color: #d8d8d8;
    border-radius: 10px;
    margin-right: 5px;
    font-size: 24px;
`
const Text = styled.div`
    text-align: left;
    font-size: 40px;
    line-height: 1.3;
    white-space: nowrap;
    font-weight: bold;
`
const Explain = styled.div`
    margin-top: 5px;
    font-size: 13px;
    color: #3c3c3c;
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
export default function Name() {
    return (
        <>
            <Wrapper>
                <TextWrapper>
                    <FlexWrapper>
                        <Text>{"당신의 "}</Text>
                        <TextRed>{` 피자가게`}</TextRed>
                    </FlexWrapper>
                    <Text>{"이름을 지어볼까요?"}</Text>
                </TextWrapper>
                <FlexWrapper>
                    <Input placeholder="Ex) 어깨, 주름..." />
                    <TextRed>{"피자"}</TextRed>
                </FlexWrapper>
                <Explain>{"가게 이름은 2~10자 이내로 한글, 영문, 숫자만 입력 가능합니다."}</Explain>
            </Wrapper>
            <NextButton>
                <Link to="/name">{"다음"}</Link>
            </NextButton>
        </>
    )
}
