import styled from "styled-components"
import { useEffect, useState } from "react"

import Kakao from "../../api/KakaoAPI"

import Header from "./components/Header"
import Item from "./components/Item"
import Empty from "./components/Empty"

import { useSearch } from "../../context/SearchContext"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const ItemWrapper = styled.div`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`
const Title = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: #000;
    margin-top: 80px;
    margin-left: 20px;
`
const Emphais = styled.span`
    color: ${({ theme }) => theme.color.red};
`

export default function Search() {
    const { searchTerm } = useSearch()
    const [books, setBooks] = useState<any[]>([])

    useEffect(() => {
        const kakao = Kakao()
        if (searchTerm) {
            kakao
                .search(searchTerm)
                .then(response => setBooks(response.data.documents))
                .catch(() => setBooks([]))
        }
    }, [searchTerm])

    return (
        <Wrapper>
            <Header />
            {books.length > 0 ? (
                <>
                    <Title>
                        <Emphais>{searchTerm}</Emphais>
                        {"에 관한 검색 결과"}
                    </Title>
                    <ItemWrapper>
                        {books.map((book, index) => (
                            <Item key={index} book={book} delay={index} />
                        ))}
                    </ItemWrapper>
                </>
            ) : (
                <Empty />
            )}
        </Wrapper>
    )
}
