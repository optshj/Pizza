import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import Header from "../Main/components/Header"
import NavigationBar from "../Main/components/NavigationBar"
import FadeIn from "../Login/components/FadeIn"

// 더미 데이터
const chatRooms = [
    {
        id: 1,
        name: "책을피자팀🍕",
        lastMessage: "개인정보 이용내역 안내",
        timeAgo: "어제",
        unreadCount: 1
    },
    {
        id: 2,
        name: "이불을피자",
        lastMessage: "책 상태는 양호한 편입니다",
        timeAgo: "3일 전",
        unreadCount: 0
    },
    {
        id: 3,
        name: "어깨피자",
        lastMessage: "아까 다른 분이 빌려가셨어요ㅠㅠ",
        timeAgo: "1달 전",
        unreadCount: 0
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

const ChatList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    background-color: #e0e0e0;
    width: 100%;
`

const ChatItem = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    padding: 15px;
    text-decoration: none;
    color: #333;
    width: 100%;
    box-sizing: border-box; // 추가: padding이 width를 초과하지 않도록
    &:hover {
        background-color: #f0f0f0;
    }
`

const ProfileCircle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #d3d3d3; // 더미 배경색
    margin-right: 15px; // 텍스트와의 간격
    flex-shrink: 0; // 동그라미의 크기가 줄어들지 않도록 설정
`

const ChatInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1; // 수정: 공간을 차지하도록 설정
    overflow: hidden; // 수정: 텍스트 오버플로우를 방지
`

const ChatTitle = styled.div`
    font-weight: 1000;
    font-size: 19px;
    white-space: nowrap; // 추가: 텍스트가 줄 바꿈 없이 유지
    overflow: hidden; // 추가: 텍스트가 넘칠 경우 잘리도록
    text-overflow: ellipsis; // 추가: 잘린 텍스트에 ... 표시
`

const ChatLastMessage = styled.div`
    font-size: 15px;
    color: #888;
    white-space: nowrap; // 추가: 텍스트가 줄 바꿈 없이 유지
    overflow: hidden; // 추가: 텍스트가 넘칠 경우 잘리도록
    text-overflow: ellipsis; // 추가: 잘린 텍스트에 ... 표시
`

const ChatTimeBadgeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end; // 수정: 오른쪽 끝에 정렬
    gap: 5px; // 시간과 뱃지 간의 간격 추가
`

const ChatTime = styled.div`
    font-size: 12px;
    color: #888;
    white-space: nowrap; // 추가: 텍스트가 줄 바꿈 없이 유지
`

const UnreadBadge = styled.div`
    background-color: rgba(205, 61, 63, 1);
    color: #ffffff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
`

const NavBar = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
`

export default function ChatListPage() {
    return (
        <Wrapper>
            <Header />
            <HeaderSpacer /> {/* 헤더 아래에 회색 여백을 추가 */}
            <MainPageWrapper>
                <ChatList>
                    {chatRooms.map(room => (
                        <FadeIn>
                            <ChatItem key={room.id} to={`/main/chat/${room.id}`}>
                                <ProfileCircle /> {/* 왼쪽에 동그라미 추가 */}
                                <ChatInfo>
                                    <ChatTitle>{room.name}</ChatTitle>
                                    <ChatLastMessage>{room.lastMessage}</ChatLastMessage>
                                </ChatInfo>
                                <ChatTimeBadgeContainer>
                                    <ChatTime>{room.timeAgo}</ChatTime>
                                    {room.unreadCount > 0 && <UnreadBadge>{room.unreadCount}</UnreadBadge>}
                                </ChatTimeBadgeContainer>
                            </ChatItem>
                        </FadeIn>
                    ))}
                </ChatList>
            </MainPageWrapper>
            <NavBar>
                <NavigationBar />
            </NavBar>
        </Wrapper>
    )
}
