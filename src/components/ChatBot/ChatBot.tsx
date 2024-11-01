import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"
import FaceYellow from "../../assets/character/FaceYellow.svg"
import { ReactComponent as BackArrowIcon } from "../../assets/icon/previous-arrow-back-svgrepo-com.svg"
import { ReactComponent as Sendsvg } from "../../assets/icon/send.svg"

interface MessageProps {
    isUser: boolean
}

const GlobalStyle = createGlobalStyle`
  * {
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
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const Header = styled.div`
    width: 100%;
    height: 69.3px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
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
    margin-top: 70px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: clamp(8px, 4vw, 16px);
    box-sizing: border-box;
    overflow-y: auto;
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

const InputContainer = styled.div<{ $keyboardHeight?: number }>`
    width: 100%;
    max-width: 600px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;
    position: absolute;
    bottom: ${props => Math.max(props.$keyboardHeight ?? 0, 0) + "px"};
    background-color: #ffffff; // 배경색 설정
`

const TextInput = styled.input`
    flex: 1;
    height: 45px; // 높이 수정
    padding: 0 12px;
    font-size: 16px;
    background-color: rgba(229, 229, 229, 1); // 배경색 설정
    border: 1px solid rgba(234, 172, 100, 1); // 테두리 색상 설정
    border-radius: 22px; // 테두리 둥글기 설정
    outline: none;
    box-sizing: border-box;
    color: #333;
    margin: 20px 0;
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

export default function ChatBot() {
    const [keyboardHeight, setKeyboardHeight] = useState(0)

    if (window.visualViewport) {
        window.visualViewport.addEventListener("resize", () => {
            let visualViewportHeight = window.visualViewport?.height || 0
            let windowHeight = window.innerHeight
            let keyboardHeight = windowHeight - visualViewportHeight
            setKeyboardHeight(keyboardHeight)
        })
    }
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
        {
            text: "안녕! 난 삐짱이라고 해 무엇을 도와줄까?",
            isUser: false
        }
    ])
    const [inputValue, setInputValue] = useState("")
    const [isComposing, setIsComposing] = useState(false)
    const chatContainerRef = useRef<HTMLDivElement>(null)

    const handleSendMessage = () => {
        if (inputValue.trim() !== "" && !isComposing) {
            setMessages(prevMessages => [...prevMessages, { text: inputValue, isUser: true }])
            fetchAnswer(inputValue)
            setInputValue("")
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const fetchAnswer = async (question: string) => {
        try {
            const response = await fetch("http://localhost:5001/ask", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ question })
            })

            if (!response.ok) {
                throw new Error("답변을 가져오는 중 오류가 발생했습니다.")
            }

            const data = await response.json()
            if (data.answer) {
                setMessages(prevMessages => [...prevMessages, { text: data.answer, isUser: false }])
            } else {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: "답변을 가져오는 중 오류가 발생했습니다.", isUser: false }
                ])
            }
        } catch (error: any) {
            setMessages(prevMessages => [
                ...prevMessages,
                { text: error.message || "알 수 없는 오류가 발생했습니다.", isUser: false }
            ])
        }
    }

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
        }
    }, [messages])

    return (
        <Wrapper>
            <GlobalStyle />
            <Header>
                <StyledLink to="/main/home">
                    <BackArrow />
                </StyledLink>
                삐짱봇
            </Header>
            <ChatContainer ref={chatContainerRef}>
                {messages.map((message, index) => (
                    <Message key={index} isUser={message.isUser}>
                        <MessageWrapper isUser={message.isUser}>
                            <Avatar isUser={message.isUser} />
                            <MessageBubble isUser={message.isUser}>{message.text}</MessageBubble>
                        </MessageWrapper>
                    </Message>
                ))}
            </ChatContainer>
            <InputContainer $keyboardHeight={keyboardHeight}>
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
        </Wrapper>
    )
}
