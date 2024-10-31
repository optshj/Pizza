import { useState, memo, useEffect } from "react"
import styled from "styled-components"

import { ReactComponent as CheckCircleDisable } from "../../../assets/icon/CheckCirlceDisable.svg"
import { ReactComponent as CheckCircleActive } from "../../../assets/icon/CheckCirlceActive.svg"

import { usePrice } from "../../../context/PriceContext"

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 16px;
    position: relative;
`
const ExplainWrapper = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
`
const Author = styled.div`
    font-size: 15px;
    color: #797979;
`
const PriceWrapper = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
`
const Price = styled.div`
    font-size: 20px;
    font-weight: 700;
`
const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ko-KR").format(price)
}

interface ComponentsProps {
    price: number
    date: number
    title: string
    author: string
}
export default memo(function Components({ price, date, title, author }: ComponentsProps) {
    const [isSelect, setIsSelect] = useState(true)
    const { addPrice, removePrice } = usePrice()

    useEffect(() => {
        addPrice(price)
        return () => {
            removePrice(price)
        }
    }, []) // eslint-disable-next-line react-hooks/exhaustive-deps

    const onClick = () => {
        setIsSelect(!isSelect)
        if (isSelect) {
            removePrice(price)
        } else {
            addPrice(price)
        }
    }

    return (
        <ItemWrapper onClick={onClick}>
            {isSelect ? <CheckCircleActive /> : <CheckCircleDisable />}
            <ExplainWrapper>
                <Title>{title}</Title>
                <Author>{author}</Author>
            </ExplainWrapper>
            <PriceWrapper>
                <Price>{formatPrice(price)}원</Price>
                <Price>/</Price>
                <Price>{date}일</Price>
            </PriceWrapper>
        </ItemWrapper>
    )
})
