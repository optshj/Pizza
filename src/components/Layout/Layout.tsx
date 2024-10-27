import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    height: 100vh;
    background-color: #f5f5f5;
    margin: 0 auto;
    overflow-x: hidden;
`
export default function Layout({ children }: { children: React.ReactNode }) {
    return <Wrapper>{children}</Wrapper>
}
