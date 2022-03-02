const express = require('express')
const fs = require('fs')
const path = require('path')
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
////////
app.get('/store',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./index2.html'))
    console.log('1 layer')
})
//////////
const {products} = require('./data.json')



//define database url
const f = app.get('/api/data',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id, name, image} = product;
        return {id,name,image}
    })
    res.json(newProducts)
    console.log('appS imported suceffully1')
})
//search by id
app.get('/api/data/:id',(req,res)=>{
    console.log(req)
    console.log(req.params)
    const {id} = req.params
    const singleProduct = products.find((product) =>product.id === Number(id))
    

    if(!singleProduct){
        /*return*/ res.status(404).send('<h1>theres no such data</h1>')
    }
    /*return*/ res.json(singleProduct)
})
app.get('/api/data/:id/filter/:filterkey',(req,res)=>{
    console.log(req.params)
    res.send('<h1>Hello world</h1>')
})
app.get('/api/v1/query',(req,res)=>{
    console.log(req.query)
    const {search,limit} = req.query
    let sortedProducts = [...products]
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length<1)
    {
        //res.status(200).send('no data matcher your search')
        return res.status(200).json({sucess: true, data:[]})

    }
    res.status(200).json(sortedProducts)
    
})




app.listen(5081)