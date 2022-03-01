const express = require('express')
const app = express()
const {products} = require('./data.js')


app.get('/', (req,res)=>{
    res.send('<h1>data page?</h1><a href="/api/data">products</a> ')
})
app.get('/api/data',(req,res)=>{
    const newProducts = products.map((products)=>{
        const {id, name, image}
    })

})
app.listen(5000, () =>{
    console.log('Server is listen on 5000')

})