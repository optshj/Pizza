import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    z-index: 100;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
`
const Button = styled.button`
    height: 44px;
    width: calc(100% - 100px);
    white-space: nowrap;
    border-radius: 22px;
    background-color: ${({ theme }) => theme.color.red};
    color: #fff;
    font-size: 18px;
    margin-bottom: 24px;
`
const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    padding: 22px 14px;
    box-sizing: border-box;
`
const TotalText = styled.div`
    color: #797979;
    font-size: 18px;
    white-space: nowrap;
`
const SumText = styled.div`
    color: #000;
    font-size: 18px;
    font-weight: 700;
    white-space: nowrap;
`

export default function Footer() {
    return (
        <Wrapper>
            <TextWrapper>
                <TotalText>{"총 합계"}</TotalText>
                <SumText>{"2000원"}</SumText>
            </TextWrapper>
            <Button>{"피자 주문하기"}</Button>
        </Wrapper>
    )
}
