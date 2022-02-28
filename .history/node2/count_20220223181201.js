alfa =['a','e','i','o','u','y']
beto = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z']
let space;
let wordindicev = 0
let wordindicec = 0
let wordcount = 0
var s = 1
let nome = 'nomegenerico  agora vamos  testar'
var word = nome.split(' ')
console.log(word[0])
console.log(word.length)
console.log(`${wordcount}: 1palavras`)

for(var j = 0; j < word.length; j++){
for(var i = 0; i < word[j].length; i++){
    var letra = nome.charAt(i)
    //console.log(nome.charAt(i));
    //console.log('letra:',alfa.indexOf(letra), letra)
    
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
    
    if(letra == ' '){
       space = space +1 
    } 
    }
    if(wordindicec + wordindicev == 2){
        wordcount = wordcount + 1
        console.log(`${wordcount}: palavras`)

    }

    if(space == 1 ){
        console.log(`1Consoantes:${wordindicec} 1vogais: ${wordindicev}`) 
        wordindicec = 0
        wordindicev = 0
        console.log(`Consoantes:${wordindicec} vogais: ${wordindicev}`) 

    } 

}

 
//console.log(__dirname)     
 