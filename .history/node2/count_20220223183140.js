alfa =['a','e','i','o','u','y']
beto = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z']
let space;
let wordindicev = false
let wordindicec = false
let wordcount = 0
var s = 1
let nome = 'nomegenerico agua mole pedra dura '
var word = nome.split(' ')
console.log(word)
console.log(word[0])
console.log(word.length)
console.log(`${wordcount}: 1palavras`)

for(var j = 0; j < word.length; j++){
for(var i = 0; i < word[j].length; i++){
    var letra = nome.charAt(i)
    //console.log(nome.charAt(i));
    //console.log('letra:',alfa.indexOf(letra), letra)
    
    if(alfa.indexOf(letra)>= 1){
        //console.log(`vogal ${nome.charAt(i)}`)
        wordindicev = true
        //if(wordindicev >1 ){wordindicev = wordindicev-1}
        //console.log('indicev',wordindicev)
    }
    if(beto.indexOf(letra)>= 1){
        //console.log(`vogal ${nome.charAt(i)}`)
        wordindicec = true
        //if(wordindicec>1 ){wordindicec = wordindicec-1}
        //console.log('indicec',wordindicec)
    }
    if(wordindicec == false || wordindicec == false){
        word.lenght = word.length-1
    }   
    
    if(letra == ' '){
       space = space +1 
    } 
    }
    if(wordindicec == true && wordindicev == true ){
        wordcount = wordcount + 1
        //console.log(`${wordcount}: palavras`)

    }

    if(space == 1 ){
        console.log(`1Consoantes:${wordindicec} 1vogais: ${wordindicev}`) 
        wordindicec = 0
        wordindicev = 0
        console.log(`Consoantes:${wordindicec} vogais: ${wordindicev}`) 

    } 

}
console.log(`${wordcount}: palavras`)


 
//console.log(__dirname)     
 