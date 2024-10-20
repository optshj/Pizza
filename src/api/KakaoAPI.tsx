import axios from "axios"

const Kakao = axios.create({
    baseURL: "https://dapi.kakao.com",
    headers: {
        Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_KEY}`,
        KA: "sdk/1.0.0 os/javascript lang/ko-KR origin/http://localhost:3000"
    }
})

export default function bookSearch() {
    return {
        search: (name: string) =>
            Kakao.get(`/v3/search/book?target=title`, {
                params: { query: name }
            })
    }
}
