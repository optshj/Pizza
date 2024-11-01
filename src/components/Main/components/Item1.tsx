import styled, { keyframes } from "styled-components"
import FadeIn from "../../Login/components/FadeIn"
import image1 from "../../../assets/ItemImage/image1.jpg"
import image2 from "../../../assets/ItemImage/image2.jpg"
import image3 from "../../../assets/ItemImage/image3.jpg"
import image4 from "../../../assets/ItemImage/image4.jpg"
import image5 from "../../../assets/ItemImage/image5.jpg"

const Wrapper = styled.div`
    width: calc(100% - 48px);
    margin-top: 30px;
`
const TitleText = styled.div`
    width: 100%;
    font-size: 25px;
    font-weight: bold;
    color: #000000;
    height: 39px;
    margin-bottom: 10px;
    white-space: nowrap;
`
const slide = keyframes`
    0% { transform: translateX(0); }
    20% { transform: translateX(0); }
    25% { transform: translateX(-100%); }
    45% { transform: translateX(-100%); }
    50% { transform: translateX(-200%); }
    70% { transform: translateX(-200%); }
    75% { transform: translateX(-300%); }
    95% { transform: translateX(-300%); }
    100% { transform: translateX(0); }
`

const ImageWrapper = styled.div`
    display: flex;
    width: 100%;
    overflow: hidden;
    border-radius: 23px;
`

const Image = styled.div<{ $image: string }>`
    min-width: 100%;
    height: 55vw;
    max-height: 350px;
    background-color: #ffffff;
    background-image: url(${props => props.$image});
    background-size: cover;
    background-position: center;
    animation: ${slide} 20s infinite;
`

interface ItemProps {
    text: string
}

export default function Item1({ text }: ItemProps) {
    return (
        <Wrapper>
            <FadeIn delay="0.5s">
                <TitleText>{text}</TitleText>
                <ImageWrapper>
                    <Image $image={image1} />
                    <Image $image={image2} />
                    <Image $image={image3} />
                    <Image $image={image4} />
                    <Image $image={image5} />
                </ImageWrapper>
            </FadeIn>
        </Wrapper>
    )
}
