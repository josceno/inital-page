const express = require('express')
const path = require('path')
const f = require('./appS')
const app = express()

var a = __dirname
var b = ('\\index.html')

var splito = a.split('\\')
var dir = splito.reverse().slice(-5).reverse().join('\\')

app.use(express.static('Mpublic'))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname, dir+b))
})
f();
//app.listen(5081)