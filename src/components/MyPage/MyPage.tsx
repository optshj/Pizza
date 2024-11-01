import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import Header from "../Main/components/Header"
import NavigationBar from "../Main/components/NavigationBar"
import { useUserName } from "../../context/UserNameContext"

// 마이페이지 요소들 정의
const myPageItems = [
    {
        id: 1,
        name: "회원 정보 수정",
        icon: "👤",
        link: "/edit-profile"
    },
    {
        id: 2,
        name: "내 동네 설정",
        icon: "📍",
        link: "/set-neighborhood"
    },
    {
        id: 3,
        name: "거래내역",
        icon: "📚",
        link: "/transaction-history"
    },
    {
        id: 4,
        name: "자주 묻는 질문",
        icon: "❓",
        link: "/faq"
    },
    {
        id: 5,
        name: "약관 및 정책",
        icon: "📄",
        link: "/terms-and-policies"
    }
]

// 스타일 컴포넌트 정의
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const MainPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
    min-height: 100vh;
    background-color: #f5f5f5;
    margin: 0 auto;
    gap: 25px;
`

const HeaderSpacer = styled.div`
    width: 100%;
    height: 10px;
    background-color: #f0f0f0; // 회색 여백 추가
`

const ProfileSection = styled.div`
    display: flex;
    align-items: center;
    background-color: #ffffff;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    gap: 15px;
`

const ProfileCircle = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #d3d3d3; // 더미 배경색
    flex-shrink: 0;
`

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ProfileName = styled.div`
    font-size: 20px;
    font-weight: bold;
`

const ProfileId = styled.div`
    font-size: 14px;
    color: #888;
`

const MyPageList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #ffffff;
`

const MyPageItem = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    text-decoration: none;
    color: #333;
    background-color: #ffffff;
    width: 100%;
    box-sizing: border-box;

    &:hover {
        background-color: #f0f0f0;
    }
`

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e0e0e0; // 구분선의 회색 배경
`

const ItemContent = styled.div`
    display: flex;
    align-items: center;
`

const ItemIcon = styled.div`
    font-size: 20px;
    margin-right: 15px;
`

const ItemText = styled.div`
    flex: 1;
    font-size: 17px;
`

const NavBar = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
`

export default function MyPage() {
    const { userName } = useUserName()
    return (
        <Wrapper>
            <Header />
            <HeaderSpacer /> {/* 헤더 아래에 회색 여백을 추가 */}
            <MainPageWrapper>
                <ProfileSection>
                    <ProfileCircle /> {/* 프로필 동그라미 */}
                    <ProfileInfo>
                        <ProfileName>{userName}</ProfileName>
                        <ProfileId>viatoledo@kakao.com</ProfileId>
                    </ProfileInfo>
                </ProfileSection>
                <MyPageList>
                    {myPageItems.map((item, index) => (
                        <React.Fragment key={item.id}>
                            <MyPageItem to={item.link}>
                                <ItemContent>
                                    <ItemIcon>{item.icon}</ItemIcon>
                                    <ItemText>{item.name}</ItemText>
                                </ItemContent>
                            </MyPageItem>
                            {index < myPageItems.length - 1 && <Divider />} {/* 마지막 항목을 제외하고 구분선을 추가 */}
                        </React.Fragment>
                    ))}
                </MyPageList>
            </MainPageWrapper>
            <NavBar>
                <NavigationBar />
            </NavBar>
        </Wrapper>
    )
}
