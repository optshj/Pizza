import axios from "axios"

export default function Naver() {
    return {
        search: (query: string) =>
            axios.get(`api/v1/search/book.json?query=${encodeURIComponent(query)}`, {
                headers: {
                    "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
                    "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_CLIENT_SECRET
                }
            })
    }
}
