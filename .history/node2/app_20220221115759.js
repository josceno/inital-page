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
    console.log('reached')
})
app.use(express.static('./public'))

app.get('/store',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./index2.html'))
    console.log('1 layer')
})
console.log('appS imported suceffully')



app.listen(5081)