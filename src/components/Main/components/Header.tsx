import styled from "styled-components"

import { ReactComponent as Logosvg } from "../../../assets/logo/LogoTransverse.svg"
import { ReactComponent as Alarmsvg } from "../../../assets/icon/bell-svgrepo-com-3.svg"
import { ReactComponent as Cartsvg } from "../../../assets/icon/shopping-cart-svgrepo-com-3.svg"
import { Link } from "react-router-dom"

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 21px;
    background-color: #ffffff;
`
const IconWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
`
const Alarm = styled(Alarmsvg)`
    width: 45px;
    height: 45px;
    padding-right: 5px;
    color: ${({ theme }) => theme.color.red};
`
const Cart = styled(Cartsvg)`
    width: 45px;
    height: 45px;
    color: ${({ theme }) => theme.color.red};
    margin-left: 15px;
`
const Logo = styled(Logosvg)`
    height: 45px;
`

export default function Header() {
    return (
        <HeaderWrapper>
            <Link to="/main/home">
                <Logo />
            </Link>
            <IconWrapper>
                <Link to="/main/alarm">
                    <Alarm />
                </Link>
                <Link to="/main/basket">
                    <Cart />
                </Link>
            </IconWrapper>
        </HeaderWrapper>
    )
}
