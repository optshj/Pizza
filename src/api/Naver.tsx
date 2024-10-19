import axios from "axios"

export default function Naver() {
    const naver = axios.create({
        baseURL: "https://openapi.naver.com/v1/search",
        headers: {
            "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
            "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_CLIENT_SECRET
        }
    })
    return {
        search: (query: string) => naver.get(`/book.json?query=${encodeURIComponent(query)}`)
    }
}
