alfa =['a','e','i','o','u','y']
beto = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z']

console.log("test")
let nome = 'nomegenerico'
for(var i = 0; i < nome.length; i++){
    var letra = nome.charAt(i)
    //console.log(nome.charAt(i));
    console.log('letra:',alfa.indexOf(letra), letra)
    if(alfa.indexOf(letra)>= 1){
        console.log(`vogal ${nome.charAt(i)}`)
    }
    
}
 
//console.log(__dirname)     
 
 // MORRA