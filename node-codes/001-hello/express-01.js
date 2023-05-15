const express = require('express');
const cors = require('cors')

const app = express()

// app.use(cors())

app.get("/hello", (req, res) => {
    console.log("请求进来了", "请求方式", req.method)
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Methods', 'GET');
    res.send("Hello World 123")
})

app.listen(8080, () => {
    console.log("后端服务启动成功")
})
