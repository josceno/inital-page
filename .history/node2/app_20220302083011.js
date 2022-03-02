const express = require('express')
const path = require('path')
const datasend = require('./appS')
const app = express()
datasend()
var a = __dirname
var b = ('\\index.html')

var splito = a.split('\\')
var dir = splito.reverse().slice(-5).reverse().join('\\')

app.use(express.static('Mpublic'))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname, dir+b))
    console.log('reached')
})
app.use(express.static('./public'))

app.get('/store',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./index2.html'))
    console.log('1 layer')
})




app.listen(5081)