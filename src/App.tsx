import { useEffect, useState } from "react"
import styled from "styled-components"

import Kakao from "./api/KakaoAPI"

const Grid = styled.div`
    display: flex;
    grid-template-columns: 2;
`
const Wrapper = styled.div`
    border: 5px solid red;
`
const Title = styled.div`
    color: "black";
    border: 1px solid black;
`
const Input = styled.input`
    margin: 40px;
    width: 500px;
    height: 200px;
    border: 1px solid red;
    font-size: 60px;
`

export default function App() {
    const [bookName, setBookName] = useState<string>("")
    const [books, setBooks] = useState<any[]>([])
    useEffect(() => {
        const kakao = Kakao()
        kakao
            .search(bookName)
            .then(response => setBooks(response.data.documents))
            .catch(e => {
                console.error(e)
            })
    }, [bookName])
    const changeBookName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBookName(e.target.value)
    }
    return (
        <>
            <Input value={bookName} onChange={changeBookName} />
            <Grid>
                {books.map((book: any, key: any) => (
                    <Wrapper key={key}>
                        <Title>{book.author}</Title>
                        <Title>{book.title}</Title>
                        <Title>{book.contents}</Title>
                        <img src={book.thumbnail} alt="bookImage" />
                    </Wrapper>
                ))}
            </Grid>
        </>
    )
}
