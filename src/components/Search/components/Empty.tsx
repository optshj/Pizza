import styled, { keyframes } from "styled-components"

import { useSearch } from "../../../context/SearchContext"
import { ReactComponent as EmptyPizza } from "../../../assets/icon/emptyPizza.svg"

const fadeInUp = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    opacity: 0;
    animation: ${fadeInUp} 1s forwards;
    animation-delay: "0.5s";
`
const Icon = styled(EmptyPizza)`
    margin-bottom: 20px;
`
const Text = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: #000;
`
const Emphasis = styled.span`
    color: ${({ theme }) => theme.color.yellow};
`
export default function Empty() {
    const { searchTerm } = useSearch()

    return (
        <Wrapper>
            <Icon />
            <Text>
                <Emphasis>{searchTerm}</Emphasis>에 대한
            </Text>
            <Text>{"검색 결과가 없습니다"}</Text>
        </Wrapper>
    )
}
