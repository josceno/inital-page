const express = require('express');
const app = express();
const data = require('./data.json')
app.use(express.json())

// http verbs
//GET: get resources data
//POST send data to resource 
//PUT update resource data
//DELETE erase resource data
app.use(express.static('./public'))

app.get('/client', function(req,res){
    res.json(data)
}) 

app.listen(5081,()=>{
    console.log('online on 5081 port')
})


