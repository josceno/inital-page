alfa =['a','e','i','o','u','y']
beto = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z']
var quoti = 'Nomé génrico de dddd 1111 aaaáa OUTRO VAMOS tentar outra porque eu não estou confiante ?'
//console.log(quoti.normalize('NFD').replace(/[\u0300-\u036f]/g,""))
console.log(quoti.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,""))

let quote = quoti.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"")
 
var vogal = 0
var consonant = 0 

var count = []
var wordo =[]
var word = quote.split(/\W+/)
    //console.log(word)
function isavord(){
    //wordo.push(word[0]) 
    for (var A = 0; A< word.length; A++){
        //console.log(word[A])
    
    wordo = []
    //console.log(wordo)
    for (i = 0; i < word[A].length; i++){
        //console.log(word[A].charAt(i))
        wordo.push(word[A].charAt(i))
        
    }
    //console.log(wordo)
    for (var j =0; j <wordo.length; j++)
    {
        //console.log(wordo[j],alfa.indexOf(wordo[j]))
        if(alfa.indexOf(wordo[j])>=0)
        {
            vogal =1 
            //console.log(alfa.indexOf(wordo[j]), `vogalnum: ${vogal}`, `vogal: ${wordo[j]}` ) 
        }
        if(beto.indexOf(wordo[j])>=0)
        {
            consonant =1 
            //console.log(beto.indexOf(wordo[j]), `consonat: ${consonant}`,`consonat: ${wordo[j]}`)          
        }      
    }
    if(consonant + vogal == 2)
    {
        count.push(word[A])
        //console.log(count)
        vogal = 0
        consonant = 0
    }else{
        vogal = 0
        consonant = 0
    }   
}
console.log(count)
console.log(`numero de palavras ${count.length}`)
//if(alfa.indexOf(wordo))
}
isavord()


 
//console.log(__dirname)     
 