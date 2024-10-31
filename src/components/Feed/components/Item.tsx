import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`
const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 21px;
`
const Profile = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #a7a7a7;
`
const TextWrapper = styled.div`
    padding-left: 5px;
    display: flex;
    flex-direction: column;
`
const UserName = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: #000000;
`
const Time = styled.div`
    font-size: 14px;
    color: #797979;
    font-weight: 600;
`
const ContentWrapper = styled.div`
    width: calc(100% - 48px);
    height: 192px;
    background-color: #fff;
    border-radius: 17px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`
const BookImage = styled.div`
    width: 107px;
    height: 158px;
    background-color: #8d8d8d;
    position: absolute;
    left: 20px;
`

export default function Item() {
    return (
        <Wrapper>
            <Header>
                <Profile />
                <TextWrapper>
                    <UserName>UserName</UserName>
                    <Time>오전 3:48</Time>
                </TextWrapper>
            </Header>
            <ContentWrapper>
                <BookImage />
            </ContentWrapper>
        </Wrapper>
    )
}