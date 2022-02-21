const f = function()
{ 

const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))

app.get('/store',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./index2.html'))

})
console.log('appS imported suceffully')
}
/*try
{
    app.listen(5081,()=>{
        console.log('5081')
    })
}catch{
    app.listen(5082,()=>{
        console.log('5082')
    })

}*/
module.exports = f;