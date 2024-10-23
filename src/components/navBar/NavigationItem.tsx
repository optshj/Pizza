import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #686868;
`
interface NavigationItemProps {
    icon: string
    text: string
    url: string
}
export default function NavigationItem({ icon, text, url }: NavigationItemProps) {
    return <Wrapper></Wrapper>
}
