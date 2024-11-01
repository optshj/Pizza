const express = require("express")
const { exec } = require("child_process")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

app.post("/ask", (req, res) => {
    const question = req.body.question

    exec(
        `python /Users/kim_jeonghyeon/VSCodeProjects/llama.cpp/_04_get_answer.py --question "${question}"`,
        (error, stdout, stderr) => {
            if (error) {
                return res.status(500).json({ error: error.message })
            }
            if (stderr) {
                return res.status(500).json({ error: stderr })
            }

            const answerMatch = stdout.match(/\[Answer\]\s*A:\s*(.*)/s)
            if (answerMatch) {
                let answer = answerMatch[1].trim()
                // 한글로 시작하는 첫 번째 위치를 찾기 위한 정규 표현식
                const firstKoreanCharIndex = answer.search(/[가-힣]/)
                if (firstKoreanCharIndex !== -1) {
                    answer = answer.substring(firstKoreanCharIndex).trim()
                }
                res.json({ answer })
            } else {
                res.status(500).json({ error: "답변을 파싱하는 중 오류가 발생했습니다." })
            }
        }
    )
})

app.listen(5001, () => {
    console.log("Server is running on http://localhost:5001")
})
