import styled from "styled-components"

import { ReactComponent as Charactersvg } from "../../assets/character/BodyRed.svg"
import { ReactComponent as Logosvg } from "../../assets/logo/LogoSquare.svg"

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Logo = styled(Logosvg)`
    margin-top: 25%;
    width: 40%;
`
const Character = styled(Charactersvg)`
    margin-top: 40px;
    width: 50%;
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
    return (
        <Wrapper>
            <Logo />
            <Character />
            <KakaoLogin>카카오로 시작하기</KakaoLogin>
            <OtherLogin>다른 계정으로 로그인하기</OtherLogin>
        </Wrapper>
    )
}
