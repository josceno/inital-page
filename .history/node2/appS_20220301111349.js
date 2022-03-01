const express = require('express')
const app = express()
const {products} = require('./data.js')


app.get('/', (req,res)=>{
    res.send('<h1>data paage?</h1>')
})

app.listen(5000, () =>{
    console.log('Server is listen on 5000')

})