const express = require('express')
const app = express()
const Connect=require ('./dbConnection')
const Router=require('./routes')
const port = 8000

Connect()

app.use(express.json())

app.use('/api',Router)


app.listen(port)