import styled from "styled-components"
import { Link } from "react-router-dom"

import { ReactComponent as Charactersvg } from "../../assets/character/BodyRed.svg"
import { ReactComponent as Logosvg } from "../../assets/logo/LogoSquare.svg"

const Logo = styled(Logosvg)`
    margin-top: 20%;
    width: 40%;
`
const Character = styled(Charactersvg)`
    margin-top: 40px;
    width: 40%;
`
const KakaoLogin = styled.button`
    position: absolute;
    bottom: 20%;
    width: 331px;
    height: 64px;
    background-color: rgb(250, 225, 0);
    border-radius: 13px;
    font-size: 22px;
`
const OtherLogin = styled.button`
    font-size: 12px;
    text-decoration: underline;
    color: rgb(88, 88, 88);
    position: absolute;
    bottom: 15%;
`
export default function Login() {
    const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
    const onClick = () => {
        window.location.href = link
    }

    return (
        <>
            <Logo />
            <Character />
            <KakaoLogin onClick={onClick}>{"카카오로 시작하기"}</KakaoLogin>
            <OtherLogin>
                <Link to="/name">{"다른 계정으로 로그인하기"}</Link>
            </OtherLogin>
        </>
    )
}
