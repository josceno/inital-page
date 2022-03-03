const express = require('express')
const app = express()
const data = require('./data.json')

app.use(express.json())


app.get('/api/data',(req,res)=>{
    res.json(data)
})

app.listen(5081,()=>{
    console.log('online on 5081 port')
})


