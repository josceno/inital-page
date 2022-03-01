const express = require('express')
const app = express()
const {products} = require('./data.js')


app.get('/', (req,res)=>{
    res.send('<h1>data page?</h1><a href="/api/data">products</a> ')
})
app.get('/api/data',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id, name, image} = product;
        return {id,name,image}
    })
    res.json(newProducts)
})

app.get('api/data/1',(req,res)=>{
    //const singleProduct = products.find((product) =>product.id === 1)
    
    res.json(singleProduct)
})
app.listen(5000, () =>{
    console.log('Server is listen on 5000')

})