import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    position: fixed;
    max-width: 600px;
    min-width: 320px;
    width: 100%;
    bottom: 0;
    padding: 12px;
    margin: 0 auto;
    box-sizing: border-box;
    border-top: 1px solid #0f0f0f;
    background-color: ${props => props.theme.color.red};
`
export default function NavigationBar() {
    return <Wrapper>네비게이션 바</Wrapper>
}
