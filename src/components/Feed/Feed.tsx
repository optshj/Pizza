import styled from "styled-components"

import { ReactComponent as MakeFeedsvg } from "../../assets/icon/newFeed.svg"

import Header from "../Main/components/Header"
import NavigationBar from "../Main/components/NavigationBar"

import Item from "./components/Item"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const ItemWrapper = styled.div`
    overflow-y: auto;
    padding-bottom: 100px;
`

const MakeNewFeed = styled(MakeFeedsvg)`
    position: fixed;
    bottom: 100px;
    right: 20px;

    @media (min-width: 600px) {
        right: calc((100% - 600px) / 2 + 20px);
    }
`

export default function Feed() {
    return (
        <Wrapper>
            <Header />
            <ItemWrapper>
                <Item
                    userName={"책상피자"}
                    time={"오후 4:38"}
                    bookName={"나는 앞으로 몇 번의 보름달을 볼 수 있을까"}
                    isLiked={true}
                />
                <Item userName={"웃음꽃피자"} time={"오후 5:22"} bookName={"무지의 즐거움"} />
                <Item userName={"허혜호피자"} time={"오후 6:30"} bookName={"채식주의자"} />
                <Item userName={"허혜호피자"} time={"오후 6:30"} bookName={"퓨처셀프"} />
                <Item userName={"한조각피자"} time={"오전 1:13"} bookName={"원피스"} />
                <Item userName={"공책피자"} time={"오전 3:13"} bookName={"마더텅"} />
            </ItemWrapper>
            <MakeNewFeed />
            <NavigationBar />
        </Wrapper>
    )
}
