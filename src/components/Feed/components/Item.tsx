import { useEffect, useState } from "react"
import styled from "styled-components"

import Kakao from "../../../api/KakaoAPI"

import { ReactComponent as FullHeartsvg } from "../../../assets/icon/fullheart.svg"
import { ReactComponent as Commentsvg } from "../../../assets/icon/chat.svg"
import { ReactComponent as EmptyHeartsvg } from "../../../assets/icon/emptyHeart.svg"

import FadeIn from "../../Login/components/FadeIn"

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Header = styled.div`
    display: flex;
    width: calc(100% - 60px);
    align-items: center;
    padding: 25px 0 20px;
    justify-content: space-between;
`
const LeftWrapper = styled.div`
    display: flex;
`
const Profile = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #a7a7a7;
`
const UserWrapper = styled.div`
    padding-left: 10px;
    display: flex;
    flex-direction: column;
`
const UserName = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #000000;
`
const Time = styled.div`
    font-size: 14px;
    color: #797979;
    font-weight: bold;
`
const ContentWrapper = styled.div`
    width: calc(100% - 48px);
    height: 192px;
    max-width: 600px;
    background-color: #fff;
    border-radius: 17px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
`
const BookImage = styled.img`
    width: 107px;
    height: 158px;
    background-color: #8d8d8d;
    margin-left: 20px;
    object-fit: cover;
`
const FeedWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    height: 100%;
    width: calc(100% - 127px);
    max-width: 350px;
`
const BookName = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin-top: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 90%;
`
const AuthorName = styled.div`
    font-size: 15px;
    color: #797979;
`
const Text = styled.div`
    width: 40vw;
    max-width: 100%;
    font-size: 14px;
    font-weight: 500;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`
const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 5px;
`
const FullHeartIcon = styled(FullHeartsvg)`
    width: 20px;
    height: 20px;
    color: ${props => props.theme.color.red};
`
const EmptyHeartIcon = styled(EmptyHeartsvg)`
    width: 20px;
    height: 20px;
    color: ${props => props.theme.color.red};
`
const CommentIcon = styled(Commentsvg)`
    margin-left: 10px;
    width: 20px;
    height: 20px;
`

interface BookProps {
    title: string
    authors: string
    thumbnail: string
    contents: string
}
interface ItemProps {
    userName: string
    time: string
    bookName: string
    delay?: string
    isLiked?: boolean
}
export default function Item({ userName, time, bookName, isLiked, delay = "0s" }: ItemProps) {
    const [liked, setLiked] = useState(isLiked)
    const [books, setBooks] = useState<BookProps>({
        title: "채식주의자",
        authors: "한강",
        thumbnail: "",
        contents: ""
    })
    const onLike = () => {
        setLiked(!liked)
    }
    useEffect(() => {
        const kakao = Kakao()
        kakao
            .search(bookName)
            .then(response => setBooks(response.data.documents[0]))
            .catch(e => {
                console.error(e)
            })
    }, [bookName])
    const authorText = books.authors.length > 1 ? `${books.authors[0]} 등` : books.authors[0]
    return (
        <FadeIn delay={delay}>
            <Wrapper>
                <Header>
                    <LeftWrapper>
                        <Profile />
                        <UserWrapper>
                            <UserName>{userName}</UserName>
                            <Time>{time}</Time>
                        </UserWrapper>
                    </LeftWrapper>
                </Header>

                <ContentWrapper>
                    <BookImage src={books.thumbnail} alt={"bookImage"} loading="lazy" />
                    <FeedWrapper>
                        <BookName>{books.title}</BookName>
                        <AuthorName>{authorText} 지음</AuthorName>
                        <Text>{books.contents}</Text>

                        <IconWrapper>
                            <div onClick={onLike}>{liked ? <FullHeartIcon /> : <EmptyHeartIcon />}</div>
                            <CommentIcon />
                        </IconWrapper>
                    </FeedWrapper>
                </ContentWrapper>
            </Wrapper>
        </FadeIn>
    )
}
