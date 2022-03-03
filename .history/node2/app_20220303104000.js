const express = require('express')
const app = express()
const product = require('./data.json')

app.use(express.json())


app.get('/api/data',(req,res)=>{
    //res.json(product)
    const newProducts = product.map((products)=>{
        const {id, name, image} = products;
        return{id,name,image}
    })
    res.json(newProducts)  
})
app.get('/api/data/:id',(req,res)=>{
    const {id} = req.params
    const singleProduct = product.find((product)=>product.id === Number(id))
    if(!singleProduct){
        return res.status(404).send('<h1>404 \n not found')
    }
    return res.json(singleProduct)
})
app.get('api/data/:id/reviwes/:reviewsID',(req,res)=>{
    console.log(req.params)
    res.send(`<h1> Hello word ${req.params}`)
})

app.listen(5081,()=>{
    console.log('online on 5081 port')
})


