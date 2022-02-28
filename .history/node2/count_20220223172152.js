alfa =['a','e','i','o','u','y']
beto = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z']

let wordindicev = 0
let wordindicec = 0
let wordcount = 0
console.log("test")
let nome = 'nomegenerico '
for(var i = 0; i < nome.length; i++){
    var letra = nome.charAt(i)
    console.log(nome.charAt(i));
    console.log('letra:',alfa.indexOf(letra), letra)
    
    if(alfa.indexOf(letra)>= 1){
        console.log(`vogal ${nome.charAt(i)}`)
        wordindicev = wordindicev + 1
        if(wordindicev >1 ){wordindicev = wordindicev-1}
        console.log('indicev',wordindicev)
    }
    if(beto.indexOf(letra)>= 1){
        console.log(`vogal ${nome.charAt(i)}`)
        wordindicec = wordindicec + 1
        if(wordindicec>1 ){wordindicec = wordindicec-1}
        console.log('indicec',wordindicec)
    }
    if(wordindicec + wordindicev == 2){
        wordcount = wordcount + 1
        console.log(`${wordcount}: palavras`)
    
    }
    if(wordindicec + wordindicev == 2){
        wordcount = wordcount + 1
        console.log(`${wordcount}: palavras`)
    
    }
    if(letra == ' '){
        console.log(`1Consoantes:${wordindicec} 1vogais: ${wordindicev}`) 
        wordindicec = 0
        wordindicev = 0
        console.log(`Consoantes:${wordindicec} vogais: ${wordindicev}`) 

    } 
    if(i == nome.length){
        console.log(i)
        break
    }
}



 
//console.log(__dirname)     
 
 // MORRA