import styled from "styled-components"

import { ReactComponent as PizzaLv1 } from "../../../assets/icon/Pizza1.svg"

import Components from "./Component"
import FadeIn from "../../Login/components/FadeIn"

const Wrapper = styled.div`
    width: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    border-radius: 17px;
    background-color: #fff;
    margin: 20px auto;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`
const TitleWrapper = styled.div`
    border-bottom: 2px solid #b1b1b1;
    display: flex;
    align-items: center;
    flex-direction: row;
    color: ${({ theme }) => theme.color.red};
    margin: 16px;
    padding-bottom: 7px;
`
const UserName = styled.div`
    font-size: 23px;
    margin-left: 10px;
    white-space: nowrap;
`

interface ComponentsProps {
    price: number
    date: number
    title: string
    author: string
}
interface ItemProps {
    userName: string
    level: number
    components: ComponentsProps[]
}
export default function Item({ userName, level, components }: ItemProps) {
    return (
        <FadeIn>
            <Wrapper>
                <TitleWrapper>
                    <PizzaLv1 />
                    <UserName>{userName}</UserName>
                </TitleWrapper>
                {components.map((component, index) => (
                    <Components
                        key={index}
                        price={component.price}
                        date={component.date}
                        title={component.title}
                        author={component.author}
                    />
                ))}
            </Wrapper>
        </FadeIn>
    )
}
