import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    min-width: 400px;
    width: 100vw;
    height: 100%;
    margin: 0 auto;
    background-color: #f5f5f5;
`
export default function Background({ children }: { children: React.ReactNode }) {
    return <Wrapper>{children}</Wrapper>
}
