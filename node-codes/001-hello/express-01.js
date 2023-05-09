const express = require('express');
const cors = require('cors')

const app = express()

app.use(cors())

app.get("/hello", (req, res) => {
    res.send("Hello World")
})

app.listen(8080, () => {
    console.log("后端服务启动成功")
})
