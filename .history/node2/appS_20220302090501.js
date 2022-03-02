const datasend = function(){
const express = require('express')
const app = express()
const {products} = require('./data.js')


console.log('appS imported suceffully')
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
/*app.listen(5000, () =>{
    console.log('Server is listen on 5000')
})*/
}
module.exports = datasend.f