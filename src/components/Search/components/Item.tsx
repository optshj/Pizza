import styled, { keyframes } from "styled-components"

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(100vh);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const Wrapper = styled.div<{ $delay?: string }>`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    padding: 20px;
    border-bottom: 1px solid #707070;
    position: relative;
    opacity: 0;
    animation: ${fadeInUp} 1s forwards;
    animation-delay: ${props => props.$delay || "0s"};
`

const BookImage = styled.img`
    flex-shrink: 0;
    width: 80px;
    height: 100px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`

const Title = styled.div`
    font-weight: 700;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
`

const Author = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: #797979;
`

const Possession = styled.div`
    position: absolute;
    right: 20px;
    bottom: 20px;
    font-size: 18px;
    font-weight: 700;
    color: #000;
`

const PossessionNumber = styled.span`
    color: ${({ theme }) => theme.color.red};
`

function getRandomNumber() {
    return Math.floor(Math.random() * 16) + 1
}

interface BookProps {
    thumbnail: string
    title: string
    authors: string[]
}

interface ItemProps {
    book: BookProps
    delay: number
}

export default function Item({ book, delay }: ItemProps) {
    const authorText = book.authors.length > 1 ? `${book.authors[0]} 등` : book.authors[0]
    return (
        <Wrapper $delay={`${delay * 0.15}s`}>
            <BookImage src={book.thumbnail} loading="lazy" />
            <TitleWrapper>
                <Title>{book.title}</Title>
                <Author>{authorText}</Author>
            </TitleWrapper>
            <Possession>
                {"우리동네 가게 중 "}
                <PossessionNumber>{`${getRandomNumber()}곳`}</PossessionNumber>
                {" 보유"}
            </Possession>
        </Wrapper>
    )
}
