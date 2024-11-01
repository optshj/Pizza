import styled from "styled-components"

import BackgroundImage from "../../assets/image/backgroundImage.png"
import ProfileImage from "../../assets/image/profile2.png"

import Header from "../Main/components/Header"
import NavigationBar from "../Main/components/NavigationBar"

import { ReactComponent as Fullstarsvg } from "../../assets/icon/fullstar.svg"
import { ReactComponent as Emptystarsvg } from "../../assets/icon/emptystar.svg"
import { ReactComponent as Pizzasvg } from "../../assets/icon/pizzalv3.svg"

import FadeIn from "../Login/components/FadeIn"
import { useUserName } from "../../context/UserNameContext"
import MyShelves from "./components/MyShelves"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const StoreBackground = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 100;
`
const Profile = styled.img`
    width: 104px;
    height: 104px;
    border-radius: 50%;
    transform: translateY(70%);
    z-index: 1500;
`
const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
`
const UserName = styled.div`
    font-size: 25px;
    color: #000;
    margin-top: 50px;
    text-align: center;
    white-space: nowrap;
`
const Emphasis = styled.span`
    color: ${({ theme }) => theme.color.red};
`
const MoreDetail = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%; /* 중앙 정렬을 위해 너비 설정 */
    max-width: 400px; /* 최대 너비 */
    margin: 0 auto; /* 가운데 정렬 */
    margin-top: 14px;
`
const LeftWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const RightWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
const StarWrapper = styled.div`
    margin-left: 7px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const UserText = styled.div`
    font-size: 18px;
    white-space: nowrap;
    color: #262525;
    font-weight: 600;
    margin-right: 10px;
`
const EmptyStar = styled(Emptystarsvg)`
    width: 18px;
    height: 18px;
`
const FullStar = styled(Fullstarsvg)`
    width: 18px;
    height: 18px;
`
const Pizza = styled(Pizzasvg)`
    width: 20px;
    height: 20px;
`

export default function MyStore() {
    const { userName } = useUserName()
    return (
        <Wrapper>
            <Header />
            <StoreBackground>
                <Profile src={ProfileImage} alt="Profile" />
            </StoreBackground>
            <FadeIn delay="1s">
                <ProfileWrapper>
                    <UserName>
                        <Emphasis>{userName}</Emphasis>가게
                    </UserName>
                    <MoreDetail>
                        <LeftWrapper>
                            <UserText>LV.3 고수 사장님</UserText>
                            <Pizza />
                        </LeftWrapper>
                        <RightWrapper>
                            <UserText>리뷰 35개</UserText>
                            <StarWrapper>
                                <FullStar />
                                <FullStar />
                                <FullStar />
                                <FullStar />
                                <EmptyStar />
                            </StarWrapper>
                        </RightWrapper>
                    </MoreDetail>
                    <MyShelves
                        text="내 책장"
                        books={["오늘 밤, 세계에서 이 사랑이 사라진다 해도", "우리는 왜 숫자에 속을까", "회복탄력성"]}
                    />

                    <MyShelves
                        text={"빌려온 책장📚"}
                        books={[
                            "일 잘하는 사람이 반드시 쓰는 글 습관",
                            "쉬는 기술",
                            "100일 아침 습관의 기적",
                            "Clean Code 클린 코드"
                        ]}
                    />
                </ProfileWrapper>
            </FadeIn>
            <NavigationBar />
        </Wrapper>
    )
}
