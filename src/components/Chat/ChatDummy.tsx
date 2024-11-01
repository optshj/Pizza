import React, { useState, useEffect, useRef, useMemo } from "react"
import { Link, useParams } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"

import FaceYellow from "../../assets/character/FaceYellow.svg"
import { ReactComponent as BackArrowIcon } from "../../assets/icon/previous-arrow-back-svgrepo-com.svg"
import { ReactComponent as Sendsvg } from "../../assets/icon/send.svg"

// 메시지에 사용되는 Props 인터페이스 정의
interface MessageProps {
    isUser: boolean
}

// 메시지 객체의 타입을 정의
interface ChatMessage {
    text: string
    isUser: boolean
}

// 더미 채팅 데이터의 키를 문자열로 변경
const chatData: { [key: string]: ChatMessage[] } = {
    "2": [
        { text: "안녕하세요! 채식주의자 언제쯤 빌릴 수 있는지 알 수 있을까요??", isUser: true },
        { text: "이번주 토요일에 가능하실 겁니다", isUser: false },
        { text: "아하 책이 막 더럽진 않죠..?", isUser: true },
        { text: "책 상태는 양호한 편입니다", isUser: false }
    ],
    "3": [
        { text: "인간관계론 읽고 싶은데, 인기가 많아서 잡기가 힘들어요...", isUser: false },
        { text: "아이고.. 다음주 수요일에 돌아올 예정입니다", isUser: true },
        { text: "아까 다른 분이 빌려가셨어요ㅠㅠ", isUser: true }
    ]
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
`

const Header = styled.div`
    width: 100%;
    height: 69.3px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: #cb3d3f;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: -0.1px;
    padding: 0 clamp(8px, 4vw, 16px);
`

const BackArrow = styled(BackArrowIcon)`
    position: absolute;
    left: 16px;
    width: 26px;
    height: 27px;
    cursor: pointer;
    margin: 5px;
    fill: #ebac64;
`

const ChatContainer = styled.div`
    width: 100%;
    height: calc(100vh - 69.3px - 60px);
    display: flex;
    flex-direction: column;
    padding: clamp(8px, 4vw, 16px);
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
    align-items: center;
    justify-content: flex-start;
`

const Message = styled.div<MessageProps>`
    display: flex;
    margin-bottom: 12px;
    justify-content: ${props => (props.isUser ? "flex-end" : "flex-start")};
    width: 100%;
`

const MessageBubble = styled.div<MessageProps>`
    max-width: 70%;
    padding: 12px 17px 10px 17px;
    background-color: ${props => (props.isUser ? "#cb3d3f" : "#ebac64")};
    color: white;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.5;
    border-radius: ${props => (props.isUser ? "20px 20px 4px 20px" : "20px 20px 20px 4px")};
    box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.16);
    word-break: break-word;
    margin-left: ${props => (props.isUser ? "10px" : "0")};
    margin-right: ${props => (props.isUser ? "0" : "10px")};
`

const Avatar = styled.div<MessageProps>`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #ffffff;
    margin-right: ${props => (props.isUser ? "0" : "10px")};
    margin-left: ${props => (props.isUser ? "10px" : "5px")};
    display: ${props => (props.isUser ? "none" : "block")};
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
    position: relative;
    &::after {
        content: "";
        position: absolute;
        top: 7px;
        left: 6px;
        width: calc(100% - 12px);
        height: calc(100% - 14px);
        background: url(${FaceYellow}) center / contain no-repeat;
    }
`

const MessageWrapper = styled.div<MessageProps>`
    display: flex;
    align-items: flex-start;
    flex: 1;
    min-width: 0;
    flex-direction: ${props => (props.isUser ? "row-reverse" : "row")};
`

const InputContainer = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;
    background-color: #ffffff;
`

const TextInput = styled.input`
    flex: 1;
    height: 45px;
    padding: 0 12px;
    font-size: 16px;
    background-color: rgba(229, 229, 229, 1);
    border: 1px solid rgba(234, 172, 100, 1);
    border-radius: 22px;
    outline: none;
    box-sizing: border-box;
    color: #333;
`
const StyledLink = styled(Link)`
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
`
const SendIcon = styled(Sendsvg)`
    width: 30px;
    height: 30px;
    margin-left: 20px;
    margin-right: 10px;
    cursor: pointer;
`

export default function ChatRoom() {
    const { id } = useParams<{ id: string }>()
    const chatMessages: ChatMessage[] = useMemo(() => (id && chatData[id] ? chatData[id] : []), [id])
    const [inputValue, setInputValue] = useState("")
    const [isComposing, setIsComposing] = useState(false)
    const chatContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
        }
    }, [chatMessages])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleSendMessage = () => {
        if (inputValue.trim() !== "" && !isComposing) {
            setInputValue("")
        }
    }

    return (
        <>
            <GlobalStyle />
            <Header>
                <StyledLink to="/main/chat">
                    <BackArrow />
                </StyledLink>
                {id === "2" ? "이불을피자" : id === "3" ? "어깨피자" : `채팅방 ${id}`}
            </Header>
            <ChatContainer ref={chatContainerRef}>
                {chatMessages.map((message: ChatMessage, index: number) => (
                    <Message key={index} isUser={message.isUser}>
                        <MessageWrapper isUser={message.isUser}>
                            <Avatar isUser={message.isUser} />
                            <MessageBubble isUser={message.isUser}>{message.text}</MessageBubble>
                        </MessageWrapper>
                    </Message>
                ))}
            </ChatContainer>
            <InputContainer>
                <TextInput
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onCompositionStart={() => setIsComposing(true)}
                    onCompositionEnd={() => setIsComposing(false)}
                    onKeyDown={e => {
                        if (e.key === "Enter" && !isComposing) handleSendMessage()
                    }}
                    placeholder="메시지를 입력하세요..."
                />
                <SendIcon onClick={handleSendMessage} />
            </InputContainer>
        </>
    )
}
