import { Link } from "react-router-dom"
import styled from "styled-components"

import { ReactComponent as PreviousIcon } from "../../../assets/icon/previousArrowBackSvgrepoCom.svg"

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    background-color: #ffffff;
    position: fixed;
    z-index: 100;
`
const HeaderText = styled.div`
    color: ${({ theme }) => theme.color.red};
    font-size: 25px;
    white-space: nowrap;
    margin: 17px;
    font-weight: bold; /* 볼드 처리 추가 */
`

const PrevLink = styled(Link)`
    position: absolute;
    left: 22px;
    display: flex;
    align-items: center;
`

const PrevIcon = styled(PreviousIcon)`
    cursor: pointer;
`

export default function Header() {
    return (
        <Wrapper>
            <PrevLink to="/main/home">
                <PrevIcon />
            </PrevLink>
            <HeaderText>장바구니</HeaderText>
        </Wrapper>
    )
}
