import styled from "styled-components"

const Text = styled.p`
    width: 264px;
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    white-space: pre-line; /* 기본 줄바꿈 허용 */
    word-wrap: break-word; /* 단어가 길 경우 줄바꿈 */
`

export const prs1 = (
    <Text>
        누군가가 내 가게를
        <br /> 팔로우했어요!
    </Text>
)

export const prs2 = (
    <Text>
        사과 딸기 바나나
        <br /> 포도 청포도 <br />
        샤인머스캣!
    </Text>
)

export const prs3 = (
    <Text>
        카리나 위플래시 직캠
        <br />
        윈터 하츄핑
    </Text>
)
