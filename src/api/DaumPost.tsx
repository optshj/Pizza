import { useState } from "react"
import DaumPostcodeEmbed from "react-daum-postcode"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${props => props.theme.color.yellow};
`
const Text = styled.div``
export default function DaumPost() {
    const [sido, setSido] = useState<string>("")
    const [sigungu, setSigungu] = useState<string>("")
    const [bname, setBname] = useState<string>("")

    const handleComplete = (data: any) => {
        setSido(data.sido)
        setSigungu(data.sigungu)
        setBname(data.bname)
        console.log(sido, sigungu)
    }
    return (
        <>
            <DaumPostcodeEmbed onComplete={handleComplete} />
            <Wrapper>
                <Text>주소의 결과</Text>
                <Text>{sido}</Text>
                <Text>{sigungu}</Text>
                <Text>{bname}</Text>
            </Wrapper>
        </>
    )
}
