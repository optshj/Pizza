import axios from "axios"

export default function bookSearch() {
    return {
        search: (name: string) =>
            axios.get(`/api/v3/search/book?target=title`, {
                params: { query: name },
                headers: {
                    Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_KEY}`,
                    KA: "sdk/1.0.0 os/javascript lang/ko-KR origin/https://optshj.github.io/Pizza/"
                }
            })
    }
}
