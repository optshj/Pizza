import { ReactElement, useEffect, useState } from "react"
import styled from "styled-components"

import Kakao from "../../../api/KakaoAPI"

import FadeIn from "../../Login/components/FadeIn"
import { ReactComponent as Gold } from "../../../assets/icon/gold.svg"
import { ReactComponent as Silver } from "../../../assets/icon/silver.svg"
import { ReactComponent as Cupper } from "../../../assets/icon/cupper.svg"

const Wrapper = styled.div`
    width: calc(100% - 48px);
    margin-top: 30px;
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
    margin-bottom: 10px;
    display: inline-block;
    width: 100%;
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
const IconWrapper = styled.div`
    position: absolute;
    right: 10px;
`

interface BookProps {
    title: string
    authors: string
    thumbnail: string
    contents: string
}

interface ImageItemProps {
    bookName: string
    medal?: ReactElement
}

function ImageItem({ bookName, medal }: ImageItemProps) {
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
            {medal && <IconWrapper>{medal}</IconWrapper>}
            <Items src={books.thumbnail} />
        </Container>
    )
}

interface ItemProps {
    text: string
    bookNames: string[]
}

export default function Item2({ text, bookNames }: ItemProps) {
    return (
        <Wrapper>
            <FadeIn delay="1s">
                <TitleText>{text}</TitleText>
                <ImageWrapper>
                    {bookNames.map((bookName, index) => {
                        let medal
                        if (index === 0) {
                            medal = <Gold />
                        } else if (index === 1) {
                            medal = <Silver />
                        } else if (index === 2) {
                            medal = <Cupper />
                        }

                        return <ImageItem key={index} bookName={bookName} medal={medal} />
                    })}
                </ImageWrapper>
            </FadeIn>
        </Wrapper>
    )
}
