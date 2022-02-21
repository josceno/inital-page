//const express = require("express")
//const app = express();
const {readFileSync} = require('fs')
const path= require('path')
var a = __dirname
var b = ('\\index.html')
var c = ('\\style.css')
var d = ('\\script.js')

const http = require('http')

var splito = a.split('\\')
var dir = splito.reverse().slice(-5).reverse().join('\\')
console.log('aqui',dir+b)

const Index = readFileSync(dir+b)
const Indecss = readFileSync(dir+c)
const indolgic = readFileSync(dir+d)


const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url === '/')
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(Index)
        console.log('html reached')
        res.end()
    }
    else if(url === '/style.css')
    {
        res.writeHead(200,{'content-type': 'text/css'})
        res.write(Indecss)
        console.log('css reached')
       
        res.end()
    }
    else if(url === '/script.js')
    {
        res.writeHead(200, {'content-type':'text/js'})
        res.write(indolgic)
        console.log('js reached')
        res.end()
    }
  
})
console.log('nodemon works well')
server.listen(5081)
/*app.use('style.css', express.static('C:/Users/user/Downloads/inventione desafio/style.css'))
app.get("/",async(req,res)=>{    
    res.write(Index)
    
});

app.listen(8081,()=>{
    console.log("iniciado na 8080 http://localhost:8081")
})*/
//////////////// /////////