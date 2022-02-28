alfa =['a','e','i','o','u','y']
beto = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z']

console.log("test")
let nome = 'nomegenerico'
for(var i = 0; i < nome.length; i++){
    console.log(nome.charAt(i));
    if(i in beto){
        console.log(`vogal ${nome.charAt(i)}`)
    }
}
 
//console.log(__dirname)     
 
 // MORRA