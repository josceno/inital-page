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
app.get('/api/query',(req,res)=>{
    const {search,limit} = req.query
    let sortedProducts = [...product]
    if(search){
        sortedProducts = sortedProducts.filter((products)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length<1){
        return res.status(200).json({sucess:true, data:[]})
    }
    res.status(200).json(sortedProducts)

})

app.listen(5081,()=>{
    console.log('online on 5081 port')
})


