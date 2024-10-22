import axios from "axios"

export default function SearchBook() {
    const kakao = axios.create({
        baseURL: "https://dapi.kakao.com",
        headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_KEY}`,
            KA: "sdk/1.0.0 os/javascript lang/ko-KR origin/https://optshj.github.io/Pizza/"
        }
    })
    return {
        search: (name: string) =>
            kakao.get("/v3/search/book?target=title", {
                params: { query: name }
            })
    }
}
