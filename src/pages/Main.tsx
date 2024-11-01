import styled from "styled-components"
import { Route, Routes } from "react-router-dom"

import Home from "../components/Main/Main"
import Feed from "../components/Feed/Feed"
import Alarm from "../components/Alarm/Alarm"
import Basket from "../components/Basket/Basket"
import ChatBot from "../components/ChatBot/ChatBot"
import Chat from "../components/Chat/Chat"
import ChatRoom from "../components/Chat/ChatDummy"
import MyPage from "../components/MyPage/MyPage"

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function Main() {
    return (
        <Wrapper>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/alarm" element={<Alarm />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/chatbot" element={<ChatBot />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/chat/:id" element={<ChatRoom />} />
                <Route path="/mypage" element={<MyPage />} />
            </Routes>
        </Wrapper>
    )
}
