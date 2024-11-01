import { useEffect, useState } from "react"
import styled from "styled-components"

import Kakao from "../../../api/KakaoAPI"

import FadeIn from "../../Login/components/FadeIn"

const Wrapper = styled.div`
    width: calc(100% - 48px);
    margin-top: 20px;
`
const TitleText = styled.div`
    width: 100%;
    font-size: 25px;
    font-weight: bold;
    color: #000000;
    height: 39px;
    margin-bottom: 10px;
    white-space: nowrap;
`
const Container = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    display: flex;
    flex-direction: column;
`
const ImageWrapper = styled.div`
    display: flex;
    width: 100%;
    overflow-x: auto;
    gap: 15px;
`
const Items = styled.img`
    border-radius: 6px;
`
const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    font-size: 16px;
    font-weight: bold;
`
const Author = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #7a7a7a;
`
interface BookProps {
    title: string
    authors: string
    thumbnail: string
    contents: string
}
function ImageItem({ bookName }: { bookName: string }) {
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
    return (
        <Container>
            <Items src={books.thumbnail} />
            <DetailWrapper>
                <Title>{books.title}</Title>
                <Author>{books.authors}</Author>
            </DetailWrapper>
        </Container>
    )
}
interface ItemProps {
    text: string
    detail?: boolean
}
export default function Item3({ text }: ItemProps) {
    return (
        <Wrapper>
            <FadeIn delay="1.5s">
                <TitleText>{text}</TitleText>
                <ImageWrapper>
                    <ImageItem bookName={"1984"} />
                    <ImageItem bookName={"이기적 유전자"} />
                    <ImageItem bookName={"어른의 문장력"} />
                    <ImageItem bookName={"사피엔스"} />
                    <ImageItem bookName={"총균쇠"} />
                    <ImageItem bookName={"날씨의 아이"} />
                </ImageWrapper>
            </FadeIn>
        </Wrapper>
    )
}
