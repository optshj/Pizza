require("dotenv").config()
const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "https://openapi.naver.com",
            changeOrigin: true,
            onProxyReq: proxyReq => {
                proxyReq.setHeader("X-Naver-Client-Id", process.env.REACT_APP_NAVER_CLIENT_ID)
                proxyReq.setHeader("X-Naver-Client-Secret", process.env.REACT_APP_NAVER_CLIENT_SECRET)
            }
        })
    )
}
