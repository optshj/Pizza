import styled from "styled-components"

import BackgroundImage from "../../assets/image/backgroundImage.png"
import ProfileImage from "../../assets/image/profile2.png"

import Header from "../Main/components/Header"
import NavigationBar from "../Main/components/NavigationBar"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 212px;
    flex-direction: column;
    position: relative;
`
const StoreBackground = styled.div`
    width: 100%;
    height: 153px;
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-position: center;
    position: absolute;
    z-index: 100;
`
const Profile = styled.img`
    width: 104px;
    height: 104px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
`

export default function MyStore() {
    return (
        <Wrapper>
            <Header />
            <ProfileWrapper>
                <StoreBackground />
                <Profile src={ProfileImage} alt="Profile" />
            </ProfileWrapper>
            <NavigationBar />
        </Wrapper>
    )
}
