import { useEffect, useState } from "react"
import styled from "styled-components"

import Kakao from "../../../api/KakaoAPI"
import { ReactComponent as Plus } from "../../../assets/icon/plus.svg"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 48px);
`

const Title = styled.div`
    font-size: 25px;
    color: #000;
    margin-top: 50px;
    text-align: left;
    align-self: flex-start;
    margin-bottom: 10px;
`

const Border = styled.div`
    border: 5px solid ${({ theme }) => theme.color.yellow};
    border-radius: 20px;
    width: calc(100% - 48px);
    padding: 24px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 13px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    overflow-x: auto;
`

const Container = styled.img`
    position: relative;
    display: inline-block;
    width: 65px;
    height: 90px;
`

const PlusWrapper = styled.div`
    width: 65px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0; /* 줄어들지 않도록 설정 */
`

interface BookProps {
    title: string
    authors: string
    thumbnail: string
    contents: string
}

interface ImageItemProps {
    bookName: string
}

function ImageItem({ bookName }: ImageItemProps) {
    const [books, setBooks] = useState<BookProps>({
        title: "채식주의자",
        authors: "한강",
        thumbnail: "",
        contents: ""
    })

    useEffect(() => {
        const kakao = Kakao()
        kakao
            .search(bookName)
            .then(response => setBooks(response.data.documents[0]))
            .catch(e => {
                console.error(e)
            })
    }, [bookName])

    return <Container src={books.thumbnail} />
}

interface MyShelvesProps {
    text: string
    books: string[]
}

export default function MyShelves({ text, books }: MyShelvesProps) {
    return (
        <Wrapper>
            <Title>{text}</Title>
            <Border>
                {books.map((bookName, index) => (
                    <ImageItem key={index} bookName={bookName} />
                ))}
                <PlusWrapper>
                    <Plus />
                </PlusWrapper>
            </Border>
        </Wrapper>
    )
}
